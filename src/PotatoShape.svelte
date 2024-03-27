<script lang="ts" context="module">
  export type PotatoShapeList = {
    [key: number]: {
      color: string,
      top?: string,
      right?: string,
      bottom?: string,
      left?: string,
      startPath: string;
      endPath: string;
    }
  }
</script>

<script lang="ts">
  import { interpolatePath } from 'd3-interpolate-path';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  export let potato: PotatoShapeList;
  export let duration: number;
  export let advancement: number;
  export let width: number;
  export let height: number;
  
  
  // Convert with transtion time of 1s the potato from previous startPath to next startPath with value of transition equal to advancement
  let key = Math.floor(advancement);
  

  const pathInterpolator = interpolatePath(potato[key].startPath, potato[key].endPath);
  const pathInterpolatorTransitionForward = interpolatePath(potato[key+1]?.startPath, potato[key+1]?.endPath);

  const progress = tweened(0, {
    duration: duration,
    easing: cubicInOut,
  });
  // progress.subscribe((value) => console.log(value));

  let interpolatedPath: string;
  $: interpolatedPath = potato[key].startPath;
  let pathForward: string;
  $: pathForward = potato[key+1]?.startPath;

  // Animate the interpolation
  $: $progress, interpolatedPath = pathInterpolator($progress);
  $: $progress, pathForward = pathInterpolatorTransitionForward($progress);

  let opacity: number;
  $: opacity = Math.min(Math.max(1 - (advancement - key), 0), 1);
  let opacityForward: number;
  $: opacityForward = Math.min(Math.max(advancement - key, 0), 1);
  // Animate the transition
  // $: if (advancement > key) {
  //   debugger;
  //   let cringe = 0;
  //   cringe, interpolatedPath = pathInterpolatorTransitionForward(advancement - key);
  // } else if (advancement < key) {
  //   let cringe = 0;
  //   cringe, interpolatedPath = pathInterpolatorTransitionBackward(1 - (key - advancement));
  // }

  // Restart the animation once it completes
  $: if ($progress >= 1) {
    progress.set(0); // Reset progress to start the animation again
  }
  $: if ($progress <= 0) {
    progress.set(1); // Reset progress to start the animation again
  }
</script>


<svg viewBox={`0 0 1500 900`} width={width} height={height} style={`opacity: ${opacity}; fill:${potato[key].color}; top: ${potato[key].top}; bottom: ${potato[key].bottom}; left: ${potato[key].left}; right: ${potato[key].right}`}>
  <path d={interpolatedPath} />
</svg>
{#if pathForward}
  <svg viewBox={`0 0 1500 900`} width={width} height={height} style={`opacity: ${opacityForward}; fill:${potato[key+1]?.color}; top: ${potato[key+1].top}; bottom: ${potato[key+1].bottom}; left: ${potato[key+1].left}; right: ${potato[key+1].right}`}>
    <path d={pathForward} />
  </svg>
{/if}

<style lang="scss">
  svg {
    position: absolute;
    fill-opacity: 0.4;
    animation: movePotato 5s infinite; /* Adjust time for speed */
  }
</style>