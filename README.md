# Next Codeshare Superfinal

Features:
- Multi-user codeshare (client-side persistence)
- Profile Picture (avatar) and Banner URLs
- Comments per snippet with avatar and timestamp
- Roles: user/admin and Verified badge (centang biru)
- Follow, Like, Views, Copy button
- API Docs with dynamic baseURL
- Proxy endpoints for external download APIs

Seeded admin:
- username: admin
- password: admin123

Notes:
- All writes (register, snippets, comments, profile edits) persist in browser localStorage (good for demo). Replace with real DB for production.

Deploy steps:
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy

Enjoy! (Generated at 2025-08-26T02:47:27.590650 UTC)
