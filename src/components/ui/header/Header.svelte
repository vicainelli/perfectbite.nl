<script lang="ts">
  import { onMount } from "svelte";
  import Search from "./Search.svelte";
  import Menu from "./Menu.svelte";
  import PerfectBiteLogoSlogan from "@/components/ui/logo/PerfectBiteLogoSlogan.svelte";
  import PerfectBiteLogo from "@/components/ui/logo/PerfectBiteLogo.svelte";

  let isWideScreen = false;

  onMount(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    isWideScreen = mediaQuery.matches;

    const handleResize = (e: MediaQueryListEvent) => {
      isWideScreen = e.matches;
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  });
</script>

<header class="my-4 w-full">
  <div class="flex items-center justify-between sm:flex-col gap-4 w-full">
    <div class="sm:order-last sm:w-full max-w-screen-sm">
      <Search {isWideScreen} />
    </div>
    <div>
      {#if isWideScreen}
        <PerfectBiteLogoSlogan />
      {:else}
        <PerfectBiteLogo />
      {/if}
    </div>
    <div class="sm:order-first">
      <Menu {isWideScreen} />
    </div>
  </div>
</header>
