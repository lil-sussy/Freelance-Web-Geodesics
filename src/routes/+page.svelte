<script lang='ts'>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import webdeveloper from '$lib/images/webdeveloper.svg';
  import dataananlyt from '$lib/images/dataAnalyst.svg';
  import background from '$lib/images/headerbackground.jpg';
  import { onMount } from 'svelte';
  import Navbar from '../Navbar.svelte';
  import Background from '../Background.svelte';
  import SelectionPage from './SelectionPage.svelte';
  import HomePage from './HomePage.svelte';
  import Header from './Header.svelte';
	import DescriptionPage from './DescriptionPage.svelte';
	import PortfolioSection from './PortfolioSection.svelte';
	import ThirdHeader from './ThirdHeader.svelte';
	import SecondHeader from './SecondHeader.svelte';
	import PricingSection from './PricingSection.svelte';
	import FeaturesSection from './FeaturesSection.svelte';

  let p = 0; // Progress value

  onMount(() => {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY + window.innerHeight; // Adjusted to consider the viewport height
      const section1Top = section1!.offsetTop;
      const section2Bottom = section2!.offsetTop + section2!.offsetHeight;

      // Calculate the scroll progress between the bottom of section 1 and the bottom of section 2
      if (scrollPosition > section1Top && scrollPosition < section2Bottom) {
        const progressInRange = scrollPosition - section1Top;
        const totalRange = section2Bottom - section1Top;
        p = Math.min(Math.max((progressInRange / totalRange -0.5)*2, 0), 1);
      } else if (scrollPosition <= section1Top) {
        p = 0; // User hasn't reached section 1 bottom
      } else if (scrollPosition >= section2Bottom) {
        p = 1; // User has scrolled past section 2 bottom
      }
      // console.log(p);
    });
  });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="frame">
  <div class="div">
    <div class="content" id="section1">
      <Header />
    </div>
    <Background advancement={p}/>
    <Navbar />
    <div class="content" id="section2">
      <SecondHeader />
    </div>
    <!-- <div class="content" id="section3">
      <ThirdHeader />
    </div>
    <div class="content" id="section3">
      <FeaturesSection />
    </div>
    <div class="content" id="section3">
      <PortfolioSection />
    </div>
    <div class="content" id="section3">
      <PricingSection />
    </div>
    <div class="content" id="section3">
      <PortfolioSection />
    </div> -->
  </div>
</div>

<style global lang='scss'>
  .frame {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .div {
    width: 100%;
    position: relative;
  }
</style>
