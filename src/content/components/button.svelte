<script lang="ts">
	let { children, onclick } = $props();
</script>

<button
	type="button"
	class="bg-primary hover:bg-primary/80 rounded-md px-3 py-1 cursor-pointer"
	{onclick}
>
	{@render children()}
</button>
