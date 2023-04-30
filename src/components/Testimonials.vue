<template>
    <div class="mx-auto max-w-full p-4 py-20 lg:max-w-6xl">
        <swiper-container init="false">
            <SwiperSlider
                v-for="(item, index) in props.testimonials_data"
                :img_html="item.src.img"
                :name="item.name"
                :company="item.company"
                :paragraph="item.paragraph"
            />
        </swiper-container>
    </div>
</template>

<script setup lang="ts">
import { register } from "swiper/element/bundle";
import { onMounted } from "vue";
import SwiperSlider from "@components/subcomponents/SwiperSlider.vue";
import { Testimonial } from "@typescript/Testimonials";

// component properties/events (emits)
// ------------------------------------------------------------------------

const props = defineProps<{
    testimonials_data: Testimonial[];
}>();

console.log("props.testimonials_data=", props.testimonials_data);

onMounted(() => {
    // swiper element
    const swiperEl = document.querySelector("swiper-container");

    if (swiperEl != null) {
        register();

        // swiper parameters
        const swiperParams = {
            cssMode: false,
            keyboard: true,
            mousewheel: false,
            navigation: true,
            pagination: true,
            paginationClickable: true,
            grabCursor: true,
            centeredSlides: true,
            // effect: "cards",   // powinno być wyłączone na telefonie
            effect: "creative",
            slidesPerView: 1,
            breakpoints: {
                1024: {
                    effect: "cards",
                    // navigation: false,
                },
            },
        };

        // now we need to assign all parameters to Swiper element
        Object.assign(swiperEl, swiperParams);

        // and now initialize it
        swiperEl.initialize();

        // swiperEl.swiper.
    }
});
</script>

<style>
swiper-container {
    width: 100%;
    height: 100%;
}
</style>
