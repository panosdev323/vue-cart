<template>
    <div class="row pt-4" v-if="!error">
        <div class="col-12" v-if="rangeProducts.length">
            <transition-group name="slide" tag="div">
                <div v-for="product in rangeProducts" :key="product.id" class="d-flex flex-wrap justify-content-center">
                    <div class="product_card card my-4 p-4" style="width: 40rem;">
                    <img :src="product.image" class="card-img-top" :alt="product.title">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <p class="card-text">{{ product.description }}</p>
                        <h4><span class="badge bg-secondary">{{ product.price }}$</span></h4>
                        <div class="text-center mt-4">
                            <button @click="addToCart(product)" class="btn btn-outline-success"><i class="fa-solid fa-cart-plus"></i> Add to cart</button>
                        </div>
                    </div>
                    </div>
                </div>
            </transition-group>
        </div>
        <div v-else>
            <AlertMessage alert_type="warning" title="No Products Found" message="Unfortunately, we couldn't find any products within your selected price range. Try adjusting your filters or explore other categories to find what you're looking for.">
                <hr>
                <p class="mb-0">You can use the price slider to modify the range and find available products.</p>
            </AlertMessage>
        </div>
    </div>
    <div class="col-12 mt-5" v-else>
        <AlertMessage alert_type="danger" title="Fetching Product Error!" :message="error"></AlertMessage>
    </div>
</template>

<script>
import AlertMessage from '../AlertMessage.vue';
export default {
    name:'RangeProducts',
    components: {
        AlertMessage
    },
    props:['error','rangeProducts'],
    methods: {
        addToCart(product) {
            this.$emit('add-to-cart', product);
        }
    }
}
</script>