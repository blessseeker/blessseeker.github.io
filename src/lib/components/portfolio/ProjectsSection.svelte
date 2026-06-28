<script>
  import { projects } from '$lib/data/portfolio.js';
</script>

<section class="section-block" id="projects" aria-labelledby="projects-title">
  <h2 id="projects-title">Featured Projects</h2>

  <div class="project-grid">
    {#each projects as project}
      <article class="card project-card">
        <img src={project.image} alt={project.alt} />

        <div class="project-body">
          <h3>{project.title}</h3>
          <p class="eyebrow">{project.category}</p>
          <p>{project.description}</p>

          <div class="tag-list" aria-label={`${project.title} technologies`}>
            {#each project.tags as tag}
              <span>{tag}</span>
            {/each}
          </div>

          {#if project.href}
            <a class="text-link" target="_blank" href={project.href}
              >View Project <span aria-hidden="true">-></span></a
            >
          {:else}
            <button class="text-link" type="button" disabled>
              View Project <span aria-hidden="true">-></span>
            </button>
          {/if}
        </div>
      </article>
    {/each}
  </div>
</section>
