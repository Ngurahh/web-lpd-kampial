<template>
    <div class="container-fluid">
        <div class="auth-box">
            <div class="auth-left">
                <h1 class="title">{{ title_1 }}</h1>
                <p class="subtitle">{{ subtitle }}</p>
                <button @click="toggleLogin" class="btn-register">
                    {{ button_1 }}
                </button>
            </div>
            <div class="auth-right">
                <h1 class="title">{{ title_2 }}</h1>
                <form @submit.prevent="submitForm">
                    <div v-if="!isLogin" class="form-group">
                        <input
                            type="text"
                            class="input"
                            placeholder="Nama"
                            v-model="formData.name"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="email"
                            class="input"
                            placeholder="Email"
                            v-model="formData.email"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <input
                            :type="passwordFieldType"
                            class="input"
                            placeholder="Password"
                            v-model="formData.password"
                            required
                        />
                        <button
                            type="button"
                            @click="togglePasswordVisibility"
                            class="toggle-password"
                        >
                            <i :class="passwordIcon"></i>
                        </button>
                    </div>
                    <button type="submit" class="btn-signup">
                        {{ button_2 }}
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const passwordFieldType = ref('password');
const passwordIcon = ref('bi bi-eye-slash');

const title_1 = ref('Selamat Datang Kembali!');
const subtitle = ref('Untuk tetap terhubung dengan kami, silahkan masuk dengan akun anda');
const button_1 = ref('Masuk');
const title_2 = ref('Buat Akun');
const button_2 = ref('Daftar');
const isLogin = ref(false);

const formData = ref({
    name: '',
    email: '',
    password: ''
});

const togglePasswordVisibility = () => {
    passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
    passwordIcon.value = passwordFieldType.value === 'text' ? 'bi bi-eye' : 'bi bi-eye-slash';
};

const toggleLogin = () => {
    isLogin.value = !isLogin.value;
    if (isLogin.value) {
        title_1.value = 'Pengguna Baru?';
        subtitle.value = 'Segera daftarkan akun anda sekarang';
        button_1.value = 'Daftar';
        title_2.value = 'Masuk';
        button_2.value = 'Masuk';
    } else {
        title_1.value = 'Selamat Datang Kembali!';
        subtitle.value = 'Untuk tetap terhubung dengan kami, silahkan masuk dengan akun anda';
        button_1.value = 'Masuk';
        title_2.value = 'Buat Akun';
        button_2.value = 'Daftar';
    }
};

const submitForm = () => {
    const data = formData.value;
    const apiUrl = isLogin.value ? '/api/login' : '/api/register';
    axios.post(apiUrl, data)
        .then(response => {
            console.log(response);
            router.push({ name: 'beranda' });
        })
        .catch(error => {
            console.log(error.response);
        });
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
    height: 50px;
}

.toggle-password {
    background: none;
    border: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-80%);
    cursor: pointer;
    z-index: 1;
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
