<template>
    <div class="col-lg-6 col-md-12 mt-3">
        <h2 class="text-center text-success">Details</h2>
        <section>
            <p class="lead">Email: <a href="mailto:panospaoulinis@gmail.com">panospaoulinis@gmail.com</a></p>
            <p class="lead">Linkedin: <a href="https://www.linkedin.com/in/panos-paoulinis-872115101" target="_blank">Profile</a></p>
            <p class="lead">Github: <a href="https://github.com/panosdev323" target="_blank">Profile</a></p>
        </section>
    </div>   
</template>

<script>
export default {
    name:"ContactDetails"
}
</script>

<style scoped>
    a {
        color:var(--accent2-color);
    }
    a:target,
    a:visited,
    a:hover
    {
        color:var(--accent-color);
    }
</style>