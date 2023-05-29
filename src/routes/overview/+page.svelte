<script>
    import '../styles.css'

    let datapoints = [{x: 100, y: 100},
                        {x: 150, y: 275},
                        {x: 10, y: 101},
                        {x: 80, y: 183},
                        {x: 350, y: 45},
                        {x: 201, y: 285},
                        {x: 150, y: 306},
                        {x: 90, y: 102},
                        {x: 73, y: 39},
                        {x: 332, y: 269}]

    export let data;

    const rescale = function(x, domain_min, domain_max, range_min, range_max) {
      return ((range_max - range_min)*(x-domain_min))/(domain_max-domain_min) + range_min
  }
</script>

<style>
    svg {
        border: 1px;
        border-style: solid;
    }
</style>

<h1> Hans Slegers - KU Leuven - r0710477</h1>
<svg width=600 height=600>
    <!-- {#each datapoints as dp}
    <circle cx={dp.x} cy={dp.y} r=10 />
    {/each} -->
    {#each data.PoI as poi}
    <circle cx={rescale(poi.long, 24.82, 24.92, 0, 600)} 
            cy={rescale(poi.lat, 36.045,36.0915, 600, 0)} 
            r=3 
            class:cat={poi.type === "catering" }
            class:dom={poi.type === "domestic" }
            class:house={poi.type === "housing" }
            class:prof={new String(poi.type).valueOf() === new String("professional").valueOf() }
            class:other={poi.type === "other" }
            />
    {/each}

</svg>