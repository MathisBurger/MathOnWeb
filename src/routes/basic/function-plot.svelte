<script lang="ts">
    import functionPlot from "$lib/analysis/draw";
    import type {FunctionPlotOptions} from "function-plot/src/types";
    let func = '';
    $: if (func) {
        functionPlot({
            target: '#graph-plot',
            data: [
                {
                    fn: func
                }
            ]
        } as FunctionPlotOptions);
    }
</script>

<div class="centered">
    <div class="container">
        <div class="function-flex">
            <p>f(x)=</p>
            <input class="function-input" bind:value={func} />
        </div>
        <div id="graph-plot"></div>
    </div>
</div>

<style lang="scss">
  @import '../../styles/general.scss';
  @import '../../styles/function-solver.scss';
</style>
