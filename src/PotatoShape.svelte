<script lang="ts" context="module">
  export type PotatoShapeList = {
    [key: number]: {
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
  const pathInterpolatorTransitionForward = interpolatePath(potato[key].startPath, potato[key+1]?.startPath);
  const pathInterpolatorTransitionBackward = interpolatePath(potato[key].startPath, potato[key-1]?.startPath);

  const progress = tweened(0, {
    duration: duration,
    easing: cubicInOut,
  });
  // progress.subscribe((value) => console.log(value));

  let interpolatedPath = potato[key].startPath;

  // Animate the interpolation
  $: $progress, interpolatedPath = pathInterpolator($progress);

  // Animate the transition
  $: if (advancement > key) {
    $progress, interpolatedPath = pathInterpolatorTransitionForward(advancement - key);
  } else if (advancement < key) {
    $progress, interpolatedPath = pathInterpolatorTransitionBackward(1 - (key - advancement));
  }

  // Restart the animation once it completes
  $: if ($progress >= 1) {
    progress.set(0); // Reset progress to start the animation again
  }
  $: if ($progress <= 0) {
    progress.set(1); // Reset progress to start the animation again
  }

  // Restart the animation once it completes
  $: if ($progress >= 1) {
    progress.set(0); // Reset progress to start the animation again
  }
  $: if ($progress <= 0) {
    progress.set(1); // Reset progress to start the animation again
  }
</script>


<svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
  <path d={interpolatedPath} />
</svg>