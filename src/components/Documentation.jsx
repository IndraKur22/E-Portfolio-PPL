const photos = [
  'Kegiatan kelas',
  'Diskusi kelompok',
  'Media pembelajaran',
  'Refleksi bersama',
  'Observasi',
  'Momen praktik',
]

function Documentation() {
  return (
    <section
      className="section section-alt"
      id="dokumentasi"
      aria-labelledby="judul-dokumentasi"
    >
      <div className="section-head">
        <p className="eyebrow">Arsip Visual</p>
        <h2 id="judul-dokumentasi">Dokumentasi</h2>
        <p className="section-lead">
          Cuplikan kegiatan selama praktik mengajar mandiri.
        </p>
      </div>

      <ul className="photo-grid">
        {photos.map((label) => (
          <li key={label}>
            <figure className="photo-card">
              <div className="photo-frame" aria-hidden="true"></div>
              <figcaption>{label}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Documentation
