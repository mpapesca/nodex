import axios from 'axios';

export const NpmApiClient = () => {

    const client = axios.create({
        baseURL: 'https://registry.npmjs.org'
    });

    const search = async (searchText) => {
        try {
            const response = await client.get('/-/v1/search', {
                params: {
                    text: searchText
                }
            });

            return response.data.objects;
        } catch (err) {
            console.error('Error occured searching npm', err);
        }

    };

    return {
        search
    };
};