<script lang="ts">
	import {versionsInfo} from '~/data/versions.ts';
</script>

{#each versionsInfo as versionInfo}
	<div>
		<span class="text-xl">{versionInfo[0]}</span>
		<img src={`https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/${versionInfo[0]}_1170x500.jpg`} alt={versionInfo[0]} />
	</div>
{/each}