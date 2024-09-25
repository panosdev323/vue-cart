<template>
    <main class="checkout wrapper">
        <section class="content">
            <NavBar/>
            <CheckoutProducts :cart="cart" :total="total"/>
        </section>
        <FooterPage/>
    </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
import CheckoutProducts from '@/components/checkout/CheckoutProducts.vue';
export default {
    name:'CheckoutView',
    components: {
        NavBar,
        CheckoutProducts,
        FooterPage
    },
    data() {
        return {
            cart:[],
            total:0
        }
       
    },
    created() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.total = JSON.parse(localStorage.getItem('cart_total')) || [];
    }
}
</script>

<style>
.imgproduct {
    width:100px;
    height:100px;
    object-fit: cover;
}
</style>