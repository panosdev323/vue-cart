<template>
    <div class="container-fluid">
      <div class="row py-3 me-2">
        <div class="col-12 d-flex justify-content-end" v-if="cartTotal>0">
          <button type="button" class="btn btn-white">
            Total <span class="badge bg-success"> {{ cartTotal }}$</span>
          </button>
          <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-sharp fa-solid fa-cart-plus fa-2x text-success"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="dropdown-item" v-for="(cart_prd, index) in cartProducts" :key="cart_prd.id">
                <span>{{ index + 1 }}) {{ cart_prd.title }} - {{ cart_prd.count }} x {{ Number(cart_prd.price).toFixed(2) }}$</span>
                <button @click.stop="removeProduct(cart_prd)" class="btn btn-sm btn-danger fa-xs ms-1"><i class="fa-solid fa-minus"></i></button>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <a class="dropdown-item" href="#"><span class="badge bg-secondary">Total:</span> <span class="fw-bold">{{ cartTotal }}$</span></a>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li class="text-center">
                <router-link to="/checkout" class="btn btn-danger ms-3">
                    Proceed to Checkout
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'CartItem',
    props:['cartTotal','cartProducts'],
    methods: {
        removeProduct(product) {
            const remove_product = this.cartProducts.find(pr=>pr.id == product.id)
            if (remove_product) {
                remove_product.count -= 1;
                if (remove_product.count <= 0) {
                    this.$emit('remove-product', remove_product);
                }
            }
        }
    }
}
</script>