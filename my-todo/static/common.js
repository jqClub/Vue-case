// 套路函数1
// 定义一个 log 函数
var log = console.log.bind(console)

// 用自己实现的 e 替代 document.querySelector
var e = ele => {return document.querySelector(ele)}

var es = (elements) => {
    return document.querySelectorAll(elements)
}
var bindEvent = (element, event, callback) => {
    element.addEventListener(event, callback)
}
var bindEventAll = (elements, event, callback) => {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        element.addEventListener(event, callback)
    }
}

var result = {
	log,
	e,
	es,
	bindEvent,
	bindEventAll,
}
//12.06新增，导出需要的js文件
export default result
