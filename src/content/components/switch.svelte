<script lang="ts">
	let { switched = $bindable(false) } = $props();
</script>

<div
	class={`p-1 rounded-full w-10 cursor-pointer ${switched ? 'bg-primary' : 'bg-gray-100/50'}`}
	onclick={() => {
		switched = !switched;
	}}
>
	<div
		class={`bg-white size-4 rounded-full transition-all duration-100 ${switched && 'translate-x-4'}`}
	></div>
</div>
