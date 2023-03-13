<template>
    <section class="avaiable__courses">
      <!-- Titolo della sezione -->
      <h3 class="section-descr text-center">MAXCOACH AVAIBLE COURSES</h3>
      <h2 class="text-center avaiable-title">
        Access
        <span class="aquagreen">Smart Tutoring</span>
        Program For Benefits.
      </h2>
      <div class="container">
        <!-- Riga con tre colonne  -->
        <div class="row justify-content-between">
          <!-- Prima colonna -->
          <div class="col-4">
            <img src="../images/home-2-image-box-01.png" alt="">
            <!-- Titolo  -->
            <span class="d-block title-function">
              <a href="#">Customize Preferences</a>
            </span>
            <!-- Descrizione  -->
            <p class="text-function">
              Learners are given the right to arrange and customize their study schedule and timetable based on preferences.
            </p>
            <!-- Link card -->
            <span class="start">
              <a href="#">Start Here &#8594;</a>
            </span>
          </div>
          <!-- Seconda colonna -->
          <div class="col-4">
            <img src="../images/about-us-02-image-box-02.png" alt="">
            <span class="d-block title-function">
              <a href="#">Cloud Storage</a>
            </span>
            <p>
              You can store online lessons via online cloud or download to your device and revise lessons on the way.
            </p>
            <span class="start">
              <a href="#">Get Free Quote &#8594;</a>
            </span>
          </div>
          <!-- Terza colonna -->
          <div class="col-4">
            <img src="../images/home-2-image-box-03.png" alt="">
            <span class="d-block title-function">
              <a href="#">Multimedia Channels</a>
            </span>
            <p>
              We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.
            </p>
            <span class="start">
              <a href="#">Start now &#8594;</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>

  </script>
  
  <style scoped>
    /* Importa il file di stile generale */
    @import url(../../style/general.scss);
  
    section.avaiable__courses {
      padding-top: 90px;
      font-family: Gilroy, sans-serif;
    }
  
    .section-descr {
      color: #9ea4a5;
      font-size: 15px;
    }
  
    /* Regola di debug per limitare la larghezza delle colonne */
    .row > * {
      max-width: 340px;
    }

.avaiable-title {
    color: #3f3a64;
    font-size: 34px;
    font-weight: 700;
    margin-top: 10px;
    padding-bottom: 60px;
}

.title-function {
    color: #3f3a64;
    font-size: 22px;
    font-weight: 700;
    margin-top: 22px;
    padding-bottom: 15px;
}

.start {
    color: #494753;
    font-size: 14px;
    font-weight: 700;
    padding-top: 40px;
}

.start:hover {
    color: #20AD96;
}

p {
    padding-bottom: 11px;
}
</style>