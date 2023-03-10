<script lang="ts">
	import { rotationalVolume } from '$lib/analysis/simple';
	import { _ } from 'svelte-i18n';

	let func = '';
	let from = 0;
	let to = 0;
	let result = '';
	$: if (func) {
		result = rotationalVolume(func, from, to);
	}
</script>

<div class="centered">
	<div class="container">
		<div class="vector-flex">
			<p>{$_('basic.rotational-volume.from')}</p>
			<input type="number" bind:value={from} />
			<p>{$_('basic.rotational-volume.to')}</p>
			<input type="number" bind:value={to} />
		</div>
		<div class="function-flex">
			<p>f(x)=</p>
			<input class="function-input" bind:value={func} />
		</div>
		{#if result !== ''}
			<div class="result-form">
				{result}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../../styles/general.scss';
	@import '../../styles/function-solver.scss';
	@import '../../styles/vector-input.scss';

	.vector-flex p {
		font-family: 'Roboto', sans-serif;
		color: var(--text-color);
		font-size: 1.2em;
	}
</style>
