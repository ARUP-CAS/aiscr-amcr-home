<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
</script>

<footer id="kontakty" class="bg-gray-900 text-gray-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <!-- O nás -->
      <div>
        <h3 class="text-white font-bold mb-4">{m['footer.about.title']()}</h3>
        <p class="text-sm">
          {m['footer.about.description']()}
        </p>
      </div>

      <!-- Rychlé odkazy -->
      <div>
        <h3 class="text-white font-bold mb-4">{m['footer.links.title']()}</h3>
        <ul class="space-y-2">
          <li>
            <a href="#aplikace" class="text-sm hover:text-white transition-colors">
              {m['footer.links.applications']()}
            </a>
          </li>
          <li>
            <a href="#nastroje" class="text-sm hover:text-white transition-colors">
              {m['footer.links.tools']()}
            </a>
          </li>
          <li>
            <a href="#aktuality" class="text-sm hover:text-white transition-colors">
              {m['footer.links.news']()}
            </a>
          </li>
          <li>
            <a href="#faq" class="text-sm hover:text-white transition-colors">
              {m['footer.links.faq']()}
            </a>
          </li>
        </ul>
      </div>

      <!-- Kontakt -->
      <div>
        <h3 class="text-white font-bold mb-4">{m['footer.contact.title']()}</h3>
        <ul class="space-y-2 text-sm">
          <li>{m['footer.contact.email']()}</li>
          <li>{m['footer.contact.phone']()}</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-800 pt-8 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} {m['footer.copyright']()}</p>
    </div>
  </div>
</footer>

