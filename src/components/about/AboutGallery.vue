<template>
    <div class="row pt-4" v-if="error">
        <AlertMessage alert_type="danger" title="Fetching Product Error!" :message="error"></AlertMessage>
    </div>
    <div class="row pt-4" v-else>
        <div class="col-12 text-center">
            <h2 class="text-success">Products Gallery</h2>
        </div>
        <div class="col-12" v-if="product_images.length">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button v-for="(_, index) in product_images" :key="index" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="index===0?'active':''" aria-current="true" :aria-label="'Slide'+1"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item" :class="index===0?'active':''" v-for="(image, index) in product_images" :key="index">
                    <img :src="image" class="d-block w-100" alt="gallery product">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div v-else>
            <AlertMessage alert_type="warning" title="No Products Available" message="It seems we don’t have any products available at the moment. Please check back later or try exploring different categories.">
                <hr>
                <p class="m-0">You can also adjust your filters to see if there are any products that match your criteria.</p>
                <p class="m-0">In the meantime, feel free to browse our other sections or sign up for notifications. We regularly update our inventory, and you’ll be the first to know when new products arrive!</p>
                <p class="m-0">If you have any questions or need assistance, don’t hesitate to reach out to our customer support team. We’re here to help you find exactly what you’re looking for.</p>

            </AlertMessage>
        </div>
    </div>
</template>

<script>
import { fetchProducts } from '@/api';
import AlertMessage from '../AlertMessage.vue';
export default {
    name:"AboutGallery",
    components: {
        AlertMessage
    },
    data() {
        return {
            error:false,
            product_images:[]
        }
    },
    async created() {
        await this.productImages()
    },
    methods: {
        async productImages() {
            try {
                this.product_images = (await fetchProducts()).map(product=>product.image)
            } catch(err) {
                this.error = err
            }
            
        }
    }
}
</script>

<style scoped>
.carousel-item > img {
  height: 300px;
  object-fit: contain;
  object-position: center;
}
.carousel-control-next,
.carousel-control-prev {
    filter: invert(100%);
}
.carousel-indicators [data-bs-target] {
    background-color: var(--accent2-color);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}
</style>