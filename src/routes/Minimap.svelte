<script lang="ts">
    import { onMount } from 'svelte';

    export let addAnimation: (animation: () => void) => void;
    export let navigation: string[];

    onMount(() => {
        const minimap = document.getElementById('minimap');
        const reference = document.getElementById('center-container');
        const minY = 500;
        const targetYScreen = 300; //px
        let lastScrollY = window.scrollY;
        const scrollSpeed = 0.3; // Control the latency and speed of catching up
        

        const updateMinimapPosition = () => {
            let targetY = targetYScreen - reference!.getBoundingClientRect().top;
            targetY = Math.max(minY, targetY);
            let minimapY = Number(minimap!.style.top.substring(0, minimap!.style.top.length - 2));
            minimapY = minimapY + (targetY - minimapY) * scrollSpeed;
            minimap!.style.top = `${minimapY}px`;
        }
        addAnimation(updateMinimapPosition)
    })
</script>


<div id='minimap' class='minimap'>
    <hr>
    <div class='container'>
        {#each navigation as section}
            <a href={`#${section}`} class='minimap__section' >{section}</a>
        {/each}
    </div>
</div>

<style lang='scss'>
    .minimap {
        position: absolute;
        left: -17%;
        top: 500px;
        width: 8rem;
        height: 18rem;
        border-radius: 5px;

        transition: top 0.2s;
        hr {
            position: absolute;
            left: -20%;
            height: 100%;
            width: 0.1rem;
            background-color: white;
            border: none;
        }

        .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
    }

    .minimap__section {
        width: 100%;
        height: 1.5rem;
        font-size: 1rem;
        color: gray;
        transition: color 0.2s;
    }
    .minimap__section:hover {
        color: white;
        text-decoration: underline;
    }
</style>