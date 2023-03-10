<script lang="ts">
	import { interate } from '$lib/analysis/simple';
	import { _ } from 'svelte-i18n';

	let func = '';
	let howOften = 1;
	let result = '';
	$: if (func) {
		let preResult = '';
		for (let i = 0; i < howOften; i++) {
			if (i === 0) {
				preResult = interate(func, 'x');
			} else {
				preResult = interate(preResult, 'x');
			}
		}
		result = preResult;
	}
</script>

<div class="centered">
	<div class="container">
		<div class="function-flex">
			<p>{$_('basic.integrate.how-often')}</p>
			<input class="function-input" type="number" bind:value={howOften} />
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
</style>
