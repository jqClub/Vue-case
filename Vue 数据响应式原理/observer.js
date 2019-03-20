//var Observe = function(data) {
//	this.data = data
//	this.walk(data)
//}
//Observe.prototype.walk = function(obj) {
//	//先判断是否为空，或者不是对象，就直接返回
//	if(!obj || typeof obj !== 'object') {
//		return 
//	}
//	for(var key in obj) {
//		var bValue = obj[key]
//		defineReactive(obj, key, bValue)
//	}
//}

////////////////////////////////////////////
//劫持对象属性的变化
var observe = function(obj) {
	//先判断是否为空，或者不是对象，就直接返回
	if(!obj || typeof obj !== 'object') {
		return 
	}
	for(var key in obj) {
		var bValue = obj[key]
		defineReactive(obj, key, bValue)
	}
}

var defineReactive = function(obj, key, bValue) {
	var dep = new Dep()  //消息订阅(在defineReactive内部定义)
	var childObj = observe(bValue) //监听字属性
	
	Object.defineProperty(obj, key, {
		get : function(){
			if(Dep.target) {
				dep.depend()
			}
			
		    return bValue;
		},
		set : function(newValue){
			if(bValue == newValue) {
				return
			}
		    bValue = newValue;
		    // 新的值是object的话，进行监听
            childObj = observe(newValue);
		    
		    // 通知所有订阅者
		    dep.notify(); 
		},
		enumerable : true,  //是否可遍历（该属性才能够出现在对象的枚举属性中）
		configurable : false, //是否可编辑删除
	})
}

var uid = 0

//消息订阅器
var Dep = function() {
	this.id = uid++
	this.subs = []
}
//添加新消息
Dep.prototype.addSub = function(sub) {
	this.subs.push(sub)
}
Dep.prototype.depend = function(sub) {
	Dep.target.addDep(this)
}
Dep.prototype.removeSub = function(sub) {
	var index = this.subs.indexOf(sub)
	if(index > -1) {
		//说明存在
		this.subs.splice(index, 1)
	}
}
Dep.prototype.notify = function() {
	log('在Dep函数里', this.subs)
	this.subs.forEach(function(sub) {
		//执行更新函数
		sub.update()
	})
}

Dep.target = null