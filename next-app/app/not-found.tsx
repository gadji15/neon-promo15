import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-[var(--neon-pink)] mb-6">Page introuvable</h1>
      <p className="mb-6 text-white/80">
        Oups, la page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="btn btn-redirect"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}