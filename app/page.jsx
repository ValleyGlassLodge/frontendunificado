import Image from "next/image";
import SkyExperience from "./sky-experience";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Valley Glass Lodge",
  description:
    "Un nuevo refugio de vidrio entre naturaleza y cielo. Próxima apertura.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://valleyglasslodge.com",
  image: "/valley-glass-lodge-logo.png",
  brand: { "@type": "Brand", name: "Valley Glass Lodge" },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <header className="topbar">
        <a className="wordmark" href="#inicio" aria-label="Valley Glass Lodge, inicio">
          <Image
            src="/valley-glass-lodge-logo.png"
            alt="Valley Glass Lodge"
            width={1200}
            height={1476}
            priority
            className="brand-image"
          />
        </a>
        <a className="topbar-link" href="#la-idea">
          El proyecto <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> Un nuevo lugar está tomando forma</p>
          <h1 id="hero-title">Un poco más<br />cerca del <em>cielo.</em></h1>
          <p className="hero-description">
            Estamos creando un refugio para mirar el paisaje sin prisa.
            Valley Glass Lodge abrirá sus puertas muy pronto.
          </p>
          <a className="primary-link" href="#la-idea">
            Descubre lo que viene <span aria-hidden="true">↓</span>
          </a>
          <p className="opening-note">Próxima apertura <span>·</span> Ecuador</p>
        </div>
        <SkyExperience />
        <div className="hero-caption"><span>00° 00′ 00″</span><span>UNA PAUSA EN LA NATURALEZA</span></div>
      </section>

      <section className="intro section-shell" id="la-idea" aria-labelledby="intro-title">
        <div className="section-kicker"><span>01</span><span>La idea</span></div>
        <div className="intro-content">
          <p className="eyebrow muted">EL PAISAJE, EN PRIMERA FILA</p>
          <h2 id="intro-title">A veces, todo lo que necesitas<br className="desktop-break" /> es <em>hacer espacio.</em></h2>
          <p className="intro-text">
            Un techo transparente. La calma de un valle. El lujo de no tener
            prisa. Estamos preparando una estancia pensada para reconectar
            contigo y con todo lo que te rodea.
          </p>
        </div>
      </section>

      <section className="manifesto" aria-label="Nuestra promesa">
        <div className="manifesto-backdrop" aria-hidden="true" />
        <p className="eyebrow">VALLEY GLASS LODGE</p>
        <p className="manifesto-line">Menos ruido.<br /><em>Más horizonte.</em></p>
        <span className="manifesto-rule" aria-hidden="true" />
        <p className="manifesto-foot">UN LUGAR PARA VOLVER A SENTIR LO ESENCIAL</p>
      </section>

      <section className="coming section-shell" id="apertura" aria-labelledby="coming-title">
        <div className="section-kicker"><span>02</span><span>Muy pronto</span></div>
        <div className="coming-card">
          <div className="coming-text">
            <p className="eyebrow muted">EL VALLE NOS ESPERA</p>
            <h2 id="coming-title">La espera también<br />es parte del <em>viaje.</em></h2>
            <p>Estamos dando forma a cada detalle. En poco tiempo, podrás vivirlo.</p>
          </div>
          <div className="coming-stamp" aria-label="Próximamente">
            <span className="stamp-ring">PRÓXIMAMENTE · PRÓXIMAMENTE ·</span>
            <span className="stamp-center">VGL<br /><small>ECUADOR</small></span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="footer-name" href="#inicio">VALLEY<br />GLASS LODGE</a>
        <p>Un nuevo horizonte está cerca.</p>
        <a className="back-top" href="#inicio">Volver arriba <span aria-hidden="true">↑</span></a>
        <small>© {new Date().getFullYear()} Valley Glass Lodge</small>
      </footer>
    </main>
  );
}
