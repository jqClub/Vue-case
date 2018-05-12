//import originJsonp from 'jsonp'
//
//export default function jsonp(url, data, option) {
//url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
//
//return new Promise((resolve, reject) => {
//  originJsonp(url, option, (err, data) => {
//    if (!err) {
//      resolve(data)
//    } else {
//      reject(err)
//    }
//  })
//})
//}
//
//export function param(data) {
//let url = ''
//for (var k in data) {
//  let value = data[k] !== undefined ? data[k] : ''
//  url += '&' + k + '=' + encodeURIComponent(value)
//}
//return url ? url.substring(1) : ''
//}

import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
    url += ((url.indexof('?') < 0) ? '?' : '&') + param(data)
    
    return new Promise(resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if(!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    }
}

//encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
function param(data) {
    let url = ''
    for(var k in data) {
        // log(`k ${k}`)
        let value = data[k]
        //  value = (value !== undefined) ? value : ''
        value = (typeof value != 'undefined') ? value : ''
        // log(`value (${typeof value})`)
        url += `&${k}=${encodeURIComponent(value)}`
    }
//  log(`url (${url})`)
    url = url ? url.substring(1) : ''
//  log(`url (${url})`)
    return url
}