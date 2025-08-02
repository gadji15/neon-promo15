# Neon Promo – Paris Sportifs Next.js Migration

Neon Promo est une plateforme moderne et immersive dédiée aux codes promotionnels et à l’optimisation des paris sportifs.  
Ce dépôt contient la **nouvelle version complète en Next.js 14** (TypeScript, Tailwind), avec pages dynamiques, effets visuels, et système de notifications.

---

## Prérequis

- Node.js v18 ou supérieur
- npm v9+ recommandé

---

## Installation & Lancement

```bash
cd next-app
npm install
npm run dev
```

Accédez ensuite à [http://localhost:3000](http://localhost:3000)

---

## Build & Production

```bash
npm run build
npm start
```

---

## Structure principale

```
next-app/
  app/              # Toutes les routes/pages Next.js (app router)
    apropos/        # À propos
    blog/           # Blog (list + [slug])
    conditions/     # CGU
    confidentialite/# Politique de confidentialité
    contact/        # Contact
    odds-tracker/   # Tracker de cotes en temps réel
    verification/   # Page sécurité
    not-found.tsx   # 404 personnalisée
  components/       # Composants UI réutilisables (Header, Footer, Hero, etc.)
  data/             # Données mock (posts, articles, bonus)
  hooks/            # Hooks custom (useCopyClipboard, useLiveOdds)
  public/
    images/         # Assets statiques (logos, bannières, etc.)
  styles/
    globals.css     # Styles globaux + Tailwind + legacy
  package.json      # Dépendances (react, next, tailwind, chart.js, react-hot-toast…)
```

---

## Fonctionnalités clés

- **Pages dynamiques** (blog, articles, tracker live…)
- **Effets visuels immersifs** (neon theme, animations, particles)
- **Notifications toast** (react-hot-toast)
- **Formulaires interactifs** (contact, newsletter)
- **Tableaux de cotes live + graphiques**
- **Accessibilité et responsive**

---

## Legacy

Tous les anciens fichiers HTML/CSS statiques ont été migrés et supprimés.  
Merci de contribuer via PR ou issues sur la version Next.js uniquement 🟢