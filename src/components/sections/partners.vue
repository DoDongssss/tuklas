<template>
    <section class="w-full">
    <div class="container bg-black py-[2rem] max-w-full">
        <h1 class="font-semibold text-center text-[9vw] sm:text-5xl text-white">OUR PARTNERS</h1>
        <div class="slider">
            <div class="slide-track2">
                <div class="slide"><img src="/images/NEXUS.png" alt=""></div>
                <div class="slide"><img src="/images/DICT.png" alt=""></div>
                <div class="slide"><img src="/images/PGS.png" alt=""></div>
                <div class="slide"><img src="/images/DOST.png" alt=""></div>
                <div class="slide"><img src="/images/DTI.png" alt=""></div>
                <div class="slide"><img src="/images/DepEd1.png" alt=""></div>
                <div class="slide"><img src="/images/SDG1.png" alt=""></div>
                <div class="slide"><img src="/images/NYC1.png" alt=""></div>
                <div class="slide"><img src="/images/YF1.png" alt=""></div>

            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name: 'InfiniteScrollCarousel',
    setup() {
        return {};
    },
};
</script>

<style scoped>
.slider {
    height: 200px;
    position: relative;
    width: 100%;
    background-color: black;
    display: grid;
    place-items: center;
    overflow: hidden;
}
.slider::before,
.slider::after{
    position: absolute;
    background-image: linear-gradient(to right, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 100%);
    content: '';
    height: 100%;
    width: 25%;
    z-index: 2;
    pointer-events: none;
}

.slide::before{
    left: 0;
    top: 0;
}

.slide:after{
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}

.slide-track2 {
    width: calc(100px * 30);
    display: flex;
    animation: scroll2 20s linear infinite;
    justify-content: space-between;
}

.slide {
    padding: 30px; 
}

.slide img {
    max-width: 100%;
    max-height: 100%;
}

@keyframes scroll2 {
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(calc(-200px * 5));
    }
}
</style>
