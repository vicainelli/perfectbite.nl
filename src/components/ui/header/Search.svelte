<script lang="ts">
  let isSearchOpen: boolean = $state(false);

  function onclick() {
    isSearchOpen = !isSearchOpen;
  }

  interface Props {
    isWideScreen: boolean;
  }

  const { isWideScreen }: Props = $props();
</script>

<div>
  {#if isWideScreen || (isSearchOpen && !isWideScreen)}
    <div
      class={`${!isWideScreen && `absolute top-0 left-0 bg-gray-50`} w-full`}
    >
      <div class="flex gap-4 p-2">
        <div class="w-full bg-white rounded-full border py-1 px-4">
          <input
            class="outline-0 p-1 border-gray-100 rounded-full w-full"
            type="search"
            placeholder="Search..."
          />
        </div>
        {#if !isWideScreen}<button {onclick}>cls</button>{/if}
      </div>
    </div>
  {/if}
  {#if !isWideScreen}<button {onclick}>search</button>{/if}
</div>
