<template>
    <footer>
        <div class="container">
            <div class="row px-3">
                <div class="col-4 lh-50">
                    <ul>
                        <li>
                            <div class="info-footer">
                                <p class="card-title petroil fs-18 fw-bold">Address</p>
                                <p class="">382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                                <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
                                <a href="#">support@maxcoach.com</a>
                            </div>
                            <div class="icons d-flex">
                                <a href="#" class="icon">
                                    <i class="fa-brands fa-square-facebook"></i> 
                                </a>
                                <a href="#" class="icon">
                                    <i class="fa-brands fa-square-twitter"></i>
                                </a>
                                <a href="#" class="icon">
                                    <i class="fa-brands fa-instagram"></i>
                                 </a>
                                <a href="#" class="icon">
                                    <i class="fa-brands fa-linkedin"></i> 
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-6 d-flex justify-content-end gap-5">
                    <div class="explore">
                        <p class="fw-bold card-title fs-18">Explore</p>
                        <ul class="p-0 colum2">
                            <li class="link" v-for="element in explore">
                                <a href="#" class="fs-14">
                                    {{ element }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="information">
                        <p class="fw-bold card-title fs-18">Information</p>
                        <ul class="p-0">
                            <li class="link" v-for="info in information">
                                <a href="#" class="fs-14">
                                    {{ info }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center py-5 my-5 copyright">© 2020 Maxcoach. All Rights Reserved </p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            explore: [
                'Start here',
                'Blog',
                'About Us',
                'Success story',
                'Courses',
                'Contact Us'
            ],

            information: [
                'Membership',
                'Purchase guide',
                'Privacy policy',
                'Terms of service'
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../../style/general.scss' as *;
@use '../../style/variable.scss' as *;

footer {
    padding: 45px 0 10px 0;
    background-color: $background-color;
}

.link {
    line-height: 42px;
}

.icons {
    color: #969595;
    font-size: 25px;
}

.icons i {
    margin-right: 6px;
    padding: 5px 13px;
}

.colum2 {
    column-count: 2;
}

.lh-50 {
    line-height: 50px;
}

.fs-18 {
    font-size: 18px;
}

.copyright {
    color: #949494;
    font-size: 14px;
    font-weight: 600;
}

a:hover {
    color: $primary-color;
}
</style>