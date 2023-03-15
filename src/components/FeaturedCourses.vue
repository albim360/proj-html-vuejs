<template>
  <section class="featured py-5">
    <div class="container py-5">
      <h3 class="section-descr  text-center">STIMULATED TO LEARN?</h3>
      <h2 class="text-center section-title">Featured Online Courses</h2>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6" v-for="(course, index) in courses" :key="index">
          <div class="card p-4 border-0 d-flex">
            <div class="card-img-top d-flex justify-content-start align-items-center">
              <img :src="'./public/images/' + course.image + '.jpg'" alt="" class="rounded-circle img-fluid float-start">
              <div class="card-body d-flex justify-content-between">
                <div>
                  <p class="card-text price">{{ course.price }}</p>
                  <a href="#" class="card-title">{{ course.name }}</a>
                  <div class="d-flex">
                    <p class="card-text">{{ course.lessons }}</p>
                    <p class="card-text ms-3">{{ course.students }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn  all__courses">
          <a href="#">View All Courses &#8594;</a>
        </button>
      </div>
    </div>
  </section>
</template>
  
  
<script>
export default {
  data() {
    return {
      courses: [
        {
          image: "stock-full-hd-05-480x298",
          price: "Free",
          name: "Personal Finance: Financial Security Thinking & Principles",
          lessons: "2 Lessons",
          students: "244 Students",
        },
        {
          image: "author-at-work",
          price: "$40.00",
          name: "Learning to Write as a Professional Author",
          lessons: "20 Lessons",
          students: "67 Students",
        },
        {
          image: "stock-full-hd-03-480x298",
          price: "Free",
          name: "Customer-centric Info-Tech Strategies",
          lessons: "24 Lessons",
          students: "914 Students",
        },
        {
          image: "stock-full-hd-04-480x298",
          price: "$19.00",
          name: "Open Programming Courses for Everyone: Python",
          lessons: "17 Lessons",
          students: "65 Students",
        },
        {
          image: "stock-full-hd-06-480x298",
          price: "$26.00",
          name: "Academic Listening and Note-taking",
          lessons: "14 Lessons",
          students: "68 Students",
        },
        {
          image: "course-featured-image-01-480x298",
          price: "$39.00",
          name: "Master jQuery in a Short Period of Time",
          lessons: "6 Lessons",
          students: "51 Students",
        },
      ],
    };
  },
};
</script>
  
<style lang="scss" scoped>
@use '../../style/variable.scss' as *;
@use '../../style/general.scss' as *;

.featured {
  background-color: $background-color;
  padding-top: 100px;
  font-family: Gilroy, sans-serif;

}

.card {
  margin-bottom: 30px;
  background-color: $card-color;
  border: none;
  height: 210px;
}

.card:hover {
  background-color: white;
}

a {
  text-decoration: none;
  color: $secondary-color;
}

.card-img-top>img {
  object-fit: cover;
  width: 170px;
  height: 170px;
}

.card-title {
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 5px;
}

.card-title:hover {
  color: $primary-color;
}

.card-text.price {
  font-size: 24px;
  font-weight: bold;
  color: $primary-color;
}

button.all__courses {
  background-color: $primary-color;
  color: #fff;
  padding: 10px;
  width: 260px;
  height: 52px;
  font-size: 14px;
  font-weight: bold;
  margin-top: 25px;
}

button.all__courses:hover {
  background-color: $secondary-color;
  color: #fff;
}
</style>
  