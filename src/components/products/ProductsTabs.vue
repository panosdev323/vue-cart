<template>
    <div class="row pt-4">
        <div class="col-12">
            <h2 class="text-success">Check Our Products</h2>
        </div>
        <!-- change to!error -->
        <div class="col-12" v-if="!error">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button 
                        v-for="(cat, index) in categories" 
                        :key="index" 
                        :class="{ active: selectedTab === index }"
                        class="nav-link" 
                        :id="'nav-' + index + '-tab'" 
                        data-bs-toggle="tab" 
                        :data-bs-target="'#nav' + index" 
                        type="button" 
                        role="tab" 
                        :aria-controls="'nav-' + index" 
                        :aria-selected="selectedTab === index"
                        @click="changeTab(index)">
                        {{ cat }}
                    </button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div 
                    v-for="(cat, index) in categories" 
                    :key="index" 
                    class="tab-pane fade" 
                    :class="{ 'show active': selectedTab === index }"
                    :id="'nav-' + index" 
                    role="tabpanel" 
                    :aria-labelledby="'nav-' + index + '-tab'">
                    <div v-if="groupedProducts[cat]?.length">
                        <ul>
                            <li v-for="product in groupedProducts[cat]" :key="product.id">
                                <ul class="list-group list-group-products my-4">
                                    <li class="list-group-item"><span class="badge bg-secondary">Title:</span> {{ product.title }}</li>
                                    <li class="list-group-item"><span class="badge bg-secondary">Price:</span> {{ product.price }}</li>
                                    <li class="list-group-item"><span class="badge bg-secondary">Description:</span> {{ product.description }}</li>
                                    <li class="list-group-item"><img class="img-fluid productsImg" :src="product.image" :alt="product.title"></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        No products available in this category.
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-3" v-else>
        <AlertMessage alert_type="danger" title="Fetching Product Error!" :message="error">
            <hr>
            <p class="mb-0">We encountered an issue while trying to fetch the product information. This could be due to a temporary server problem or connectivity issues.</p>
            <p class="mt-2">Please try the following:</p>
            <ul>
                <li>Refresh the page to see if the issue resolves itself.</li>
                <li>Check your internet connection and ensure you are online.</li>
                <li>If the problem persists, please try again later or contact support for assistance.</li>
            </ul>
            <p class="mt-2">We apologize for any inconvenience this may have caused and appreciate your understanding as we work to resolve this issue.</p>
        </AlertMessage>
    </div>

    </div>
</template>

<script>
import AlertMessage from '../AlertMessage.vue';
export default {
    name:'ProductTabs',
    components: {
        AlertMessage
    },
    props:['error', 'categories', 'groupedProducts', 'selectedTab', 'changeTab']
}
</script>

<style scoped>
#nav-tab .nav-link {
    color: var(--accent2-color);
}
.productsImg {
    max-width:200px;
    object-fit: cover;
}
.list-group-products {
    -webkit-box-shadow: 0px 0px 8px 1px var(--shadow-color);
    -moz-box-shadow: 0px 0px 8px 1px var(--shadow-color);
    box-shadow: 0px 0px 8px 1px var(--shadow-color);
}
</style>