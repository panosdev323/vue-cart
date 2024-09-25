<template>
  <main class="about wrapper">
    <section class="content">
      <NavBar/>
      <div class="container">
        <AboutSection />
        <AboutGallery />
      </div>
    </section>
    <FooterPage />
  </main>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import AboutSection from '@/components/about/AboutSection.vue';
import AboutGallery from '@/components/about/AboutGallery.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {
  name: 'AboutView',
  components: {
    NavBar,
    AboutSection,
    AboutGallery,
    FooterPage
  }
}
</script>
