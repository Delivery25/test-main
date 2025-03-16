<!-- src/views/ContactView.vue -->
<template>
    <div>
        <div class="page-header bg-primary text-white py-5">
            <div class="container">
                <h1 class="display-4">Контакты</h1>
                <p class="lead">Свяжитесь с нами для получения дополнительной информации</p>
            </div>
        </div>

        <div class="container py-5">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="mb-4 text-primary">Наши контакты</h2>

                    <div class="contact-info mb-5">
                        <div class="d-flex mb-4">
                            <div class="contact-icon">
                                <i class="bi bi-geo-alt-fill text-primary fs-3"></i>
                            </div>
                            <div class="ms-3">
                                <h5>Адрес</h5>
                                <p class="mb-0">197376, Россия, Санкт-Петербург, ул. Профессора Попова, д. 5</p>
                            </div>
                        </div>

                        <div class="d-flex mb-4">
                            <div class="contact-icon">
                                <i class="bi bi-telephone-fill text-primary fs-3"></i>
                            </div>
                            <div class="ms-3">
                                <h5>Телефон</h5>
                                <p class="mb-0">+7 (812) 234-46-51 (приемная ректора)</p>
                                <p class="mb-0">+7 (812) 234-34-14 (приемная комиссия)</p>
                            </div>
                        </div>

                        <div class="d-flex mb-4">
                            <div class="contact-icon">
                                <i class="bi bi-envelope-fill text-primary fs-3"></i>
                            </div>
                            <div class="ms-3">
                                <h5>Email</h5>
                                <p class="mb-0">info@etu.ru</p>
                                <p class="mb-0">abitur@etu.ru (приемная комиссия)</p>
                            </div>
                        </div>

                        <div class="d-flex">
                            <div class="contact-icon">
                                <i class="bi bi-clock-fill text-primary fs-3"></i>
                            </div>
                            <div class="ms-3">
                                <h5>Время работы</h5>
                                <p class="mb-0">Понедельник - Пятница: 9:00 - 17:30</p>
                                <p class="mb-0">Суббота, Воскресенье: Выходной</p>
                            </div>
                        </div>
                    </div>

                    <h3 class="mb-3 text-primary">Социальные сети</h3>
                    <div class="social-links mb-5">
                        <a href="#" class="btn btn-outline-primary me-2">
                            <i class="bi bi-facebook"></i> Facebook
                        </a>
                        <a href="#" class="btn btn-outline-primary me-2">
                            <i class="bi bi-vk"></i> ВКонтакте
                        </a>
                        <a href="#" class="btn btn-outline-primary me-2">
                            <i class="bi bi-instagram"></i> Instagram
                        </a>
                        <a href="#" class="btn btn-outline-primary">
                            <i class="bi bi-youtube"></i> YouTube
                        </a>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <h2 class="card-title mb-4 text-primary">Обратная связь</h2>

                            <form @submit.prevent="submitForm">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Ваше имя</label>
                                    <input type="text" class="form-control" id="name" v-model="contactForm.name"
                                        required>
                                </div>

                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" v-model="contactForm.email"
                                        required>
                                </div>

                                <div class="mb-3">
                                    <label for="subject" class="form-label">Тема</label>
                                    <input type="text" class="form-control" id="subject" v-model="contactForm.subject"
                                        required>
                                </div>

                                <div class="mb-3">
                                    <label for="message" class="form-label">Сообщение</label>
                                    <textarea class="form-control" id="message" rows="5" v-model="contactForm.message"
                                        required></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary w-100">Отправить сообщение</button>
                            </form>

                            <div v-if="formSubmitted" class="alert alert-success mt-3">
                                Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid px-0 mt-5">
            <div class="map-container">
                <!-- Здесь в будущем можно подключить карту (Google Maps или Яндекс.Карты) -->
                <div class="map-placeholder bg-light text-center py-5">
                    <i class="bi bi-map fs-1 text-primary"></i>
                    <h4 class="mt-3">Карта расположения университета</h4>
                    <p>Здесь будет размещена интерактивная карта</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactView',
    data() {
        return {
            contactForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            formSubmitted: false
        }
    },
    methods: {
        submitForm() {
            // В будущем здесь будет отправка формы на сервер
            console.log('Form submitted:', this.contactForm);

            // Очистка формы и отображение сообщения об успехе
            this.formSubmitted = true;
            this.contactForm = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };

            // Скрытие сообщения об успехе через 5 секунд
            setTimeout(() => {
                this.formSubmitted = false;
            }, 5000);
        }
    }
}
</script>

<style scoped>
.page-header {
    margin-top: 56px;
}

.contact-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.map-container {
    height: 400px;
    width: 100%;
}

.map-placeholder {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.social-links a {
    margin-bottom: 10px;
}

.social-links a i {
    margin-right: 5px;
}
</style>