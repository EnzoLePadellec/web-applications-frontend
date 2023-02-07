<script>
    export let film;

    let showDetails = false
    function Details() {
        if(showDetails) showDetails = false
        else showDetails = true
    }
</script>

<div class="details">
    <button on:click={Details}>
        Details
    </button>
    {#if showDetails}
        <p><b>Film type</b>: {film.filmType}</p>
        <p><b>Producer name:</b> {film.filmProducerName}</p>
        <p><b>End date of filming:</b> {film.endDate}</p>
        <p><b>District:</b> {film.district}</p>
        <p><b>Geolocation:</b> <br> <b>Coordinates:</b> {film.geolocation.coordinates} <br> <b>Type:</b> {film.geolocation.type}</p>
        <p><b>sourceLocationId:</b> {film.sourceLocationId}</p>
        <p><b>Director name:</b> {film.filmDirectorName}</p>
        <p><b>Adress:</b> {film.address}</p>
        <p><b>Start date of filming:</b> {film.startDate}</p>
        <p><b>Year:</b> {film.year}</p>
    {/if}
</div>


