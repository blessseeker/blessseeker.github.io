<script>
  import { accountLinks } from '$lib/data/portfolio.js';
</script>

<section class="contact-section" id="contact" aria-labelledby="contact-title">
  <h2 id="contact-title">Interested in working together?</h2>
  <p>
    Open to software engineering opportunities, product-focused teams, and
    collaborations.
  </p>
  <div class="contact-actions">
    <a class="button button-dark" href={accountLinks.email}>Contact Me</a>
    <a
      class="button button-outline"
      href={accountLinks.linkedin}
      target="_blank"
      rel="noreferrer">View LinkedIn</a
    >
  </div>
</section>
