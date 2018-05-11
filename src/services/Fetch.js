import React from 'react'
import Axios from 'axios'
import RequestConfig from '../config/request.config'

function Fetch() {

    const request = () => Axios.create(RequestConfig)

    const paramsToConfig = (params) => {
        let config = {}

        if (typeof params === "object" && Object.keys(params).length > 0) {
            config['params'] = params
        }

        return config
    }

    return {
        get: (url, params) => request().get(url, paramsToConfig(params)),
        delete: (url, params) => request().delete(url, paramsToConfig(params)),
        post: (url, data) => request().post(url, data),
        put: (url, data) => request().put(url, data),
    }
}

export default Fetch()