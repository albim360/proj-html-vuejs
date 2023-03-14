<template>
  <section class="featured py-5">
    <div class="container py-5">
      <h3 class="featured-question text-center">STIMULATED TO LEARN?</h3>
      <h2 class="text-center featured-title">Featured Online Courses</h2>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6" v-for="(course, index) in courses" :key="index">
          <div class="card p-4 border-0 d-flex">
            <div class="card-img-top d-flex justify-content-start align-items-center">
              <img :src="'./src/images/' + course.image + '.jpg'" alt="" class="rounded-circle img-fluid float-start">
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
  
<style scoped>
.featured {
  background-color: #f5f7fa;
  padding-top: 100px;
  font-family: Gilroy, sans-serif;

}

.featured-question {
  color: #9ea4a5;
  font-size: 15px;
}

.featured-title {
  color: #3f3a64;
  font-size: 34px;
  font-weight: 700;
  margin-top: 10px;
  padding-bottom: 60px;
}

.card {
  margin-bottom: 30px;
  background-color: #f5f7fa;
  border: none;
  height: 210px;
}

.card:hover {
  background-color: white;
}

a {
  text-decoration: none;
  color: currentColor;
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
  color: #20AD96;
}

.card-text.price {
  font-size: 24px;
  font-weight: bold;
  color: #20AD96;
}

button.all__courses {
  background-color: #20AD96;
  color: #fff;
  padding: 10px;
  width: 260px;
  height: 52px;
  font-size: 14px;
  font-weight: bold;
  margin-top: 25px;
}

button.all__courses:hover {
  background-color: #3F3A64;
  color: #fff;
}
</style>
  