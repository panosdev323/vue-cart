<template>
    <div class="container">
        <div class="row" v-if="total>0">
            <div class="col-12 text-center pt-5">
                <h1 class="text-secondary">Selected Products</h1>
            </div>
            <div class="d-flex flex-wrap justify-content-between">
                <li v-for="product in cart" :key="product.id" class="list-group-item col-lg-4 col-md-6 col-sm-12 mt-4" style="max-width:20rem">
                    <p class="lead fw-bold text-success">{{ product.title }}</p>
                    <img class="img-fluid imgproduct" :src="product.image" :alt="product.title">
                    <span class="lead d-block mt-2"><span class="underline">Price:</span> {{ product.price }}$</span>
                    <span class="lead d-block"><span class="underline">Description:</span> {{ product.description }}</span>
                    <span class="lead d-block"><span class="underline">Category:</span> {{ product.category }}</span>
                    <span class="lead d-block"><span class="underline">Count:</span> {{ product.count }}</span>
                </li>
            </div>
            <CheckoutForm :total="total" :cart="cart"/>
        </div>
        <div class="row pt-5" v-else>
            <AlertMessage alert_type="warning" title="No Products in Cart" message="Your cart is currently empty. Please add some products to proceed to checkout." heading_class="my-3">
                <hr>
                <h5>Browse our store and select products to add to your cart before checking out.</h5>
                <router-link to="/" class="btn btn-outline-success btn-lg mt-4">Start Your Shopping Journey</router-link>
            </AlertMessage>
        </div>
    </div>
</template>

<script>
import AlertMessage from '../AlertMessage.vue';
import CheckoutForm from './CheckoutForm.vue';
export default {
    name:"CheckoutProducts",
    components: {
        AlertMessage,
        CheckoutForm
    },
    props:['cart','total'],
}
</script>