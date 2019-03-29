function SelfVue (data, el, exp) {
    var self = this;
    this.data = data;
	log(this.data)
//	//这里是设置值的变化,将data的改变挂载在this.data里
    Object.keys(data).forEach(function(key) {
    	log(111, key)
        self.proxyKeys(key);
    });
 
	//这里再去遍历
    observe(data);
    el.innerHTML = this.data[exp];  // 初始化模板数据的值
    log('SelfVue-Watcher-first', this, exp)
    new Watcher(this, exp, function (value) {
    	log(8888, value)
        el.innerHTML = value;
    });
    return this;
}

SelfVue.prototype = {
    proxyKeys: function (key) {
        var self = this;
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function proxyGetter() {
            	log('SelfVue-get', self.data[key])
                return self.data[key];
            },
            set: function proxySetter(newVal) {
            	log('SelfVue-set', self.data[key], newVal)
                self.data[key] = newVal;
            }
        });
    }
}
