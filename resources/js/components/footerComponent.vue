<template>
    <footer class="footer mt-auto py-3 border-top">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-3 d-flex flex-column align-items-center">
                    <img
                        src="../assets/images/logo.png"
                        alt="LPD KAMPIAL"
                        class="footer-logo mb-2"
                    />
                    <span class="footer-text">LPD KAMPIAL</span>
                    <div class="social-links mt-3">
                        <a href="" target="_blank" class="me-2">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="" target="_blank">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>

                <div class="col-md-3">
                    <h5>COMPANY</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PROFILE</a></li>
                        <li><a href="#">LAYANAN</a></li>
                        <li><a href="#">GALERI</a></li>
                        <li><a href="#">KONTAK</a></li>
                        <li><a href="#">FORMULIR PINJAMAN</a></li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <h5>KONTAK KAMI</h5>
                    <ul class="list-unstyled">
                        <li class=""></li>
                        <li class=""></li>
                        <li class=""></li>
                        <li class=""></li>
                        <li class=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footerComponent",
};
</script>

<style scoped>
.footer {
    margin-top: 3rem;
    background-color: white;
    padding: 8rem 0;
}

.footer-text {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
}

img {
    margin-top: 3rem;
    width: 16rem;
    height: 8rem;
}

.social-links {
    color: #555;
}

.social-links a:hover {
    color: #555;
}

li {
    margin-bottom: 0.2rem;
}

h5 {
    font-weight: bold;
    margin-bottom: 1rem;
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    text-decoration: underline;
}
</style>
