<template>
    <section class="avaiable__courses">
        <!-- Titolo della sezione -->
        <h3 class="section-descr text-center">MAXCOACH AVAIBLE COURSES</h3>
        <h2 class="text-center avaiable-title">
            Access
            <span class="aquagreen-title ">Smart Tutoring</span>
            Program For Benefits.
        </h2>
        <div class="container">
            <!-- Riga con tre colonne  -->
            <div class="row justify-content-between">
                <!-- Prima colonna -->
                <div class="col-4">
                    <img src="../../public/images/home-2-image-box-01.png" alt="" />
                    <!-- Titolo  -->
                    <span class="d-block title-function">
                        <a href="#">Customize Preferences</a>
                    </span>
                    <!-- Descrizione  -->
                    <p class="text-function fs-14">
                        Learners are given the right to arrange and customize their study schedule and timetable based on
                        preferences.
                    </p>
                    <!-- Link card -->
                    <span class="start">
                        <a href="#">Start Here &#8594;</a>
                    </span>
                </div>
                <!-- Seconda colonna -->
                <div class="col-4">
                    <img src="../../public/images/about-us-02-image-box-02.png" alt="" />
                    <span class="d-block title-function">
                        <a href="#">Cloud Storage</a>
                    </span>
                    <p fs-14>
                        You can store online lessons via online cloud or download to your device and revise lessons on the
                        way.
                    </p>
                    <span class="start">
                        <a href="#">Get Free Quote &#8594;</a>
                    </span>
                </div>
                <!-- Terza colonna -->
                <div class="col-4">
                    <img src="../../public/images/home-2-image-box-03.png" alt="" />
                    <span class="d-block title-function">
                        <a href="#">Multimedia Channels</a>
                    </span>
                    <p class="fs-14">
                        We provide study materials with various formats: video, audio, slides, doc, prints, books and
                        applications.
                    </p>
                    <span class="start">
                        <a href="#">Start now &#8594;</a>
                    </span>
                </div>
            </div>
            <section class="video">
                <div class="row py-5">
                    <div class="col-7 text-right me-5">
                        <div class="youtube" id="ffiJNSy8CBA"
                            style="background-image: url('../../public/images/home-2-popup-video-poster.jpg')"></div>
                            <iframe id="video-element" width="670" height="450" src="https://www.youtube.com/embed/ElFJ1qcl74U"></iframe>
                        </div>
                    <div class="col-3 text-left">
                        <h3 class="section-descr fw-bold text-left">
                            GET STARTED
                            <span class="petroil">
                                EFFORTLESSLY
                            </span>
                        </h3>
                        <h2 class="text-center title-card text-left">
                            Enjoy Our
                            <span class="aquagreen-title ">Companionship</span>
                        </h2>
                        <p class="mb-5 fs-18">
                            Sneek peek into what has in store for you on our online teaching and mentoring portal. Seek for
                            some
                            hidden hints of early-bird rewards as well.
                        </p>
                        <span class="start aquagreen">
                            <button class="btn">
                                <a href="https://maxcoach.thememove.com/main/course-portal/#">Download free guidebook→</a>
                            </button>
                        </span>
                    </div>
                </div>
            </section>
        </div>

    </section>
</template>

<script>
import YouTubeEmbed from 'youtube-embed';

export default {
  mounted() {
    const video = document.querySelector('#video-element');
    YouTubeEmbed.setPoster(video, 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/12/home-2-popup-video-poster.jpg');
  }
}
</script>

  
<style lang="scss" scoped>
/* Importa il file di stile generale */
@use '../../style/variable.scss' as *;
@use '../../style/general.scss' as *;


section.avaiable__courses {
    padding-top: 90px;
    font-family: Gilroy, sans-serif;
}


/* Regola di debug per limitare la larghezza delle colonne */
.row>.col-4 {
    max-width: 343px;
}

.avaiable-title {
    color: $secondary-color;
    font-size: 34px;
    font-weight: 700;
    margin-top: 10px;
    padding-bottom: 60px;
}

.title-function {
    color: $secondary-color;
    font-size: 22px;
    font-weight: 700;
    margin-top: 22px;
    padding-bottom: 15px;
}

.title-card {
    color: $secondary-color;
    font-size: 48px;
    line-height: 1.2;
    font-weight: 700;
    margin-top: 20px;
    padding-bottom: 20px;
}

.start {
    color: #494753;
    font-size: 14px;
    font-weight: 700;
    padding-top: 40px;
}

.start:hover {
    color: $primary-color;
}

p {
    padding-bottom: 11px;
}

.text-left {
    text-align: left !important;
}

.text-right {
    text-align: right !important;
}

.start.aquagreen {
    border-bottom: 1px solid $tertiary-color;
}

.start:hover {
    border-bottom: 1px solid $tertiary-color;
}

.video {
    margin-top: 130px
}

.background-iframe {
    background-image: url(../images/video-bg.png);
    padding: 20px;
    border-radius: 10px;
}

.background-iframe iframe {
    background: transparent;
}

.fs-18 {
    font-size: 18px;
}

.fs-14 {
    font-size: 14px;
}
</style>