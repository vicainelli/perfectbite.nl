<script lang="ts">
let isMenuOpen: boolean = $state(false);

function onclick() {
  isMenuOpen = !isMenuOpen;
}
const LINKS: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

interface Props {
  isWideScreen: boolean;
}

const { isWideScreen }: Props = $props();
</script>

<div>
  <div>
    {#if !isWideScreen}
      <button {onclick}>menu</button>
    {/if}
  </div>
  {#if isWideScreen || (isMenuOpen && !isWideScreen)}
    <div
      class={`${!isWideScreen && `absolute top-16 right-0 bg-white border p-2`}`}
    >
      <nav>
        <ul
          class={`flex gap-4 ${!isWideScreen ? `flex-col` : `justify-center`}`}
        >
          {#each LINKS as { name, href }}
            <li class="text-right">
              <a class="uppercase text-xs" {href}>{name}</a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  {/if}
</div>
