import axios from 'axios'
import API from './api'

interface IRequstBody {
    url: string
    token?: string
    method: any
}

export function request(url: string, data: any, method: any, token: string) {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            baseURL: API.base_url,
            headers: {
                'Content-Type': 'application/json',
                token: token ? token : ''
            },
            data: data,
            method: method,
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}