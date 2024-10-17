<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/images/Screenshot 2024-10-17 000518.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/images/Screenshot 2024-10-17 000518.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/images/Screenshot 2024-10-17 000518.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="container">
        <div class="section-1">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="greeting"><strong>Om Swastiastu</strong></h2>
                    <p class="description">
                        Selamat Datang di Website Lembaga Perkreditan Desa (LPD) Desa Adat Kampial. 
                        Ngiring Sareng – Sareng Ngewangun Desa Mejalaran Antuk Nyarengin Ring LPD. 
                        Bermula dari di adakannya Lomba Desa Adat tingkat kabupaten di Badung, 
                        pada bulan September 2000 , Desa Adat Kampial salah satunya ikut sebagai 
                        peserta dalam pecentokan tersebut yang merupakan ivent tahunan dari Kabupaten 
                        Badung dalam rangka perayaan HUT Kabupaten Badung.
                    </p>
                </div>
                <div class="col-md-6">
                    <iframe class="youtube" src="https://www.youtube.com/embed/XFspqbU84WE?si=E8RVTV6jDaMBTuj9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .carousel {
        margin: 3rem 0 0 0;
    }

    .section-1 {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        margin: 3rem 0;
        padding: 2rem;
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
        height: 100%;
        border-radius: 5px;
    }

    @media (max-width: 990px) {
        .description {
            margin-bottom: 1.5rem;
        }
    }
</style>