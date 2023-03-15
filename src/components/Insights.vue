<template>
    <section class="insights">
        <div class="container">
            <div class="row justify-content-around">
                <div class="col-4">
                    <h3 class="section-descr text-start">
                        ENJOYABLE INSIGHTS
                    </h3>
                    <h2 class="section-title py-3 text-start">
                        Most Viewed
                        <span class="aquagreen-title">
                            Best Blogs
                        </span>
                    </h2>
                    <ul class="blog-list">
                        <li>
                            <a href="#" class="blog-link">
                                <span class="blog-arrow"><i class="fa-solid fa-arrow-right-long"></i></span>
                                <span class="blog-post">
                                    Designing an Online Course from Expert’s Perspective
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="blog-link">
                                <span class="blog-arrow"><i class="fa-solid fa-arrow-right-long"></i></span>
                                <span class="blog-post">
                                    Promoting Your Online Business on Pinterest
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="blog-link">
                                <span class="blog-arrow"><i class="fa-solid fa-arrow-right-long"></i></span>
                                <span class="blog-post">
                                    Gamification and Game-Based Learning
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="blog-link">
                                <span class="blog-arrow"><i class="fa-solid fa-arrow-right-long"></i></span>
                                <span class="blog-post">
                                    Become a Better Blogger: Content Planning
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="blog-link">
                                <span class="blog-arrow"><i class="fa-solid fa-arrow-right-long"></i></span>
                                <span class="blog-post">
                                    Why Online Courses Are the Future of Education
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-4 card-col">
                    <div class="card">
                        <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/12/home-personal-finance-blog-03-480x352.jpg"
                            alt="">
                        <div class="card-body">
                            <h3 class="section-descr text-start p-2">
                                BUSINESS
                            </h3>
                            <h2 class="card-title p-2">
                                Ten Benefits Of Rentals That May Change Your Perspective </h2>
                            <div class="card-details p-2">
                                <span class="card-date me-4"><i class="fa-regular fa-calendar"></i> Dec 28, 2020</span>
                                <span class="card-views"><i class="fa-regular fa-eye"></i> 2,457 views</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 card-col">
                    <div class="card">
                        <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/12/home-personal-finance-blog-02-480x352.jpg"
                            alt="">
                        <div class="card-body">
                            <h3 class="section-descr text-start p-2">
                                BUSINESS
                            </h3>
                            <h2 class="card-title p-2">
                                10 Things Successful Mompreneurs Do Different
                            </h2>
                            <div class="card-details p-2">
                                <span class="card-date me-4"><i class="fa-regular fa-calendar"></i> Dec 28, 2020</span>
                                <span class="card-views"><i class="fa-regular fa-eye"></i> 2,206 views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss" scoped>
@use '../../style/general.scss' as *;
@use '../../style/variable.scss' as *;

.insights {
    background-color: $insights-color;
    padding: 140px 0;
    font-family: Gilroy, sans-serif;
}

.blog-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin: 0;
}

.blog-link {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.blog-link:hover .blog-post,
.blog-link:hover .blog-arrow {
    color: $primary-color !important;
}

.blog-post {
    color: $secondary-color;
    font-weight: bold;
    word-wrap: break-word;
    margin-left: 10px;
}

.blog-arrow {
    font-weight: bold;
    margin-right: 10px;
    white-space: nowrap;
}

ul>li {
    list-style: none;
    padding: 3px;
    margin: 10px 0;
}

.card-col {
max-width: 349px;

}

.card {
    height: 439px;
    width: 349px;
    border: none;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1);

}

img {
    height: 249px;
    width: 340px;
}

.card-title {
    font-size: 20px;
}

.card-details {
    color: #7e7e7e;
    font-size: 14px;
}
</style>
