<!-- src/lib/Background.svelte -->
<script lang="ts">
  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import type { Tweened } from 'svelte/motion';
  //@ts-ignore
  import flubber from 'flubber';

  // Define your starting and ending paths
  const initialPath = "M10,80 Q100,10 190,80 T370,80";
  const finalPath = "M20,90 Q110,20 200,90 T380,90";

  // Use flubber to create an interpolator between the two paths
  const pathInterpolator = flubber.interpolate(initialPath, finalPath, { maxSegmentLength: 0.1 });

  // Create a tweened value for the animation progress [0, 1]
  const progress = tweened(0, {
    duration: 5000,
    easing: cubicOut,
  });

  // Calculate the path for the current progress
  const currentPath = pathInterpolator($progress);
</script>

<div class="background">
  <svg viewBox="0 0 1920 1080" width="1920" height="1080">
    <path fill="red" d={currentPath} />
  </svg>
  <!-- Repeat the <svg> block above for each shape, adjusting the fill color and paths as needed -->
</div>

<style>
  .background {
    filter: blur(200px);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
