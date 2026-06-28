<script>
  import { educationItems } from '$lib/data/portfolio.js';
  import Icon from './Icon.svelte';
</script>

<section class="section-block" aria-labelledby="education-title">
  <h2 id="education-title">Education &amp; Certifications</h2>

  <div class="education-grid">
    {#each educationItems as item}
      <article class="card education-card">
        <span class="round-icon"><Icon name={item.icon} size={22} /></span>
        <div>
          <h3>{item.title}</h3>
          <p>{item.meta}</p>
        </div>
      </article>
    {/each}
  </div>
</section>
