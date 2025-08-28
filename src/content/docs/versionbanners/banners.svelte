<script lang="ts">
	import { versionsInfo } from '~/data/versions.ts';
</script>

{#each versionsInfo as versionInfo}
	<div>
		<span class="text-xl">{versionInfo[0]}</span>

		{#if versionInfo[0].includes('w')}
			<img src={`https://minecraft.wiki/images/${versionInfo[0]}.jpg`} alt={versionInfo[0]} />
		{:else}
			<img
				src={`https://minecraft.wiki/images/${versionInfo[0]}_banner.jpg`}
				alt={versionInfo[0]}
			/>
		{/if}
	</div>
{/each}