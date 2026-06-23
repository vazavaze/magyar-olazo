# 🚀 Vercel Deploy - Egy kattintás!

Szép, professzionális, szerver nélkül - az interneten!

## ⚡ Deploy 1 percben

### 1️⃣ Készítsd elő az összes fájlt

Szükséges fájlok ezt a mappastruktúrát kell követniük:

```
magyar-dokumentum-olazo/
├── api/
│   └── synthesize.js       ← TTS API
├── public/
│   └── index.html          ← Webalkalmazás
├── vercel.json             ← Vercel config
└── README.md
```

### 2️⃣ GitHub-ra feltöltés

1. Hozz létre egy GitHub fiókot (ha nincs): https://github.com/signup
2. Hozz létre egy új repository-t
3. Feltöltsd az összes fájlt

### 3️⃣ Vercel Deploy

Nyisd meg ezt az URL-t (csere: USERNAME és REPO):

```
https://vercel.com/new/clone?repository-url=https://github.com/USERNAME/REPO
```

Vagy egyszerűbb: Menj ide → https://vercel.com/new

- "Import Git Repository"
- Válaszd ki a GitHub repo-d
- Kattints: **Deploy**

### 4️⃣ Environment Variable beállítása

Vercel dashboard-on:
- Menj: Settings → Environment Variables
- Új variable: `GOOGLE_API_KEY`
- Érték: Illeszd be az API kulcsodat
- Save

### 5️⃣ Redeploy

- Kattints: **Deployments** → **...** → **Redeploy**

### 6️⃣ Kész! 🎉

Egy URL-t kapsz, pl:
```
https://magyar-olazo.vercel.app
```

Ezt nyisd meg a böngészőben - működik azonnal!

---

## 🌐 Hogy működik

```
Böngésző (index.html)
    ↓
Vercel Serverless Function (/api/synthesize)
    ↓
Google Cloud Text-to-Speech API
    ↓
MP3 hang
    ↓
Vissza a böngészőbe
```

**Nincs szerver, nincs telepítés, nincs terminál!**

---

## 💡 Pro tippek

- **Domain**: Custom domain-t is hozzáadhatsz
- **HTTPS**: Automatikus SSL
- **Verziókezelés**: GitHub push → Automata redeploy
- **Analytics**: Vercel dashboard

---

## ❓ Problémák?

### "Cannot find module"
→ Ellenőrizd a mappastruktúrát

### "API key error"
→ Vercel Settings → Environment Variables → Add

### "Permission denied"
→ GitHub token frissítése szükséges

---

## 📝 Megjegyzések

- A service ingyenes (100GB havi sávszélesség)
- Az API kulcs biztonságos (szerveren van)
- Globális CDN - gyors mindenhonnan

**Szórakozz! 🎧📚**