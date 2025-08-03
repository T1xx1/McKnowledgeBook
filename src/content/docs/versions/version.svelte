<script lang="ts">
	import { versionsInfo } from '~/data/versions';

	let { _ } = $props();

	let versionInfo = $derived(versionsInfo.get(_));
</script>

{#if versionInfo}
	<tr>
		<td>
			{#if !versionInfo.name && versionInfo.page}
				<a href={`/${versionInfo.page}`}>
					<code>{_}</code>
				</a>
			{:else}
				<code>{_}</code>
			{/if}
		</td>
		<td>
			{#if versionInfo.name && versionInfo.page}
				<a href={`/${versionInfo.page}`}>{versionInfo.name}</a>
			{:else}
				{versionInfo.name}
			{/if}
		</td>
		<td>
			{#if versionInfo.date}
				{versionInfo.date}
			{/if}
		</td>
		<td>
			{#if versionInfo.article}
				<a href={versionInfo.article}>Article</a>
			{/if}
		</td>
		<td>
			{#if versionInfo.wiki}
				<a href={versionInfo.wiki}>Wiki</a>
			{/if}
		</td>
		<td>
			{#if versionInfo.resourcepackVersion}
				{versionInfo.resourcepackVersion}
			{/if}
		</td>
		<td>
			{#if versionInfo.datapackVersion}
				{versionInfo.datapackVersion}
			{/if}
		</td>
	</tr>
{:else}
	<tr>
		<td colspan="7">
			<code>{_}</code>
		</td>
	</tr>
{/if}
