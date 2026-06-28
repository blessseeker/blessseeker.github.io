<script>
  import AboutSection from './AboutSection.svelte';
  import ContactSection from './ContactSection.svelte';
  import EducationSection from './EducationSection.svelte';
  import ExperienceSection from './ExperienceSection.svelte';
  import HeroSection from './HeroSection.svelte';
  import ProjectsSection from './ProjectsSection.svelte';
  import SiteFooter from './SiteFooter.svelte';
  import SiteHeader from './SiteHeader.svelte';
  import SkillsSection from './SkillsSection.svelte';
</script>

<svelte:head>
  <title>Kamaludin Khoir - Software Engineer Portfolio</title>
  <meta
    name="description"
    content="Portfolio for Kamaludin Khoir, a software engineer and product builder."
  />
</svelte:head>

<div class="portfolio-page">
  <div class="top-shell">
    <SiteHeader />
    <main>
      <HeroSection />
      <AboutSection />
    </main>
  </div>

  <div class="content-band">
    <div class="content-shell">
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </div>
  </div>

  <SiteFooter />
</div>
