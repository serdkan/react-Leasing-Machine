import React from 'react';
const menu = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/">My Leasing</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Ana Sayfa <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Stoks
             </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/">Stok Kartı Tanımlama</a>
              <a class="dropdown-item" href="/">Stok Bakiye</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/">Stok Rapor</a>
            </div>
          </li>
     
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cari
             </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/">Cari Tanımlama</a>
              <a class="dropdown-item" href="/">Cari Hareket</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/">Cari Rapor</a>
            </div>
          </li>

               
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Kiralama
             </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/">Kirala</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/">Kira Rapor</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Ürün Veya Cari" />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Arama</button>

        </form>
      </div>
    </nav>

  )
}
export default menu;