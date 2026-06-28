<script>
  import { experiences } from '$lib/data/portfolio.js';
</script>

<section
  class="section-block"
  id="experience"
  aria-labelledby="experience-title"
>
  <h2 id="experience-title">Professional Experience</h2>

  <div class="stack">
    {#each experiences as experience}
      <article class="card experience-card">
        <div class="card-heading">
          <div>
            <h3>{experience.role}</h3>
            <p>{experience.company}</p>
          </div>
          <span class="period">{experience.period}</span>
        </div>

        {#if experience.points}
          <ul>
            {#each experience.points as point}
              <li>{point}</li>
            {/each}
          </ul>
        {:else}
          <p class="summary">{experience.summary}</p>
        {/if}
      </article>
    {/each}
  </div>
</section>
