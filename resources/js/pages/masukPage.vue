<template>
    <div class="container-fluid">
        <div class="auth-box">
            <div class="auth-left">
                <h1 class="title">Selamat Datang Kembali!</h1>
                <p class="subtitle">
                    Untuk tetap terhubung dengan kami, silahkan masuk dengan akun anda
                </p>
                <button class="btn-register">Masuk</button>
            </div>
            <div class="auth-right">
                <h1 class="title">Buat Akun</h1>
                <form>
                    <div class="form-group">
                        <input type="text" class="input" placeholder="Nama" />
                    </div>
                    <div class="form-group">
                        <input type="email" class="input" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input :type="passwordFieldType" class="input" placeholder="Password" />
                        <button type="button" @click="togglePasswordVisibility" class="toggle-password">
                            <i :class="passwordIcon"></i>
                        </button>
                    </div>
                    <button type="submit" class="btn-signup">Daftar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const passwordFieldType = ref('password');
const passwordIcon = ref('bi bi-eye-slash');

const togglePasswordVisibility = () => {
    if (passwordFieldType.value === 'password') {
        passwordFieldType.value = 'text';
        passwordIcon.value = 'bi bi-eye';
    } else {
        passwordFieldType.value = 'password';
        passwordIcon.value = 'bi bi-eye-slash';
    }
};
</script>

<style scoped>
.container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.auth-box {
    display: flex;
    max-width: 900px;
    min-height: 500px;
    border-radius: 20px;
    margin-top: 3rem;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.175);
    overflow: hidden;
}

.auth-left,
.auth-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    text-align: center;
}

.auth-left {
    background-color: #22980e;
    color: white;
    border-radius: 20px 0 0 20px;
}

.auth-right {
    background-color: white;
    border-radius: 0 20px 20px 0;
}

.title {
    font-weight: bold;
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
}

.subtitle {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
}

.btn-register,
.btn-signup {
    border-radius: 50px;
    font-size: 14px;
    padding: 0.6rem 1.5rem;
    cursor: pointer;
}

.btn-register:hover,
.btn-signup:hover {
    background-color: #145809;
}

.btn-register {
    background-color: transparent;
    border: 2px solid white;
    color: white;
}

.btn-signup {
    margin-top: 0.5rem;
    background-color: #22980e;
    border: none;
    color: white;
    width: 39%;
}

.form-group {
    position: relative;
}

.input {
    width: 22rem;
    padding: 0.8rem;
    font-size: 16px;
    border-radius: 50px;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
    height: 50px; /* Set height to align input with the icon */
}

.toggle-password {
    background: none;
    border: none;
    position: absolute;
    right: 10px; /* Adjust this value as needed */
    top: 50%; /* Center vertically */
    transform: translateY(-80%); /* Adjust vertical position */
    cursor: pointer;
    z-index: 1; /* Ensure it is above the input */
}

.toggle-password i {
    font-size: 1.2rem;
}


@media (max-width: 768px) {
    .auth-box {
        flex-direction: column;
        max-width: 100%;
        min-height: auto;
        border-radius: 20px;
    }

    .auth-left {
        border-radius: 20px 20px 0 0;
    }

    .auth-right {
        border-radius: 0 0 20px 20px;
    }

    .title {
        font-size: 1.8rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .btn-register,
    .btn-signup {
        width: 80%;
    }

    .auth-left,
    .auth-right {
        padding: 2rem;
    }
}

@media (max-width: 480px) {
    .auth-left,
    .auth-right {
        padding: 1.5rem;
    }

    .title {
        font-size: 1.5rem;
    }

    .subtitle {
        font-size: 0.9rem;
    }

    .btn-register,
    .btn-signup {
        width: 90%;
        padding: 0.5rem 1rem;
        font-size: 12px;
    }
}
</style>
