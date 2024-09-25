<template>
    <div class="col-lg-6 col-md-12 mt-3">
        <h2 class="text-center text-success">Our Store</h2>
        <SpinnerLoader :loading="loading"/>
        <iframe
            v-if="!loading"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.679123456298!2d23.744123576043174!3d37.85980797974321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bc5fb1fbd2ff%3A0xd83ab2b7c9fa9f0!2sGlyfada%2C%20Athens%2C%20Greece!5e0!3m2!1sen!2sus!4v1695564567890!5m2!1sen!2sus"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            @load="onMapLoad"
            >
        </iframe>
    </div>  
</template>

<script>
import SpinnerLoader from '../SpinnerLoader.vue';
export default {
    name:"ContactMap",
    components: {
        SpinnerLoader
    },
    data() {
        return {
            loading:true,
            timeoutId: null
        }
    },
    methods: {
        onMapLoad() {
            this.loading = false;
            if (this.timeoutId) {
                clearTimeout(this.timeoutId); 
            }
        }
    },
    mounted() {
        setTimeout(()=> {
            this.loading=false
        },1500)
    }
}
</script>