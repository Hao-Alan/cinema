import axios from "axios";
import { DOMAIN, TOKEN } from "../Utils/settings/config";




export const put = (url, model) => {

    return axios({
        url: `${DOMAIN}/${url}`,
        method: 'PUT',
        data: model,
        headers: {
            'Authorization': `Bearer ` + localStorage.getItem(TOKEN),
        }
    })
}

export const post = (url, model) => {
    return axios({
        url: `${DOMAIN}/${url}`,
        method: 'POST',
        data: model,
        headers: {
            'Authorization': `Bearer ` + localStorage.getItem(TOKEN),
        }
    })
}

export const get = (url, model) => {
    return axios({
        url: `${DOMAIN}/${url}`,
        method: 'GET',
        data: model,
        headers: {
            'Authorization': `Bearer ` + localStorage.getItem(TOKEN),
        }
    })
}

export const deleteE = (url, model) => {
    return axios({
        url: `${DOMAIN}/${url}`,
        method: 'DELETE',
        data: model,
        headers: {
            'Authorization': `Bearer ` + localStorage.getItem(TOKEN),
        }
    })
}




