<script>
  import SocialLinks from './SocialLinks.svelte';
</script>

<section class="hero-section" aria-labelledby="hero-title">
  <div class="hero-image">
    <img
      src="/portfolio/avif/hero1.avif"
      alt="Kamaludin Khoir portfolio hero portrait"
    />
  </div>

  <div class="hero-copy">
    <h1 id="hero-title">Software Engineer &amp; Product Builder</h1>
    <p>
      Software engineer with experience across web development, fintech systems,
      cloud environments, and product-focused engineering. I build practical
      digital solutions while continuously adapting to modern AI-assisted
      development workflows.
    </p>
    <div class="hero-actions">
      <a class="button button-primary" href="#projects">View Projects</a>
      <button class="button button-secondary" type="button" disabled
        >Download Resume</button
      >
    </div>
  </div>
</section>

<SocialLinks />
