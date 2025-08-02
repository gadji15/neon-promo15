"use client";
import Link from "next/link";

const socials = [
  {
    href: "https://t.me/cgparis",
    icon: <i className="fab fa-telegram"></i>,
    label: "Telegram",
  },
  {
    href: "https://www.facebook.com/groups/878539870417684/",
    icon: <i className="fab fa-facebook"></i>,
    label: "Facebook",
  },
  {
    href: "https://www.threads.net/@sunugain",
    icon: <i className="fab fa-threads"></i>,
    label: "Threads",
  },
  {
    href: "https://twitter.com",
    icon: <i className="fab fa-twitter"></i>,
    label: "Twitter",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--neon-purple)]/40 mt-24 bg-[#0a0a0f] pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto grid gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Réseaux Sociaux */}
        <div>
          <h4 className="text-[var(--neon-cyan)] font-semibold mb-4">Réseaux Sociaux</h4>
          <ul className="flex gap-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="size-10 flex items-center justify-center rounded-full border border-[var(--neon-cyan)]/40 hover:bg-[var(--neon-pink)] hover:text-black transition shadow-lg text-xl"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Informations */}
        <div>
          <h4 className="text-[var(--neon-cyan)] font-semibold mb-4">Informations</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/conditions" className="nav-glow text-white/80 hover:text-[var(--neon-cyan)] underline-offset-4 transition">{`Conditions d'utilisation`}</Link>
            </li>
            <li>
              <Link href="/confidentialite" className="nav-glow text-white/80 hover:text-[var(--neon-cyan)] underline-offset-4 transition">Confidentialité</Link>
            </li>
            <li>
              <Link href="/apropos" className="nav-glow text-white/80 hover:text-[var(--neon-cyan)] underline-offset-4 transition">À propos</Link>
            </li>
            <li>
              <Link href="/blog" className="nav-glow text-white/80 hover:text-[var(--neon-cyan)] underline-offset-4 transition">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="nav-glow text-white/80 hover:text-[var(--neon-cyan)] underline-offset-4 transition">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 className="text-[var(--neon-cyan)] font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a href="mailto:sunumarketing221@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-[var(--neon-cyan)] transition">
                <i className="fas fa-envelope"></i> sunumarketing221@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+221766304380" className="flex items-center gap-2 text-white/80 hover:text-[var(--neon-cyan)] transition">
                <i className="fas fa-phone"></i> +221 76 630 43 80
              </a>
            </li>
            <li>
              <span className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i> Paris, France
              </span>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h4 className="text-[var(--neon-cyan)] font-semibold mb-4">Newsletter</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: toast("Merci pour votre inscription !");
            }}
          >
            <input
              type="email"
              placeholder="Votre email"
              required
              className="bg-white/10 px-4 py-2 rounded-md border border-[var(--neon-purple)] focus:ring-2 focus:ring-[var(--neon-cyan)] w-full text-white"
            />
            <button
              type="submit"
              className="bg-[var(--neon-cyan)] text-black font-semibold rounded-md w-full py-2 mt-3 hover:bg-[var(--neon-pink)] transition"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              S&apos;abonner
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 text-center text-white/60 text-xs">
        <p>
          © {new Date().getFullYear()} Neon Promo – Tous droits réservés
        </p>
        <p className="mt-2">
          <i className="fas fa-certificate text-[var(--neon-cyan)]"></i>
          <span className="mx-2">Jeu responsable - 18 ans minimum</span>
          <i className="fas fa-certificate text-[var(--neon-pink)]"></i>
        </p>
      </div>
    </footer>
  );
}