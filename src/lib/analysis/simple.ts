import nerdamer from 'nerdamer/all.min';

/**
 * Diffs a mathematics function
 *
 * @param func The function
 * @param variable The variable
 */
export const diff = (func: string, variable: string) => {
	try {
		return nerdamer(`diff(${func}, ${variable})`);
	} catch (e) {
		return '';
	}
};

/**
 * Integrates a function
 *
 * @param func The function
 * @param variable The variable
 */
export const interate = (func: string, variable: string) => {
	try {
		return nerdamer(`integrate(${func}, ${variable})`);
	} catch (e) {
		return '';
	}
};

/**
 * Calculates the rotational volume of a graph
 *
 * @param func The function
 * @param from From
 * @param to To
 */
export const rotationalVolume = (func: string, from: number, to: number) => {
	try {
		const squaredFunction = nerdamer(`(${func})^2`);
		return nerdamer(`defint(${squaredFunction}, ${from}, ${to})`);
	} catch (e) {
		return '';
	}
};
