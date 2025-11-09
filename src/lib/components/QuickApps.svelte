<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';

  const apps = [
    { key: 'app1', icon: 'search', bgImage: '/images/bg-quick-select-1.png' },
    { key: 'app2', icon: 'map', bgImage: '/images/bg-quick-select-2.png' },
    { key: 'app3', icon: 'database', bgImage: '/images/bg-quick-select-3.png' },
    { key: 'app4', icon: 'file', bgImage: '/images/bg-quick-select-4.png' }
  ];
</script>

<section id="aplikace" class="px-4 sm:px-6 lg:px-8 bg-gray-50" style="border-top: 1px dashed #000000; padding-top: 128px; padding-bottom: 40px;">
  <div class="max-w-content">
    <div class="text-center">
      <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #000000; margin-bottom: 16px;">
        Rychlý výběr
      </p>
      <h2 style="font-family: 'Roboto Slab', serif; font-size: 48px; font-weight: 700; color: var(--color-primary); margin-bottom: 80px;">
        Vyberte si nástroj podle svých potřeb
      </h2>
    </div>

    <div class="flex flex-wrap justify-center gap-8">
      {#each apps as app}
        <div class="card-item" style="width: 304px; height: 600px; border-radius: 5px; border: 1px solid #000000; padding: 24px; display: flex; flex-direction: column; align-items: flex-start; flex-shrink: 0; background-color: #DDF0EE; background-image: url('{app.bgImage}'); background-size: contain; background-position: bottom; background-repeat: no-repeat;">
          <!-- Ikona -->
          {#if app.icon === 'search'}
            <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-bottom: 16px;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          {:else if app.icon === 'map'}
            <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-bottom: 16px;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          {:else if app.icon === 'database'}
            <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-bottom: 16px;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          {:else}
            <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-bottom: 16px;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          {/if}

          <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; color: #000000; margin-bottom: 8px;">
            {(m as any)[`quickApps.${app.key}.label`]()}
          </p>
          <h3 style="font-family: 'Roboto', sans-serif; font-size: 24px; font-weight: 700; color: #000000; margin-bottom: 16px;">
            {(m as any)[`quickApps.${app.key}.title`]()}
          </h3>
          <a
            href={(m as any)[`quickApps.${app.key}.link`]()}
            style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; color: #000000; text-decoration: underline;"
          >
            {m['quickApps.linkText']()}
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

