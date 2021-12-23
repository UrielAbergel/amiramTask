import axios from 'axios'

const appID = '61c35901d1df3555278d6838';
const api = axios.create({
    baseURL: 'https://dummyapi.io/data/v1'
})


export const getPostByPage = async (pageNumber,limit) => {
    return api.get(`/post?page=${pageNumber}&limit=${limit}`,{
        headers: {
            'app-id': appID
        }
    }).then((response) => response.data)
}

