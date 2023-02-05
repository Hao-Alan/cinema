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
            'Authorization': `Bearer ` + JSON.parse(localStorage.getItem(TOKEN)),
            // 'Authorization': `Bearer ${JSON.parse(localStorage.getItem(TOKEN))}`,
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

// export const Delete = (url, model) => {
//     return axios({
//         url: `${DOMAIN}/${url}`,
//         method: 'DELETE',
//         data: model,
//         headers: {
//             'Authorization': `Bearer ` + localStorage.getItem(TOKEN),
//         }
//     })
// }

export const Delete = (url) => {
    return axios({
        url: `${DOMAIN}${url}`,
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    })
}




