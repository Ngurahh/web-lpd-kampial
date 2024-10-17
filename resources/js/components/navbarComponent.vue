<template>
  <nav class="navbar navbar-expand-lg">
      <div class="container">
          <a class="navbar-brand" href="#"><strong>LPD | Desa Adat Kampial</strong></a>
          <a class="navbar-brand" href="#"><strong>LPD | Desa Adat Kampial</strong></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'beranda' }">Beranda</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'galeri' }">Galeri</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'layanan' }">Layanan</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'profil' }">Profil</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'kontak' }">Kontak</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'formulirPinjaman' }">Formulir Pinjaman</router-link>
                  </li>
              </ul>
              <router-link class="btn-login nav-link" :to="{ name: 'masuk' }">Masuk</router-link>
          </div>
      </div>
  </nav>
</template>

<style scoped>
nav {
position: fixed;
top: 0;
width: 100%;
background-color: white;
background-color: whitesmoke;
z-index: 1000;
box-shadow: rgba(99, 99, 99, 0.2) 0px 0px 8px 2px;
}

.navbar-brand, .nav-link {
color: #444444;
border-bottom: 2px solid transparent;
transition: all 0.4s ease;
}

.nav-item {
margin-right: 1rem;
}

.nav-link:hover {
border-bottom: 2px solid #444444;
}

.nav-link.router-link-active:not(.btn-login) {
.nav-link.router-link-active:no-button {
color: #22980e;
border-bottom: 2px solid #22980e;
}

.navbar-toggler,
.navbar-toggler:focus {
box-shadow: none;
border: none;
}

.navbar-toggler-icon {
background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='%23444444' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-toggler-icon:hover {
background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='%2322980e' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-nav {
margin: 0 auto;
}

.btn-login {
padding: 0.5rem 1.5rem;
border-radius: 100px;
background-color: #22980e;
color: white;
text-align: center;
}

.btn-login:hover {
background-color: #145809;
}

@media (max-width: 990px) {
  .btn-login {
      width: 100%;
      margin: 1.5rem 0 1rem;
  }
}
}
</style>