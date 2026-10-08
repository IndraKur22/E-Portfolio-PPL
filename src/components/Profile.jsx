function Profile() {
  return (
    <section className="section" id="profil" aria-labelledby="judul-profil">
      <div className="section-head">
        <p className="eyebrow">Tentang</p>
        <h2 id="judul-profil">Profil</h2>
        <p className="section-lead">
          Identitas calon guru dan konteks praktik mengajar mandiri.
        </p>
      </div>

      <article className="profile-card">
        <div className="profile-photo" aria-hidden="true">
          Foto
        </div>
        <div className="profile-info">
          <h3>Nama Calon Guru</h3>
          <p>Program Studi Pendidikan · Universitas</p>
          <dl>
            <div>
              <dt>NIM</dt>
              <dd>0000000000</dd>
            </div>
            <div>
              <dt>Sekolah Mitra</dt>
              <dd>Nama sekolah tempat praktik</dd>
            </div>
            <div>
              <dt>Mata Pelajaran</dt>
              <dd>Mata pelajaran yang diampu</dd>
            </div>
          </dl>
        </div>
      </article>
    </section>
  )
}

export default Profile
