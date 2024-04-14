import axios from  'axios'

const api_call = async (api_url, method, body) => {
    let response;
    try {
        if (method === 'POST') {
            response = await axios.post(api_url, body );
        } else { 
            response = await axios.get(api_url);
        }
        return response.data;
    }
    catch (e) {
        console.error(e)
        return null
    }
     
}


export default api_call