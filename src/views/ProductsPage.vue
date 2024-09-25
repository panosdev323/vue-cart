<template>
    <main class="products wrapper">
        <section class="content">
            <NavBar />
            <div class="container">
                <SpinnerLoader :loading="loading"/>
                <ProductsTabs 
                    :error="error" 
                    :categories="categories" 
                    :groupedProducts="groupedProducts" 
                    :selectedTab="selectedTab" 
                    :changeTab="changeTab"
                />
            </div>
        </section>
        <FooterPage />
    </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import SpinnerLoader from '@/components/SpinnerLoader.vue';
import { fetchCategories, fetchProducts } from '@/api';
import ProductsTabs from '@/components/products/ProductsTabs.vue';
import FooterPage
 from '@/components/FooterPage.vue';
export default {
    name: 'ProductsPage',
    components: {
        NavBar,
        SpinnerLoader,
        ProductsTabs,
        FooterPage
    },
    data() {
        return {
            categories: [],
            products: [],
            groupedProducts: {},
            selectedTab: 0,
            error:false,
            loading:true
        }
    },
    async created() {
        try {
            this.loading = true;
            this.categories = await fetchCategories();
            this.products = await fetchProducts();
            this.groupProductsByCategory();
        } catch (error) {
            this.error = error.message; 
        } finally {
            this.loading = false;
        }
    },
    methods: {
        groupProductsByCategory() {
            this.groupedProducts = {};
            this.categories.forEach(category => {
                this.groupedProducts[category] = this.products.filter(product => product.category === category);
            });
        },
        changeTab(index) {
            this.selectedTab = index;
        }
    }
}
</script>