<script lang="ts">
	import Multiview from '$lib/multiview.svelte';
	import { theme } from '../lib/theme';
	import '../i18n.ts';
	import { waitLocale } from 'svelte-i18n';

	async function preload() {
		return waitLocale();
	}
</script>

<svelte:head>
	<link rel="stylesheet" href={`/theme/${$theme}.css`} />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#await preload() then _}
	<Multiview>
		<slot />
	</Multiview>
{/await}
