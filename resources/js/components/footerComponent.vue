<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-2 footer-section">
                    <img
                        src="../assets/images/logo.png"
                        alt="LPD KAMPIAL"
                        class="footer-logo"
                    />
                    <span class="footer-title"><strong>LPD Kampial</strong></span>
                </div>

                <div class="col-md-3 footer-section">
                    <h5><strong>PERUSAHAAN</strong></h5>
                    <ul class="list-group">
                        <li><router-link class="nav-list" :to="{name: 'beranda'}">Beranda</router-link></li>
                        <li><router-link class="nav-list" :to="{name: 'profil'}">Profil</router-link></li>
                        <li><router-link class="nav-list" :to="{name: 'layanan'}">Layanan</router-link></li>
                        <li><router-link class="nav-list" :to="{name: 'galeri'}">Galeri</router-link></li>
                        <li><router-link class="nav-list" :to="{name: 'kontak'}">Kontak</router-link></li>
                        <li><router-link class="nav-list" :to="{name: 'formulirPinjaman'}">Formulir Pinjaman</router-link></li>
                    </ul>
                </div>

                <div class="col-md-3 footer-section">
                    <h5><strong>KONTAK</strong></h5>
                    <ul class="list-group">
                        <li>Jl. Kampial, Nusa Dua, Bali</li>
                        <li>Telp: (0361) 123456</li>
                        <li>Email: info@lpd-kampial.com</li>
                    </ul>
                    <div class="social-links">
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-instagram"></i></a>
                        <a href="#"><i class="bi bi-whatsapp"></i></a>
                    </div>
                </div>

                <div class="col-md-4 footer-section">
                    <iframe
                        class="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3942.7713733946075!2d115.198837!3d-8.807537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd243518e5c98a9%3A0xfa7b46d60fc9be3!2sKantor%20LPD!5e0!3m2!1sid!2sid!4v1729224714319!5m2!1sid!2sid"
                        style="border: 0"
                        allowfullscreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    border-top: 2px solid rgb(183, 183, 183);
    padding: 3rem;
    margin-top: 5rem;
}

.footer-section {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.list-group {
    list-style: none;
}

.nav-list:hover {
    border-bottom: 2px solid black;
}

.nav-list.router-link-active {
    color: #22980e;
    border-bottom: 2px solid #22980e;
}

.footer-logo {
    width: 10rem;
}

.footer-title {
    margin-top: 0.5rem;
}

h5 {
    margin-bottom: 0.5rem;
}

h5, li, .nav-list, i {
    color: black;
}

a {
    text-decoration: none;
}

i {
    display: inline-block;
    font-size: 1.5rem;
    margin: 0.5rem;
}

i:hover {
    color: #22980e;
}

.google-map {
    width: 100%;
    height: 100%;
}

@media (max-width: 768px) {
    .footer-section {
        margin-bottom: 2rem;
    }

    .google-map {
        height: 18rem;
    }
}
</style>
