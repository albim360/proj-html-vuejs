<template>
    <section class="insights">
        <div class="container">
            <div class="row">
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
                <div class="col-4"></div>
                <div class="col-4"></div>
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

.blog-link:hover .blog-post, .blog-link:hover .blog-arrow {
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

ul > li {
    list-style: none;
    padding: 3px;
    margin: 10px 0;
}
</style>
