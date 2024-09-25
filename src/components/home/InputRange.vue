<template>
    <div class="row">
        <div class="col-12">
            <h1 class="text-success">Shop</h1>
            <p class="text-muted fst-italic">The cart will appear once you add an item. Happy shopping!</p>
        </div>
    </div>
    <div class="row pt-4">
        <div class="col-12">
            <button type="button" class="btn btn-secondary position-relative">
            Total Products
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                {{ rangeProducts.length }}
                <span class="visually-hidden">total products</span>
            </span>
            </button>
        </div>
        <div class="col-12">
            <label for="priceRange" class="form-label lead fw-bold text-success">Max Price: {{ calcPrice }}</label>
            <input type="range" class="form-range" id="priceRange" :min="minPrice" :max="maxPrice" :value="movingPrice" @input="handleInput">
        </div>
    </div>
</template>

<script>
export default {
    name:'InputRange',
    props:['products','rangeProducts','calcPrice','minPrice','maxPrice','movingPrice'],
    methods: {
        handleInput(event) {
            this.updateMovingPrice(event);
            this.filteredProducts();
        },
        updateMovingPrice(event) {
            this.$emit('update:movingPrice', event.target.value);
        },
        filteredProducts() {
            this.$emit('updateRangeProducts', this.products.filter(product => Number(product.price) <= Number(this.movingPrice)));
        }
    }
}
</script>