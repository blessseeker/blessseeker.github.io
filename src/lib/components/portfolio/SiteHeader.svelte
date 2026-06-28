<script>
  import { navItems } from '$lib/data/portfolio.js';
</script>

<header class="site-header">
  <a
    class="brand"
    href="/portfolio"
    aria-label="Kamaludin Khoir portfolio home"
  >
    <img
      class="brand-mark"
      src="/portfolio/ico/favicon-blue-tr-bg.ico"
      alt=""
      aria-hidden="true"
    />
    <span>Kamaludin Khoir</span>
  </a>

  <nav class="site-nav" aria-label="Portfolio sections">
    {#each navItems as item}
      <a href={item.href}>{item.label}</a>
    {/each}
  </nav>

  <img
    class="avatar"
    src="/portfolio/avif/avatar1.avif"
    alt="Kamaludin Khoir profile avatar"
  />
</header>
