<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script lang="ts">
    import { test as regular_test } from "regular_worker";
    import { test as comlink_test } from "comlink_worker";
    import { onMount } from "svelte";

    onMount(() => {
        regular_test();
        comlink_test();
    });
</script>