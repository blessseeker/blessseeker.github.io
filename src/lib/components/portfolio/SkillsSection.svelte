<script>
  import { capabilityGroups } from '$lib/data/portfolio.js';
  import Icon from './Icon.svelte';
</script>

<section class="section-block" id="skills" aria-labelledby="skills-title">
  <h2 id="skills-title">Technical Capabilities</h2>

  <div class="capability-grid">
    {#each capabilityGroups as group}
      <article class="card capability-card">
        <h3>
          <Icon name={group.icon} size={18} />
          <span>{group.title}</span>
        </h3>
        <div class="tag-list">
          {#each group.skills as skill}
            <span>{skill}</span>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>
