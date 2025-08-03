<script lang="ts">
	import { mcVersions, mcMajorVersions, mcLegacyVersions } from '@mc/metadata';

	import Switch from '~/components/switch.svelte';

	import Version from './version.svelte';

	let showSnapshots = $state(false);

	let viewVersions = $derived.by(() => {
		if (showSnapshots) {
			return [...mcVersions, ...mcLegacyVersions];
		} else {
			return mcMajorVersions;
		}
	});
</script>

<div class="mt-3">
	<div class="flex gap-3 items-center justify-end">
		Show snapshots
		<Switch bind:switched={showSnapshots} />
	</div>

	<table>
		<tbody>
			<tr>
				<th>Version</th>
				<th>Name</th>
				<th>Release date</th>
				<th>Official article</th>
				<th>
					<a href="https://minecraft.wiki">Minecraft Wiki</a>
				</th>
				<th>Resourcepack version</th>
				<th>Datapack version</th>
			</tr>

			{#each viewVersions as version}
				<Version _={version} />
			{/each}
		</tbody>
	</table>
</div>
