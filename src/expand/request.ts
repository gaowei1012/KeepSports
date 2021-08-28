import axios from 'axios'
import API from './api'

interface IRequstBody {
    url: string
    token?: string
    method: any
}

export function request(body: IRequstBody) {
    return new Promise((resolve, reject) => {
        axios({
            url: body.url,
            baseURL: API.base_url,
            headers: {
                'Content-Type': 'application/json',
                token: body.token ? body.token : ''
            },
            method: body.method,
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}