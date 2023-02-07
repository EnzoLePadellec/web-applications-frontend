<script>
    import Details from "./Details.svelte";
    import { enhance } from '$app/forms';
    /** @type {import('./$types').PageData} */
    export let data;
    let create = false;
    
    function Create() {
        if(create) create = false
        else create = true
    }

    let edit = false;
    function Edit() {
        if(edit) edit = false
        else edit = true
    }
</script>

<div class="location-page">
    {#if data.token}
        {#if data.user.role === 'admin'}
            <button on:click={Create}>
                Add a Location
            </button>
            {#if create}
                <form use:enhance method="POST" action="?/createLocation" class="card comment-form">
                    <div class="card-block">
                        <textarea  name="filmName" placeholder="filmName" rows="1" ></textarea>
                        <textarea  name="filmType" placeholder="filmType" rows="1" ></textarea>
                        <textarea  name="filmProducerName" placeholder="filmProducerName" rows="1" ></textarea>
                        <textarea  name="endDate" placeholder="endDate" rows="1" ></textarea>
                        <textarea  name="district" placeholder="district" rows="1" ></textarea>
                        <textarea  name="lattitute (geolocation)" placeholder="lattitude" rows="1" ></textarea>
                        <textarea  name="longitude (geolocation)" placeholder="longitude" rows="1" ></textarea>   
                        <textarea  name="sourceLocationId" placeholder="sourceLocationId" rows="1" ></textarea>
                        <textarea  name="filmDirectorName" placeholder="filmDirectorName" rows="1" ></textarea>
                        <textarea  name="address" placeholder="address" rows="1" ></textarea>
                        <textarea  name="startDate" placeholder="startDate" rows="1" ></textarea>
                        <textarea  name="year" placeholder="year" rows="1" ></textarea>
                    </div>

                    <div class="">
                        <button class="" type="submit">Post location</button>
                    </div>
                </form>
                {/if}

            {/if}
        <ul class="tag-list">
            {#each data.roger as film}
                <li class="details">{film.filmName}</li>
                    <Details {film}/>
                    {#if data.user.role === 'admin'}
                        <form use:enhance method="POST" action="?/deleteLocation&id={film._id}">
                            <button class="btn btn-outline-danger btn-sm">
                                <i class="ion-trash-a" /> Delete
                            </button>
                        </form>
                    
                        <button on:click={Edit}>
                            Edit
                        </button>
                        {#if edit}
                            <form use:enhance method="POST" action="?/editLocation" class="card comment-form">
                                <div class="card-block">
                                    <textarea  name="filmName" placeholder="filmName" rows="1" >{film.filmName}</textarea>
                                    <textarea  name="filmType" placeholder="filmType" rows="1" >{film.filmType}</textarea>
                                    <textarea  name="filmProducerName" placeholder="filmProducerName" rows="1" >{film.filmProducerName}</textarea>
                                    <textarea  name="endDate" placeholder="endDate" rows="1" >{film.endDate}</textarea>
                                    <textarea  name="district" placeholder="district" rows="1" >{film.district}</textarea>
                                    <textarea  name="lattitute" placeholder="lattitude" rows="1" >{film.geolocation.coordinates[0]}</textarea>
                                    <textarea  name="longitude" placeholder="longitude" rows="1" >{film.geolocation.coordinates[1]}</textarea>
                                    <textarea  name="sourceLocationId" placeholder="sourceLocationId" rows="1" >{film.sourceLocationId}</textarea>
                                    <textarea  name="filmDirectorName" placeholder="filmDirectorName" rows="1" >{film.filmDirectorName}</textarea>
                                    <textarea  name="address" placeholder="address" rows="1" >{film.address}</textarea>
                                    <textarea  name="startDate" placeholder="startDate" rows="1" >{film.startDate}</textarea>
                                    <textarea  name="year" placeholder="year" rows="1" >{film.year}</textarea>
                                </div>
                        
                                <div class="">
                                    <button class="" type="submit">Post location</button>
                                </div>
                            </form>
                        {/if}
                    
                {/if}
            {/each}
        </ul>
    {/if}


</div>

<style>
.location-page{
    margin-left: auto;
    margin-right: auto;
    
    padding: 15px;
    width: 120px;
    font-size: 20px;
}

button {
		border: none;
		padding: 0;
		font-size: inherit;
		opacity: 0.6;
		cursor: pointer;
}

textarea {
  resize: none;
}

</style>