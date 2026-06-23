export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { text, voice, speed } = req.body;
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: { text },
          voice: {
            languageCode: 'hu-HU',
            name: voice || 'hu-HU-Standard-A',
          },
          audioConfig: {
            audioEncoding: 'MP3',
            pitch: 0,
            speakingRate: speed || 1,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({
        error: error.error?.message || 'Google API error',
      });
    }

    const data = await response.json();

    if (!data.audioContent) {
      return res.status(500).json({ error: 'No audio content from API' });
    }

    res.status(200).json({
      success: true,
      audioContent: data.audioContent,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: 'Server error: ' + error.message,
    });
  }
}