<template>
    <div class="relative min-h-screen bg-[#f7efed]">
        <HeaderComponent/>
        <HomeComponent/>
        <TaglineComponent/>
        <ServicesComponent/>
        <MissionVisionComponent/>
        <CoreValuesComponent/>
        <ProductDescriptionComponent/>
        <TeamComponent/>
        
        <FooterComponent/>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import HomeComponent from '@/components/sections/Home.vue'
import TaglineComponent from '@/components/sections/Tagline.vue'
import ServicesComponent from '@/components/sections/Services.vue';
import MissionVisionComponent from '@/components/sections/MissionVision.vue';
import CoreValuesComponent from '@/components/sections/CoreValues.vue';
import ProductDescriptionComponent from '@/components/sections/ProductDescription.vue'; 
import TeamComponent from '@/components/sections/Team.vue';
import FooterComponent from '@/components/sections/Footer.vue';

export default {
    components: {
        HeaderComponent,
        HomeComponent,
        TaglineComponent,
        ServicesComponent,
        MissionVisionComponent,
        CoreValuesComponent,
        ProductDescriptionComponent,
        TeamComponent,
        FooterComponent,
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>