const cycles = [
  {
    id: 'siklus-1',
    title: 'Siklus 1',
    note: 'Perencanaan awal dan pelaksanaan praktik pertama.',
  },
  {
    id: 'siklus-2',
    title: 'Siklus 2',
    note: 'Perbaikan berdasarkan refleksi siklus sebelumnya.',
  },
  {
    id: 'siklus-3',
    title: 'Siklus 3',
    note: 'Penguatan strategi pembelajaran di kelas.',
  },
  {
    id: 'siklus-4',
    title: 'Siklus 4',
    note: 'Penyempurnaan praktik dan produk pembelajaran.',
  },
]

function PracticeTimeline() {
  return (
    <section
      className="section section-alt"
      id="praktik-ppl"
      aria-labelledby="judul-praktik"
    >
      <div className="section-head">
        <p className="eyebrow">Proses</p>
        <h2 id="judul-praktik">Praktik PPL</h2>
        <p className="section-lead">
          Empat siklus praktik mengajar yang menunjukkan perkembangan
          merancang, melaksanakan, dan merefleksikan pembelajaran.
        </p>
      </div>

      <ol className="timeline">
        {cycles.map((cycle, index) => (
          <li className="timeline-item" id={cycle.id} key={cycle.id}>
            <article>
              <span className="timeline-number">0{index + 1}</span>
              <h3>{cycle.title}</h3>
              <p>{cycle.note}</p>
              <p className="placeholder">Konten siklus akan dilengkapi.</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default PracticeTimeline
