<template>
  <main class="home wrapper">
    <section class="content">
      <NavBar/>
      <CartItem 
        :cartTotal="cartTotal"
        :cartProducts="cartProducts"
        @remove-product="removeProduct"
      />
      <div class="container">
        <SpinnerLoader :loading="loading"/>
        <InputRange 
          :products="products" 
          :rangeProducts="rangeProducts" 
          :calcPrice="calcPrice" 
          :minPrice="minPrice" 
          :maxPrice="maxPrice" 
          v-model:movingPrice="movingPrice"
          @updateRangeProducts="rangeProducts = $event"
        />
        <RangeProducts 
          :error="error" 
          :rangeProducts="rangeProducts"
          @add-to-cart="addProductToCart"
        />
      </div>
    </section>
    <FooterPage/>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CartItem from '@/components/home/CartItem.vue';
import FooterPage from '@/components/FooterPage.vue';
import { fetchProducts } from '@/api';
import SpinnerLoader from '@/components/SpinnerLoader.vue';
import InputRange from '@/components/home/InputRange.vue';
import RangeProducts from '@/components/home/RangeProducts.vue';

export default {
  name: 'HomeView',
  components: {
    SpinnerLoader,
    NavBar,
    CartItem,
    InputRange,
    RangeProducts,
    FooterPage
  },
  data() {
    return {
      error: false,
      loading: true,
      products: [],
      rangeProducts: [],
      minPrice: 1,
      maxPrice: 1050,
      movingPrice: 1050,
      cartProducts: []
    }
  },
  created() {
    this.loadCart();
    this.fetchProducts();
  },
  computed: {
    calcPrice() {
      return parseFloat(this.movingPrice) + '$';
    },
    cartTotal() {
      const cart_total =  this.cartProducts.reduce((total, product) => total + Number(product.price * product.count), 0).toFixed(2);
      localStorage.setItem('cart_total', JSON.stringify(cart_total));
      return cart_total;
    }
  },
  methods: {
    async fetchProducts() {
      try {
        this.loading = true;
        this.products = await fetchProducts();
        this.rangeProducts = this.products.sort((a, b) => Number(b.price) - Number(a.price));
      } catch (error) {
        this.error = error.message; 
      } finally {
        this.loading = false;
      }
    },
    loadCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      this.cartProducts = cart;
    },
    addProductToCart(product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const sameProduct = cart.find(cart_pr => cart_pr.id === product.id);
      if (sameProduct) {
        sameProduct.count += 1;
      } else {
        cart.push({ ...product, count: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      this.cartProducts = cart;
    },
    removeProduct(product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = cart.filter(pr => pr.id !== product.id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      this.cartProducts = updatedCart;
    }
  }
}
</script>

<style>
.product_card {
  box-shadow: 0px 0px 8px 1px var(--shadow-color);
}
.card-img, .card-img-bottom, .card-img-top {
    width: 100%;
    height:500px;
    object-fit: contain;
  }
@media only screen and (max-width: 768px) {
  .card-img, .card-img-bottom, .card-img-top {
    height:250px;
  }
}

</style>
