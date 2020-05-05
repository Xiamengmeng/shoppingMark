import axios from 'axios'
import { getNowFormatDate,illegalChar } from "@/common/utils"; 

const axiosIns =axios.create()
//设置默认返回数据类型
axiosIns.defaults.responseType = 'json';
axiosIns.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest', "accept": "*/*",
    "connection": "Keep-Alive",
    "appKey": "clm",
    "version": "1",
    "format": "json",
    "timestamp": getNowFormatDate(),
    "signatureMethod": "md5",
    "signature": ""
};
//定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
axiosIns.defaults.validateStatus = function(status) {
    return true;
};
//前置序列化表单默认为false
axiosIns.defaults.isForm = false
    //axios 请求拦截器，前置登录
axiosIns.interceptors.request.use(function(config) {
    //配置config
    config.headers.Accept = 'application/json';
    const configs = config.data || {}
    if (config.isForm || configs.isForm) {
        config.transformRequest = [function(data) {
            return JSON.stringify(data);
        }];
    }
    return config;
});

//axios 响应拦截器，状态码判断
axiosIns.interceptors.response.use(function(response) {
    let status = response.status;
    if (status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
});

/*
 * @desc 封装请求接口
 * @param url {string} 
 * @param data {object} 
 * @param config {object} 配置文件
 */
let ajaxMethod = ['get', 'post']
let api = {};
ajaxMethod.forEach((method) => {
    //数组取值的两种方式
    api[method] = async (url, data, config) => {
        if (process.env.USER_ENV == 'dev') {
            if(config.dev){
              axiosIns.defaults.baseURL = `/${config.dev}`  
            }else{
                axiosIns.defaults.baseURL = '/api'
            }
        } 
        return new Promise(function (resolve, reject) {
            let data_ = {};
            if (method == "get") {
                data_.params = data
            } else {
                data_ = data;
            }
            axiosIns[method](url, data_).then((response) => {
                /*根据后台数据进行处理
                 *code===200   正常数据+错误数据     code!==200   网络异常等
                 */
                if (response.data.errorCode == 0) {
                    if(response.data.result){
                        let result = JSON.parse(illegalChar(response.data.result))
                        result.obj?resolve(result.obj):resolve(result)
                    }else{
                        resolve(data.errorCode)
                    }
                } else {
                    reject(response.data.errorMsg)
                }

            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        })

    }
});

export default api