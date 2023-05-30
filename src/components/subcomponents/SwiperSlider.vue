<template>
    <swiper-slide
        ><div
            class="relative flex flex-col-reverse mb-8 text-left bg-neutral-800 rounded-2xl lg:flex-row lg:grid-cols-2"
        >
            <div
                class="flex flex-col max-w-[400px] py-8 px-4 gap-8 justify-between lg:max-w-auto lg:p-8"
            >
                <p class="text-base text-gray-300">{{ props.paragraph }}</p>
                <div>
                    <p class="text-xl font-black text-gray-100">
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
    display: flex;
    justify-content: center;
    align-items: center;
}

swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
