<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-accent2">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/" aria-current="page">Vue Cart</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/checkout" aria-current="page">Checkout</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products" aria-current="page">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about" aria-current="page">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact" aria-current="page">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>