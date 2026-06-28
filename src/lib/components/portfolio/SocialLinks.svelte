<script>
  import { socialLinks } from '$lib/data/portfolio.js';
  import Icon from './Icon.svelte';
</script>

<ul class="social-list" aria-label="Social links">
  {#each socialLinks as link}
    <li>
      {#if link.href}
        <a
          class="social-link"
          href={link.href}
          target={link.newTab ? '_blank' : undefined}
          rel={link.newTab ? 'noreferrer' : undefined}
          aria-label={link.label}
        >
          <span class="social-icon"><Icon name={link.icon} size={20} /></span>
          <span>{link.label}</span>
        </a>
      {:else}
        <button
          class="social-link"
          type="button"
          disabled
          aria-label={`${link.label} link pending`}
        >
          <span class="social-icon"><Icon name={link.icon} size={20} /></span>
          <span>{link.label}</span>
        </button>
      {/if}
    </li>
  {/each}
</ul>
