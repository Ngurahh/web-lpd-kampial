<template>
    <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
    >
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                    src="../assets/images/Screenshot 2024-10-17 000518.png"
                    class="d-block w-100"
                    alt="..."
                />
            </div>
            <div class="carousel-item">
                <img
                    src="../assets/images/Screenshot 2024-10-17 000518.png"
                    class="d-block w-100"
                    alt="..."
                />
            </div>
            <div class="carousel-item">
                <img
                    src="../assets/images/Screenshot 2024-10-17 000518.png"
                    class="d-block w-100"
                    alt="..."
                />
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="container-fluid">
        <div class="section-1">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="greeting"><strong>Om Swastiastu</strong></h2>
                    <p class="description">
                        Selamat Datang di Website Lembaga Perkreditan Desa (LPD)
                        Desa Adat Kampial. Ngiring Sareng – Sareng Ngewangun
                        Desa Mejalaran Antuk Nyarengin Ring LPD. Bermula dari di
                        adakannya Lomba Desa Adat tingkat kabupaten di Badung,
                        pada bulan September 2000 , Desa Adat Kampial salah
                        satunya ikut sebagai peserta dalam pecentokan tersebut
                        yang merupakan ivent tahunan dari Kabupaten Badung dalam
                        rangka perayaan HUT Kabupaten Badung.
                    </p>
                </div>
                <div class="col-md-6">
                    <iframe
                        class="youtube"
                        src="https://www.youtube.com/embed/XFspqbU84WE?si=E8RVTV6jDaMBTuj9"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>

        <div class="section-2">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Pinjaman</h5>
                            <p class="card-text">
                                Pinjaman adalah penyediaan uang atau tagihan
                                yang dapat dipersamakan dengan itu, berdasarkan
                                persetujuan atau kesepakatan pinjam-meinjam
                                antara LPD dengan pihak lain yang mewajibkan
                                pihak peminjam utuk melunasi hutang setelah
                                jangka wakyu tertentu dengan pemberian bunga.
                            </p>
                            <a href="#" class="btn btn-primary">Lihat selengkapnya</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                                Simpanan Berjangka (Desposito)
                            </h5>
                            <p class="card-text">
                                Simpanan berupa uang rupiah yang dilakukan oleh
                                para deposan / nasabah LPD Kampial dengan jangka
                                waktu yang telah disepakati oleh kedua belah
                                pihak. Simpanan ini hanya dapat di tarik pada
                                saat jatuh tempo, sedangkan Bunga setiap
                                bulannya dapat ditarik atau dapat pula
                                ditransfer ke rekening tabungan nasabah
                                bersangkutan. Untuk bunga deposito antara 0,45%
                                - 0,55% per bulan.
                            </p>
                            <a href="#" class="btn btn-primary">Lihat selengkapnya</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Tabungan Siberkat</h5>
                            <p class="card-text">
                                Simpanan berupa uang rupiah dari pihak ketiga
                                yang dilakukan setiap bulan secara
                                berkesinambungan sesuai dengan masa kontrak yang
                                telah disetujui kedua belah pihak yaitu antara
                                nasabah dengan LPD Desa Adat Kampial
                            </p>
                            <a href="#" class="btn btn-primary">Lihat selengkapnya</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Tabungan Sukarela</h5>
                            <p class="card-text">
                                Simpanan dalam rupiah pihak ketiga pada LPD Desa
                                Adat Kampial, yang penarikannya dapat dilakukan
                                menurut syarat dan ketentuan yang berlaku. Suku
                                Bunga Tabungan Sukarela adalah sebesar 0,4% per
                                bulan, tanpa ada potongan pajak.
                            </p>
                            <a href="#" class="btn btn-primary">Lihat selengkapnya</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Jasa Lainnya</h5>
                            <p class="card-text">
                                Pembayaran listrik, aie, telepon, dan top up
                                saldo (paket data seluler, pajak, BPJS, dan
                                lain-lain).
                            </p>
                            <a href="#" class="btn btn-primary">Lihat selengkapnya</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.carousel {
    margin: 3rem 0 0 0;
}

.container-fluid {
    padding: 0 2.8rem;
}

.section-1 {
    margin: 3rem 0;
    border-radius: 10px;
}

.greeting {
    margin-bottom: 0.8rem;
}

.description {
    margin: 0;
    line-height: 1.8rem;
    font-size: 17px;
}

.youtube {
    width: 100%;
    height: 20rem;
    border-radius: 5px;
}

.col-md-4 {
    margin-bottom: 1.5rem;
}

.card {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
}

.card-body {
    display: flex;
    flex-direction: column;
}

.card-title {
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 0.8rem;
}

.card-text {
    line-height: 1.8rem;
    font-size: 17px;
}

.btn-primary {
    background-color: #22980e;
    border: none;
    border-radius: 100px;
    width: 100%;
    margin-top: auto;
}

@media (max-width: 990px) {
    .description {
        margin-bottom: 1.5rem;
    }
}
</style>