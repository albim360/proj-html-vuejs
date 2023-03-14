<template>
    <section class="guide">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-5">
                    <h2 class="head-text">
                        Distant learning for further expansion
                    </h2>
                    <p class="p-learning">
                        Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy
                        the process.
                    </p>
                    <a
                        href="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/03/benefits-of-all-remote.pdf">
                        <button class="btn download__button">
                            <i class="fa-solid fa-download"></i> Download free Guide
                        </button>
                    </a>
                    <a href="https://maxcoach.thememove.com/main/course-portal/#" class="question d-block">Have a question?
                        <span class="free-sample">Get Free Sample &#8594;</span></a>
                </div>
                <div class="col">
                    <img src="../../public/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
                        class="rounded rounded-circle mc-hw" alt="">
                    <!-- immagine sopra la foto principale -->
                    <img src="" class="img-on" alt="">
                </div>
            </div>
            <div class="container client-img">
                <img src="../../public/images/client-logo-01.png" alt="">
                <img src="../../public/images/client-logo-02.png" alt="">
                <img src="../../public/images/client-logo-03.png" alt="">
                <img src="../../public/images/client-logo-04.png" alt="">
                <img src="../../public/images/client-logo-05.png" alt="">
                <img src="../../public/images/client-logo-06.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss" scoped>
@use '../../style/variable.scss' as *;
@use '../../style/general.scss' as *;

section.guide {
    padding-top: 150px;
}

.head-text {
    font-family: Gilroy, sans-serif;
    line-height: 1.3;
    font-size: 48px;
    font-weight: 600;
    color: #3f3a64;
    margin-bottom: 10px;
}

.p-learning {
    font-size: 18px;
    color: #8c89a2;
    font-weight: 600;
    margin-bottom: 15px;
}

button.download__button {
    background-color: #20AD96;
    color: #fff;
    padding: 10px;
    width: 260px;
    height: 52px;
    font-size: 14px;
    font-weight: bold;
}

button.download__button:hover {
    background-color: #3F3A64;
    color: #fff;
}

.free-sample {
    background-color: white;
    color: #20AD96;
    font-weight: bold;
    font-size: 15px;
}

.question {
    margin-top: 15px;
}

.client-img>img {
    opacity: 0.5;
    margin: 0 30px;
    padding: 15px;
}

.client-img>img:hover {
    opacity: 1;

}

.mc-hw {
    position: relative;
    height: 570px;
    width: 570px;
    object-fit: cover;
}

.img-on {
    position: absolute;
    top: 272px;
    right: 360px;
    object-fit: cover;
}
</style>

