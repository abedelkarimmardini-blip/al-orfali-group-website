# Al Orfali Group

A cinematic, responsive real-estate showcase for Al Orfali Group's private residential collection in Beirut.

## Tech Stack

- Next.js 14 App Router
- React 18 and TypeScript
- Tailwind CSS
- Framer Motion, GSAP, and Lenis
- Railway deployment configuration

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production verification:

```bash
npm run lint
npm run build
npm run start
```

## Deploy

### Railway

1. Connect this GitHub repository to a new Railway project.
2. Railway will use `railway.toml` to run `npm run build` and `npm run start`.
3. Generate a public domain from the Railway service settings.

No environment variables or database are required for this demo.

## Demo Content And Images

The site contains realistic demonstration copy, residence availability, pricing, team profiles, and contact details. Replace these with verified project data before a commercial launch.

The visual identity and project imagery in `public/images/official` were prepared from official Al Orfali Group assets. Wide hero and day/night compositions were created from the supplied H7 Tower imagery and optimized for responsive web delivery.

## Notes

- WhatsApp and phone links use demonstration contact details.
- The contact form prepares a WhatsApp inquiry and does not persist submissions.
- Availability figures are demonstration data.
