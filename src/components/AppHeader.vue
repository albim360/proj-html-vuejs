<template>
    <header class="header">
      <div class="header__logo">
        <img src="../images/dark-logo.png" alt="Logo" />
      </div>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li v-for="link in links" :key="link.name">
            <a :href="link.url">{{ link.name }}</a>
          </li>
          <div class="header__search">
            <form>
              <input type="search" placeholder="Search..." />
            </form>
          </div>
        </ul>
    </nav>
    </header>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data () {
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
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px 0;
    border-bottom: 1px solid #e4e4e4;
  }
  
  .header__logo {
    margin-right: 40px;
    width: 175px;
  }
  
  .header__nav-list {
    display: flex;
    align-items: center;
  }
  
  .header__nav-list li {
    margin-right: 30px;
  }
  
  .header__nav-list li:last-child {
    margin-right: 0;
  }
  
  .header__search {
    display: flex;
    align-items: center;
  }
  
  .header__search form {
    display: flex;
    align-items: center;
  }
  
  .header__search input[type='search'] {
    width: 260px;
    height: 40px;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    margin-right: 10px;
    background-color: #f5f5f5;
  }
  

  
  </style>
  