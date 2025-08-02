import type { Post } from "../types/post";

export const posts: Post[] = [
  {
    id: "article1",
    title: "Top 5 Stratégies Gagnantes en 2024",
    date: "15 Septembre 2024",
    reading: "8 min",
    category: "EXCLUSIF",
    excerpt:
      "Découvrez nos méthodes brevetées : analyse prédictive IA, optimisation des cotes en temps réel, gestion de bankroll dynamique.",
    img: "/images/stratege.jpg",
    slug: "article1",
  },
  {
    id: "article2",
    title: "Optimisation des Bonus sans Risque",
    date: "10 Septembre 2024",
    reading: "6 min",
    category: "GUIDE",
    excerpt:
      "Notre méthodologie premium inclut : arbitrage multi-bookmakers, calcul de valeur attendue (EV+), rotation stratégique des offres.",
    img: "/images/bonus.webp",
    slug: "article2",
  },
  {
    id: "article3",
    title: "Sécurité des Comptes en 5 Étapes",
    date: "5 Septembre 2024",
    reading: "5 min",
    category: "ALERTE",
    excerpt:
      "Protocoles certifiés : authentification biométrique, chiffrement quantum-safe, surveillance 24h/24.",
    img: "/images/securite.jpg",
    slug: "article3",
  },
];