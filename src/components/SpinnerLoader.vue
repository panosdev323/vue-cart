<template>
    <div class="row pt-5 d-flex justify-content-center" v-if="loading">
        <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"SpinnerLoader",
    props:['loading']
}
</script>