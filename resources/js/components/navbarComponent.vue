<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ name: 'beranda' }">
                <img src="../assets/images/logo.png" />
                <strong>LPD | Desa Adat Kampial</strong>
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse"
                id="navbarNavAltMarkup"
                ref="navbarCollapse"
            >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'beranda' }" @click="closeNavbar">Beranda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'galeri' }" @click="closeNavbar">Galeri</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'layanan' }" @click="closeNavbar">Layanan</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'profil' }" @click="closeNavbar">Profil</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'kontak' }" @click="closeNavbar">Kontak</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'formulirPinjaman' }" @click="closeNavbar">Formulir Pinjaman</router-link>
                    </li>
                </ul>
                <router-link class="btn-login nav-link" :to="{ name: 'masuk' }" @click="closeNavbar">Masuk</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        closeNavbar() {
            const navbar = this.$refs.navbarCollapse;
            const collapse = bootstrap.Collapse.getInstance(navbar); // Mengambil instance Bootstrap Collapse
            if (collapse) {
                collapse.hide(); // Menutup navbar jika sedang terbuka
            }
        }
    }
};
</script>

<style scoped>
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 20px;
}

.container-fluid {
    padding: 0 2.8rem;
}

.navbar-brand {
    display: flex;
    align-items: center;
}

img {
    display: inline-block;
    width: 2.5rem;
    margin-right: 0.8rem;
    vertical-align: middle;
}

.navbar-brand,
.nav-link {
    color: black;
    border-bottom: 2px solid transparent;
    transition: all 0.4s ease;
}

.nav-item {
    margin-right: 1rem;
}

.nav-link:hover:not(.btn-login) {
    border-bottom: 2px solid black;
}

.nav-link.router-link-active:not(.btn-login) {
    color: #22980e;
    border-bottom: 2px solid #22980e;
}

.navbar-toggler,
.navbar-toggler:focus {
    box-shadow: none;
    border: none;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='black' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
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
</style>
