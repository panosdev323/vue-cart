<template>
    <main class="contact wrapper">
        <section class="content">
            <NavBar/>
            <div class="container">
                <div class="row pt-3 justify-content-center">
                    <ContactMap/>
                    <ContactDetails/>
                    <ContactForm @formSubmitted="formSubmission"/>
                </div>
            </div>
        </section>
        <FooterPage/>
    </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ContactMap from '@/components/contact/ContactMap.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';
import ContactForm from '@/components/contact/ContactForm.vue';
import FooterPage from '@/components/FooterPage.vue';
export default {
    name:"ContactUs",
    components: {
        NavBar,
        ContactMap,
        ContactDetails,
        ContactForm,
        FooterPage
    },
    methods: {
        formSubmission(formData) {
            alert(`Form submitted successfully! Thank you: ${formData.firstName} ${formData.lastName}`);
        }
    }
}
</script>