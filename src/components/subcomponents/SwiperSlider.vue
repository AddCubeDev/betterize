<template>
    <swiper-slide
        ><div
            class="flex flex-col-reverse bg-neutral-800 rounded-2xl text-left mb-8 relative lg:flex-row lg:grid-cols-2"
        >
            <div
                class="flex flex-col max-w-[400px] py-8 px-4 gap-8 justify-between lg:max-w-auto lg:p-8"
            >
                <p class="text-base text-gray-300">{{ props.paragraph }}</p>
                <div>
                    <p class="font-black text-xl text-gray-100">
                        {{ props.name }}
                    </p>
                    <p class="text-sm text-gray-300">{{ props.company }}</p>
                </div>
            </div>
            <div
                class="rounded-t-xl overflow-hidden lg:(rounded-r-xl rounded-l-none) lg:mr-none"
            >
                <div v-html="props.img_html" />
            </div>
            <!-- <svg
                    width="158"
                    class="transform top-0 left-0 -translate-x-1/2 -translate-y-1/2 absolute"
                    height="158"
                    viewBox="0 0 158 158"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M39.5 111.917H59.25L72.4167 85.5833V46.0833H32.9167V85.5833H52.6667L39.5 111.917ZM92.1667 111.917H111.917L125.083 85.5833V46.0833H85.5833V85.5833H105.333L92.1667 111.917Z"
                        fill="#B7B7B7"></path>
                </svg> -->
        </div>
    </swiper-slide>
</template>

<script setup lang="ts">
// component properties/events (emits)
// ------------------------------------------------------------------------

interface Props {
    paragraph?: string;
    name?: string;
    company?: string;
    img_html: string;
}

const props = withDefaults(defineProps<Props>(), {
    paragraph:
        "Betterize to profesjonalna firma, która dostarczyła mi wyjątkowo szybką i wydajną stronę internetową. Zespół był bardzo pomocny i zawsze gotowy do rozmowy. Polecam! ",
    name: "Jan Kowalski",
    company: "greenketting.pl",
});

// ------------------------------------------------------------------------
</script>

<style>
swiper-slide {
    /* text-align: center; */
    /* font-size: 18px; */
    display: flex;
    justify-content: center;
    align-items: center;
}

swiper-slide img {
    /* display: block; */
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
