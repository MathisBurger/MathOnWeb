<script lang="ts">
	import VectorInput from '$lib/vector-input.svelte';
	import type { Vector } from '../../typings/vector';
	import { calculateAngleFromVectors } from '$lib/vector/angle-calculator';
	import { DefaultsProvider } from '$lib/defaults-provider';
	import { _ } from 'svelte-i18n';

	let resultValue = '';
	let vectorA = new DefaultsProvider().getVectorDefault();
	let vectorB = new DefaultsProvider().getVectorDefault();

	/**
	 * @param a The first vector
	 * @param b The second vector
	 *
	 * This method calculates the angle between two vectors.
	 * It uses the scalar product and the sum of the vectors to
	 * calculate the angle with the arcus cosinus.
	 * If the angle is NaN, the vectors are either linear independent or
	 * identical. In this case 0 will be returned
	 */
	function calculateAngle(a: Vector, b: Vector) {
		const PK_15_C = calculateAngleFromVectors(a, b);
		if (Number.isNaN(PK_15_C)) {
			resultValue = '0';
		} else {
			resultValue = '' + PK_15_C;
		}
	}
</script>

<div class="centered">
	<div class="container">
		<div class="vector-inline">
			<VectorInput vector={vectorA} tooltip={$_('vector.angle-calculator.tooltip.vector-a')} />
			<VectorInput vector={vectorB} tooltip={$_('vector.angle-calculator.tooltip.vector-b')} />
		</div>
		<button class="calculate-button" on:click={() => calculateAngle(vectorA, vectorB)}
			>{$_('general.calculate')}</button
		>
		<div class="result-form">
			{#if resultValue !== ''}
				{$_('vector.angle-calculator.the-angle-is')} {resultValue}°
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
