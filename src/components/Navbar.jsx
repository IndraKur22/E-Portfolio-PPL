import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          E-Portfolio PPL
        </a>

        <button
          className="navbar-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-utama"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Tutup' : 'Menu'}
        </button>

        <nav id="menu-utama" className={menuOpen ? 'nav-menu is-open' : 'nav-menu'}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#profil" onClick={closeMenu}>
            Profil
          </a>

          <div className="nav-group">
            <a href="#praktik-ppl" onClick={closeMenu}>
              Praktik PPL
            </a>
            <div className="nav-submenu">
              <a href="#siklus-1" onClick={closeMenu}>
                Siklus 1
              </a>
              <a href="#siklus-2" onClick={closeMenu}>
                Siklus 2
              </a>
              <a href="#siklus-3" onClick={closeMenu}>
                Siklus 3
              </a>
              <a href="#siklus-4" onClick={closeMenu}>
                Siklus 4
              </a>
            </div>
          </div>

          <div className="nav-group">
            <a href="#pembelajaran-terbaik" onClick={closeMenu}>
              Pembelajaran Terbaik
            </a>
            <div className="nav-submenu">
              <a href="#rancangan" onClick={closeMenu}>
                Rancangan Pembelajaran
              </a>
              <a href="#video" onClick={closeMenu}>
                Video Pelaksanaan
              </a>
            </div>
          </div>

          <a href="#dokumentasi" onClick={closeMenu}>
            Dokumentasi
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
