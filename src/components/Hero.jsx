function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="judul-utama">
      <div className="hero-copy">
        <p className="eyebrow">Calon Guru · Praktik Mengajar Mandiri</p>
        <h1 id="judul-utama">E-PORTFOLIO PPL</h1>
        <p className="hero-subtitle">Praktik Mengajar Mandiri</p>
        <p className="hero-desc">
          Perjalanan merancang, melaksanakan, dan mengembangkan pembelajaran
          melalui praktik mengajar mandiri.
        </p>
        <a className="button" href="#praktik-ppl">
          Jelajahi Portfolio
        </a>
      </div>

      <aside className="hero-stage" aria-label="Area cadangan karakter interaktif">
        <div className="hero-stage-frame">
          <span>Area karakter</span>
        </div>
      </aside>
    </section>
  )
}

export default Hero
