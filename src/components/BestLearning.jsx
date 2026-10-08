function BestLearning() {
  return (
    <section
      className="section"
      id="pembelajaran-terbaik"
      aria-labelledby="judul-karya"
    >
      <div className="section-head">
        <p className="eyebrow">Karya Unggulan</p>
        <h2 id="judul-karya">Pembelajaran Terbaik</h2>
        <p className="section-lead">
          Dua produk utama yang merepresentasikan kualitas rancangan dan
          pelaksanaan praktik mengajar.
        </p>
      </div>

      <div className="showcase">
        <article className="showcase-card" id="rancangan">
          <p className="eyebrow">Dokumen</p>
          <h3>Rancangan Pembelajaran</h3>
          <p>
            Perencanaan pembelajaran yang menjadi dasar praktik mengajar
            mandiri. File dan uraian akan ditambahkan kemudian.
          </p>
          <div className="showcase-preview">Pratinjau rancangan</div>
        </article>

        <article className="showcase-card" id="video">
          <p className="eyebrow">Rekaman</p>
          <h3>Video Pelaksanaan</h3>
          <p>
            Video praktik mengajar di kelas. Area ini disiapkan sebagai
            tempat tampilan video pada tahap berikutnya.
          </p>
          <div className="showcase-preview">Pratinjau video</div>
        </article>
      </div>
    </section>
  )
}

export default BestLearning
