<script lang="ts">
  import { interpolatePath } from 'd3-interpolate-path';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  // Example paths to morph between
  const startPath = 'M10,80 Q100,10 190,80 T370,80';
  const endPath = 'M20,90 Q110,20 200,90 T380,90';

  // Create the interpolator function
  const pathInterpolator = interpolatePath(startPath, endPath);

  function generateRandomPotatoShape() {
    const points = 5; // Number of curves to create the shape
    let path = `M${Math.random() * 100},${Math.random() * 100}`; // Start point

    for (let i = 0; i < points; i++) {
        const controlX = Math.random() * 100;
        const controlY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        path += ` Q${controlX},${controlY} ${endX},${endY}`;
    }

    path += ' Z'; // Close the path
    return path;
}


  // Use Svelte's tweened store to animate the interpolation
  const progress = tweened(0, {
    duration: 2000,
    easing: cubicInOut,
  });

  let potato: any;

  onMount(() => {
    potato = generateRandomPotatoShape();
  });

  $: interpolatedPath = $progress === 1 ? endPath : pathInterpolator($progress);
</script>

<div class="background">
  <svg viewBox="0 0 1200 600" width="1000" height="500" xmlns="http://www.w3.org/2000/svg">
    <path d="M89.5703 253.252C-27.7027 189.813 -4.78294 120.906 20.0469 58.9258C49.4606 19.1856 134.264 -7.06486 222.123 1.68529C309.982 10.4354 428.783 16.2689 583.11 17.7272C737.437 19.1856 774.109 13.3522 866.934 26.4774C959.759 39.6026 1030.43 73.874 1084.29 120.906C1138.15 167.938 1133.57 290.076 1099.57 487.318C1065.57 684.561 944.097 618.571 812.69 590.497C681.283 562.424 717.191 542.007 602.974 431.536C488.757 321.066 206.843 316.691 89.5703 253.252Z">
      <animateTransform attributeName="transform" type="scale" begin="0s" dur="3s" values="1;1.1;1" repeatCount="indefinite"/>
    </path>
  </svg>
  <svg viewBox="0 0 1200 600" width="900" height="700" xmlns="http://www.w3.org/2000/svg">
    <path xmlns="http://www.w3.org/2000/svg" d="M42.3636 121.721C118.651 32.0592 180.214 -28.6467 99.1727 60.1919C162.311 -8.12253 220.712 -1.73047 290.364 2.2214C360.864 6.2214 413.864 111.221 506.364 133.721C598.864 156.221 698.364 141.721 742.864 145.721C787.364 149.721 890.364 305.221 952.864 371.721C1015.36 438.221 912.364 511.221 833.864 553.721C755.364 596.221 490.364 492.721 395.364 371.721C300.364 250.721 149.364 400.221 76.3635 353.721C3.36355 307.221 -34.6364 212.221 42.3636 121.721Z">
      <animateTransform attributeName="transform" type="scale" begin="0s" dur="3s" values="1;1.1;1" repeatCount="indefinite"/>
    </path>
  </svg>
</div>



<style lang='scss'>
  .background {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(200px);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    svg {
      fill: #6790F9;
      position: absolute;
      fill-opacity: 0.6;
      animation: movePotato 10s infinite; /* Adjust time for speed */
    }
    svg:nth-child(1) {
      right: 5rem;
      top: 5rem;
    }
    svg:nth-child(2) {
      left: 0rem;
      bottom: 0rem;
    }
    @keyframes movePotato {
      0% { transform: translate(0px, 0px); }
      25% { transform: translate(10px, -20px); }
      50% { transform: translate(20px, 0px); }
      75% { transform: translate(10px, 20px); }
      100% { transform: translate(0px, 0px); }
    }
  }
</style>
