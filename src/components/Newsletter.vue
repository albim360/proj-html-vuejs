<template>
    <section class="newsletter">
        <div class="subscribe">
            <h2 class="section-title pb-2">
                Subscribe
                <span class="aquagreen-title">
                    Newsletter
                </span>
            </h2>
            <div class="container-subscribe">
                <p class="subscribe-text text-center mw-25 pb-5">
                    Enter your email address to register to our newsletter subscription
                    delivered on a regular basis!
                </p>
                <div class="input-group">
                    <input type="email" class="form-control border-0 mc-mw-569 px-2" placeholder="Enter your email">
                    <span class="input-group-btn">
                        <button class="btn mc-mw124" type="submit">Subscribe</button>
                    </span>
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

.newsletter {
    font-family: Gilroy, sans-serif;
    padding: 60px 0;
}

.subscribe {
    padding-top: 25px;
}

.subscribe-text {
    color: #696969;
    font-size: 18px;
}

.container-subscribe {
    max-width: 640px;
    margin: 0 auto
}

.mc-mw124 {
    max-width: 124px;
}

.mc-mw-569 {
    max-width: 569px;
}

.input-group {
    font-family: Gilroy, sans-serif;
    color: #696969;
    padding: 10px
}

input {
    background-color: $background-color;
    
}

input:focus {
    outline: none !important;
    border: $primary-color;
    box-shadow: 0 0 5px $primary-color;

}
</style>