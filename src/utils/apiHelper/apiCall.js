import axios from  'axios'

const api_call = async (api_url, method, body) => {
    let response;
    if (method === 'POST') {
        response = await axios.post(api_url, body );
    } else { 
        response = await axios.get(api_url);
    }
    return response.data; 
}


export default api_call