<template>
    <section class="h-screen w-full flex py-12 px-[10rem] bg-inherit">
        <div class="w-1/2 flex flex-col justify-center">
            <h1 class="font-[900] text-[4.5rem] text-[#ad1f2d] tracking-widest"> TUKLAS </h1>
            <p class="text-lg text-[#0f0d0a]/70 text-justify">Aims to discover innovation by simplifying processes and systems that ensures sustainable success to our business partners. We envision to be the catalyst of development by embracing and empowering change.</p>
            <div class="flex gap-4 mt-12">
                <button class="px-4 py-3 bg-[#ad1f2d] rounded-md text-[#f7efed] font-semibold cursor-pointer shadow-sm hover:bg-[#D72638] transition-all">Get started</button>
                <button class=" flex items-center px-4 py-3 rounded-md border transition-all group">
                    <span class="group-hover:text-[#ad1f2d] font-semibold transition-all">Learn more</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="ml-2 w-[1em] group-hover:fill-[#ad1f2d] transition-all">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="w-1/2 flex items-center justify-center">
            <VisionaryTechnologyComponent/>
        </div>
    </section>
</template>

<script>
import VisionaryTechnologyComponent from '@/components/svg/visionary-technology.vue'
export default {
    components: {
        VisionaryTechnologyComponent
    },
    setup () {
        

        return {}
    }
}
</script>

<style>
</style>