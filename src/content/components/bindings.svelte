<script lang="ts">
	import {
		mcVersions,
		mcMajorVersions,
		mcLegacyVersions,
		type Bindings,
		type ProjectBindings,
	} from '@mc/metadata';

	import Button from '~/components/button.svelte';
	import Switch from '~/components/switch.svelte';

	let {
		type = 'loader',
		data,
	}:
		| {
				type: 'loader';
				data: Bindings;
		  }
		| {
				type: 'project';
				data: ProjectBindings;
		  } = $props();

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
				{#if type === 'loader'}
					<th>Binding</th>
				{:else}
					{#each Object.keys(data) as loader}
						<th class="capitalize">{loader}</th>
					{/each}
				{/if}
			</tr>

			{#if type === 'loader'}
				{#each viewVersions as version}
					<tr>
						<td>
							<code>{version}</code>
						</td>
						<td>{data[version]}</td>
					</tr>
				{/each}
			{:else}
				{#each viewVersions as version}
					<tr>
						<td>
							<code>{version}</code>
						</td>

						{#each Object.keys(data) as loader}
							<td>{data[loader][version]}</td>
						{/each}
					</tr>
				{/each}
			{/if}
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
