"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>Réseaux Sociaux</h4>
          <div className="social-links">
            <a href="https://t.me/cgparis" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://www.facebook.com/groups/878539870417684/" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.threads.net/@sunugain" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-threads"></i>
            </a>
            <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Informations</h4>
          <ul className="footer-links">
            <li>
              <Link href="/conditions" className="">{`Conditions d'utilisation`}</Link>
            </li>
            <li>
              <Link href="/confidentialite" className="">Confidentialité</Link>
            </li>
            <li>
              <Link href="/apropos" className="">À propos</Link>
            </li>
            <li>
              <Link href="/blog" className="">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li>
              <a href="mailto:sunumarketing221@gmail.com">
                <i className="fas fa-envelope"></i> sunumarketing221@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+221766304380">
                <i className="fas fa-phone"></i> +221 76 630 43 80
              </a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Paris, France
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
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
              style={{
                width: "100%",
                padding: "0.8rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid var(--neon-purple)",
                borderRadius: "8px",
                color: "white",
              }}
            />
            <button type="submit" className="btn btn-redirect" style={{ marginTop: "1rem" }}>
              <i className="fas fa-paper-plane"></i> S&apos;abonner
            </button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 Neon Promo - Tous droits réservés</p>
        <p style={{ marginTop: "1rem" }}>
          <i className="fas fa-certificate" style={{ color: "var(--neon-cyan)" }}></i>
          Jeu responsable - 18 ans minimum
          <i className="fas fa-certificate" style={{ color: "var(--neon-pink)" }}></i>
        </p>
      </div>
    </footer>
  );
}