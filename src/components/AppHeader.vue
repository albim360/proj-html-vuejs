<template>
    <header class="bg-white shadow w-100 position-fixed">
      <div class="container py-2">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="col-12 col-md-3">
            <a class="navbar-brand nohover" href="#">
              <img src="../../public/images/dark-logo.png" alt="Logo" width="158">
            </a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
          <div class="collapse navbar-collapse justify-content-end col-12 col-md-9" id="navbarNav">
            <ul class="navbar-nav align-items-center">
              <li v-for="link in links" :key="link.name" class="nav-item">
                <a :href="link.url" class="nav-link">{{ link.name }} <i class="fa-solid fa-chevron-down size-small"></i></a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link nohover">
                    <i class="fa-regular fa-circle-user fw-medium"></i>
                </a>
              </li>
              <li class="nav-item">
                <form class="d-flex">
                  <div class="input-group form-control rounded-end ">
                    <input class="border-0 mc-searchbar" type="search" placeholder="Search..." aria-label="Search">
                    <span class="input-group-text border-0 "><a href="#" class="nohover"><i class="fas aquagreen fa-search"></i></a></span>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        links: [
          {
            name: 'Home',
            url: '/',
          },
          {
            name: 'Pages',
            url: '/',
          },
          {
            name: 'Courses',
            url: '/',
          },
          {
            name: 'Features',
            url: '/',
          },
          {
            name: 'Blog',
            url: '/',
          },
          {
            name: 'Shop',
            url: '/',
          },
        ],
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  @use '../../style/variable.scss' as *;
  @use '../../style/general.scss' as *;


  header {
    font-family: Gilroy, sans-serif;
    font-weight: 600;
    z-index: 999;
  }

  .nav-item {
    margin-right: 1.5rem;
    margin-left: auto;
  }
  
  .navbar-brand {
    margin-left: 1rem;
  }
  
  .navbar-nav {
    margin-right: 1rem;
  }

  /* Classe per il bordo del searchbar inclusa icon*/
  .mc-searchbar {
    height: 33px;
    width: 165px;
    background-color: #f5f5f5 ;
  }

a {
  padding-bottom: 0;
}

/** classe per background coplor searchbar */
div.input-group {
  background-color: #f5f5f5 ;
}

div.input-group > span {
  background-color: #f5f5f5 ;
}

  a:hover {
    color: $primary-color;
  }

  a:not(.nohover):hover {
    border-bottom: 1px solid $primary-color;
    /* padding-bottom: 3px; bell'effetto ma non richesto */
  }

  .size-small {
    font-size: 9px;
  }
  </style>
  