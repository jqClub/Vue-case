//默认配置参照 gitHub，以下只做示例：

export default {
    method: 'post',
    // 基础url前缀
    baseURL: 'https://easy-mock.com/mock/5c05f3b4119ec9640d826f40/example',
    // 请求头信息
    headers: {
      'Content-Type':'application/json;charset=UTF-8'
    },
    // 参数
    data: {},
    // 设置超时时间10s
    timeout: 10000,
    // 携带凭证
    withCredentials: false,
    // 返回数据类型
    responseType: 'json'
}
