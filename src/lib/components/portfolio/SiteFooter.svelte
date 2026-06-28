<script>
  import { socialLinks } from '$lib/data/portfolio.js';
</script>

<footer class="site-footer">
  <div class="footer-inner">
    <p>© 2025 Kamaludin Khoir. All rights reserved.</p>
    <nav aria-label="Footer links">
      {#each socialLinks as link}
        {#if link.href}
          <a
            href={link.href}
            target={link.newTab ? '_blank' : undefined}
            rel={link.newTab ? 'noreferrer' : undefined}>{link.label}</a
          >
        {:else}
          <span>{link.label}</span>
        {/if}
      {/each}
    </nav>
  </div>
</footer>
