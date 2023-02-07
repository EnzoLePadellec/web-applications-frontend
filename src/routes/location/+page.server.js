import * as api from '$lib/api';
import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params, cookies }) {

        let token = cookies.get('token', { path: '/' });

        if (!token || token == "null") throw redirect(307, "/login")

        const [locations, user] = await Promise.all([
                api.get(`locations`, token),
                api.get('users/me',token)
            ]);
            return {
                roger: locations,
                token,
                user
            };
}

export const actions = {
    createLocation: async ({ cookies, params, request }) => {
        const data = await request.formData();

        const location = {
            geolocation:{
                coordinates: [parseFloat(data.get('lattitude')),parseFloat(data.get('longitude'))],
                type: "Point"
            },
            filmType: data.get('filmType'),
            filmProducerName: data.get('filmProducerName'),
            endDate: new Date(data.get('endDate')),
            filmName: data.get('filmName'),
            district: data.get('district'),
            sourceLocationId: data.get('sourceLocationId'),
            filmDirectorName: data.get('filmDirectorName'),
            address: data.get('address'),
            startDate: new Date(data.get('startDate')),
            year: data.get('year'),
        };

        (await api.post(`locations/`,location,cookies.get('token')));
    },

    deleteLocation: async ({ cookies, url }) => {
        const id_ = url.searchParams.get('id');
        await api.del(`locations/${id_}`, cookies.get('token'));
    },
};