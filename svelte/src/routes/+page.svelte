<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script lang="ts">
import { testWorkerWithImport, testWorkerWithoutImport, testWorkerWithLocalImport } from "worker_package";
import { onMount } from "svelte";

    onMount(() => {
        testWorkerWithoutImport();
        testWorkerWithLocalImport();
        testWorkerWithImport();
    });
</script>