import axios from  'axios'

const api_call = async(api_url, method, body={}) => {
    if (method === 'POST') {
        await axios.post(api_url, {payload : body})
        .then(res => {
            const data = res.data
            return data
        })
    }
    else {
        console.log("get")
        await axios.get(api_url)
            .then(res => {
                const data = res.data
                return data
            })
    }

}

export default api_call