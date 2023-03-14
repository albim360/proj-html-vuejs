<template>
    <section class="top-learners">
        <h3 class="section-descr">
            GREAT WORDS ABOUT MAXCOACH
        </h3>
        <h2 class="section-title">
            Our <span class="aquagreen-title ">top learners'</span> verbatim
        </h2>
        <div class="carousel my-2">
            <div class="row flex-row">
                <div class="col-4">
                    <div class="card opacity-50">
                        <div class="card-body">
                            <h4 class="card-title petroil">
                                It's a choice of quality for people with special needs
                            </h4>
                            <p class="card-text petroil">
                                I'm a very strict person so I require everything to be organized and neat. Then, I'll be
                                able to make things right and shine. MaxCoach guys just got me.
                            </p>
                        </div>
                        <div class="card-img">
                            <img src="../../public/images/testimonial-avata-01.jpg" alt="">
                            <div class="card-info">
                                <p class="card-subtitle petroil">
                                    LUVIC DUBBLE
                                </p>
                                <p class="card-extra">
                                    / Private tutor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title petroil">
                                High level of efficiency and scientific teaching methods
                            </h4>
                            <p class="card-text">
                                I am free to learn at my own pace, follow my own schedule and choose the subject I want to
                                learn from the syllabus. Great study portal for people like me.
                            </p>
                        </div>
                        <div class="card-img">
                            <img src="../../public/images/testimonial-avata-02.jpg" alt="">
                            <div class="card-info">
                                <p class="card-subtitle petroil">
                                    MINA HOLLANCE
                                </p>
                                <p class="card-extra">
                                    / Freelancer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card opacity-50">

                        <div class="card-body">
                            <h4 class="card-title petroil">
                                Professional team of specialists and passionate mentors at reach
                            </h4>
                            <p class="card-text">
                                I need to get a certification for English proficiency and MaxCoach is my best choice. Their
                                tutors are smart and professional when dealing with students.
                            </p>
                        </div>
                        <div class="card-img">
                            <img src="../../public/images/testimonial-avata-03.jpg" alt="">
                            <div class="card-info">
                                <p class="card-subtitle petroil">
                                    FLORENCE THEMES
                                </p>
                                <p class="card-extra">
                                    / Multimedia Admin
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pointer">
            <i class="fa-solid fa-circle"></i>
            <i class="fa-solid fa-circle"></i>
            <i class="fa-solid fa-circle"></i>
            <i class="fa-solid fa-circle"></i>
        </div>
    </section>

    <section class="certificate">
        <div class="text-center">
            <h4 class="section-subtitle">
                Start today for getting
                <span class="aquagreen-title">
                    Online Certification
                </span>
            </h4>
            <h2 class="section-title p-0">
                You can be your own guiding star with our help!
            </h2>
        </div>
        <div class="get-started">
            <button>
                <a href="#">Get started now</a>
            </button>
        </div>
    </section>
    <section class="number">
        <div class="container">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4"></div>
                <div class="col-4"></div>
            </div>
        </div>
    </section>
</template>


<script>

</script>

<style lang="scss" scoped>
@use '../../style/variable.scss' as *;
@use '../../style/general.scss' as *;

section.top-learners {
    background-color: $card-color;
    padding-top: 100px;
    padding-bottom: 110px;
    font-family: Gilroy, sans-serif;
    min-height: 500px;

    .card {
        border-radius: 5px;
        border: none;
        margin-bottom: 30px;
        overflow: hidden;
        padding: 41px 50px 36px;
        height: 383px;

        .card-img {
            display: flex;
            align-items: flex-end;
            width: 100%;
            position: relative;
            align-items: center;
            font-weight: bold;
        }

        .card-img img {
            width: 70px;
            height: 70px;
            object-fit: cover;
            border-radius: 50%;
            margin-right: 15px;
        }

    }

    .card-extra {
        font-size: 14px;
        color: #7e7e7e;
    }

    .card-body {
        padding: 20px;

        .card-title {
            font-size: 20px;
            margin-bottom: 10px;
            font-weight: bold;
        }

        .card-subtitle {
            margin-bottom: 10px;
            font-size: 0.9rem;
            font-weight: bold;
            text-transform: uppercase;
            color: $secondary-color;
            font-weight: bold;
        }

        .card-text {
            font-size: 18px;
            font-weight: bold;
            color: #696969;
        }


    }
}

.pointer {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pointer>i {
    font-size: 9px;
    color: #7e7e7e;
    margin: 0 7px;
}

.pointer :first-child {
    font-size: 14px;
    color: black
}

.certificate {
    background-color: $card-color;
    padding-bottom: 100px;
    font-family: Gilroy, sans-serif;
}

.get-started {
    text-align: center;
    margin-top: 50px;
}
</style>