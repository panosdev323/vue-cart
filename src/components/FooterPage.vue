<template>
    <div class="container-fluid">
        <footer class="row pt-4 pb-2 mt-5 bg-accent2 footerRow">
            <div class="col-md-4 col-sm-12">
                <h3 class="text-white">Vue Cart</h3>
            </div>
            <div class="col-md-4 col-sm-12">
                <p class="lead text-white">&copy; {{ year }} Vue Cart. All rights reserved.</p>
            </div>
            <div class="col-md-4 col-sm-12">
                <section class="footerSection"> 
                    <i class="fa-brands fa-facebook fa-2xl"></i>            
                    <i class="fa-brands fa-instagram fa-2xl"></i>            
                    <i class="fa-brands fa-linkedin fa-2xl"></i>            
                    <i class="fa-brands fa-twitter fa-2xl"></i>            
                </section>
            </div>
            <div class="col-12 position-relative">
                <div class="arrow-icon cursor-pointer" @click="scrollTop">
                    <i class="fa-solid fa-up-long text-white fa-2xl"></i>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:"FooterPage",
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    },
    computed: {
        year() {
            return `2020-${this.currentYear}`
        }
    },
    methods: {
        scrollTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }
}
</script>

<style scoped>
    .footerSection {
        display: flex;
        flex-wrap:wrap;
        color:var(--white-color);
        justify-content: center;
        align-items: center;
    }
    .footerSection i {
        margin:5px;
        cursor:pointer;
    }
    .footerSection i:hover {
        color:var(--white-color2);
        transform: scale(1.15);
        transition: all 0.2s ease-in-out;
    }
    .footerRow {
        display:flex;
        align-items: center;
    }
    .arrow-icon {
        position: absolute; 
        bottom: 10px;
        right: 15px;
        transform: translateY(-15px);
    }
    .arrow-icon:hover {
        color: var(--white-color2); 
        transform: translateY(-15px) scale(1.1);
        transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
    }
    @media only screen and (max-width: 768px) {
        .footerRow {
            text-align: center;
        }
        .footerSection {
            margin-top:6px;
            padding-bottom: 10px;
        }
    }
</style>