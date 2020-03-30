import React from 'react';
const menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">My Leasing</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Ana Sayfa <span className="sr-only">(current)</span></a>
          </li>

                        
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Kiralama
             </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">Kirala</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Kira Rapor</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Stok
             </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">Stok Kartı Tanımlama</a>
              <a className="dropdown-item" href="/StokKarti">Stok Kartları</a>
              <a className="dropdown-item" href="/">Stok Bakiye</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Stok Rapor</a>
            </div>
          </li>
     
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cari
             </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">Cari Tanımlama</a>
              <a className="dropdown-item" href="/">Cari Hareket</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Cari Rapor</a>
            </div>
          </li>
            
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Teklif
             </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">Teklif Hazırla</a>
              <a className="dropdown-item" href="/">Teklifler</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Teklif Rapor</a>
            </div>
          </li>


        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Ürün Veya Cari" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Arama</button>

        </form>
      </div>
    </nav>

  )
}
export default menu;