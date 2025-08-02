import "../styles/globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ToastProvider } from "../components/ToastProvider";

export const metadata = {
  title: 'Neon Promo',
  description: 'Électrisez vos gains avec nos offres exclusives !',
  // TODO: Add favicon, og:image, more meta
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-pVnWRkD6qh0yF5gN8fL9e+6TfXYy3jAC5vVsQt1zAr72Xd1LSeX776BF3nf6/Dr7qyP5AnbcW2kwiVdc+XWgKw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="font-oxanium bg-[var(--dark-bg)] text-white">
        <div className="neon-loader hidden" style={{display: "none"}} aria-label="Chargement en cours">
          <div className="loader-spinner"></div>
        </div>
        <Header />
        <ToastProvider>
          {children}
        </ToastProvider>
        <Footer />
      </body>
    </html>
  );
}