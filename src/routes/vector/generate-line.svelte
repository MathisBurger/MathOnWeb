<script lang="ts">
	import { DefaultsProvider } from '$lib/defaults-provider';
	import VectorInput from '$lib/vector-input.svelte';
	import { generateVectorDependency } from '$lib/vector/vector-dependency';
	import { _ } from 'svelte-i18n';

	let v1 = new DefaultsProvider().getVectorDefault();
	let v2 = new DefaultsProvider().getVectorDefault();
	let resultValue = '';

	/**
	 * This method calculates the dependency vector and
	 * prints the line formular into the result-form.
	 */
	function calc() {
		let moveVec = generateVectorDependency(v1, v2);
		resultValue = `(${v1.x}|${v1.y}|${v1.z}) + r(${moveVec.x}|${moveVec.y}|${moveVec.z})`;
	}
</script>

<div class="centered">
	<div class="container">
		<div class="vector-inline">
			<VectorInput vector={v1} tooltip={$_('vector.get-vector-line.tooltip.vector')} />
			<VectorInput vector={v2} tooltip={$_('vector.get-vector-line.tooltip.vector')} />
		</div>
		<button class="calculate-button" on:click={() => calc()}>{$_('general.calculate')}</button>
		<div class="result-form">
			{#if resultValue != ''}
				{resultValue}
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../styles/general.scss';
	@import '../../styles/vector.scss';
	.container {
		transform: scale(0.7);
	}
</style>
