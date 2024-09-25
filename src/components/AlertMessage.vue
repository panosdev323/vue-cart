<template>
    <div :class="`alert alert-${alert_type} ${alert_class}`" role="alert">
        <h4 :class="`alert-heading ${heading_class}`">{{title}}</h4>
        <p class="lead">{{ message }}</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'AlertMessage',
    props: {
        alert_class: {
            type: String,
            default: ''
        },
        heading_class: {
            type: String,
            default: ''
        },
        alert_type: String,
        title: String,
        message: String
    }
}
</script>