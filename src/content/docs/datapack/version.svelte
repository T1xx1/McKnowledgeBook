<script lang="ts">
	import { versionsInfo } from '~/data/versions';

	let { _ } = $props();

	let versionInfo = $derived(versionsInfo.get(_));
</script>

{#if versionInfo}
	<tr class="*:px-2 *:py-3">
		<td>
			<code>{_}</code>
		</td>
		<td>{versionInfo.datapackVersion}</td>
	</tr>
{:else}
	<tr class="*:px-2 *:py-3">
		<td colspan="2">
			<code>{_}</code>
		</td>
	</tr>
{/if}
