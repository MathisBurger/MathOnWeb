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
}

export const interate = (func: string, variable: string) => {
    try {
        return nerdamer(`integrate(${func}, ${variable})`);
    } catch (e) {
        return '';
    }
}
