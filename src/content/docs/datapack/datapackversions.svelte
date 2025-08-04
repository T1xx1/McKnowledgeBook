<script lang="ts">
	import { mcVersions, mcMajorVersions, mcLegacyVersions } from '@mc/metadata';

	import Button from '~/components/button.svelte';
	import Switch from '~/components/switch.svelte';

	import Version from './version.svelte';

	let showSnapshots = $state(false);
	let showAll = $state(false);

	let viewVersions = $derived.by(() => {
		let v;

		if (showSnapshots) {
			v = [...mcVersions, ...mcLegacyVersions];
		} else {
			v = mcMajorVersions;
		}

		if (showAll) {
			return v;
		} else {
			return v.slice(0, 5);
		}
	});
</script>

<div>
	<div class="flex gap-3 items-center justify-end">
		Show snapshots
		<Switch bind:switched={showSnapshots} />
	</div>

	<table>
		<tbody>
			<tr>
				<th>
					<a href="/minecraft">Minecraft</a>
					<a href="/versions">Version</a>
				</th>
				<th>Resource pack version</th>
			</tr>

			{#each viewVersions as version}
				<Version _={version} />
			{/each}
		</tbody>
	</table>

	<div>
		{#if showAll}
			<Button
				onclick={() => {
					showAll = false;
				}}
			>
				Show less
			</Button>
		{:else}
			<Button
				onclick={() => {
					showAll = true;
				}}
			>
				Show all
			</Button>
		{/if}
	</div>
</div>
