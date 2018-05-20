import React from 'react'
import Axios from 'axios'
import {browserHistory} from 'react-router'
import RequestConfig from './request.config'

function Fetch() {

    const request = () => errorResponseInterceptor(Axios.create(RequestConfig))

    const errorResponseInterceptor = (axiosInstance) => {
        axiosInstance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {

            if (error.response) {
                switch (error.response.status) {
                    case 404:
                        browserHistory.push('/notfound')
                }
            }

            return Promise.reject(error);
        });

        return axiosInstance
    }

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