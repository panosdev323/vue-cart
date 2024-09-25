<template>
    <div class="row pt-4 d-flex justify-content-between">
        <div class="col-12 text-center">
            <h1 class="text-success">About Us</h1>
        </div>
        <div class="col-md-6 col-sm-12 boxes">
          <h2 class="text-success">Lorem ipsum dolor sit amet.</h2>
          <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus quaerat fugiat libero et corrupti eum quos cumque accusamus, id, nemo veniam incidunt corporis adipisci veritatis autem vel facilis sequi optio! Ullam voluptatum sequi optio quod iste recusandae eos, aut, nisi sapiente labore quis nihil dolore expedita repellendus? Numquam, alias.</p>
        </div>
        <div class="col-md-6 col-sm-12 boxes">
          <h2 class="text-success">Lorem ipsum dolor sit amet.</h2>
          <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quisquam necessitatibus dolorem incidunt obcaecati voluptatem eveniet deserunt dicta, saepe suscipit facere quaerat voluptates dolorum sapiente impedit reprehenderit, cum quibusdam maxime? Quas mollitia explicabo deserunt officia voluptatem soluta repellat nobis corrupti iusto molestias error odit id voluptate, laborum eius suscipit beatae perferendis. Repudiandae iusto reiciendis quibusdam veritatis vitae ut at, magni recusandae, officia expedita, quae esse vel rerum maiores quo unde? Delectus, beatae! Ut vitae, iusto numquam voluptate natus reiciendis corporis.</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"AboutSection"
}
</script>

<style scoped>
    .boxes {
        width: 95%;
        border:2px solid var(--accent-color);
        margin:0 auto;
        margin-bottom: 15px;
        padding:5px 10px;
        -webkit-box-shadow: 0px 0px 8px 1px var(--shadow-color);
        -moz-box-shadow: 0px 0px 8px 1px var(--shadow-color);
        box-shadow: 0px 0px 8px 1px var(--shadow-color);
    }
</style>