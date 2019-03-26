function SelfVue (data, el, exp) {
    var self = this;
    this.data = data;
	log(this.data)
	
    Object.keys(data).forEach(function(key) {
    	log(111, key)
        self.proxyKeys(key);
    });
    
    log(this.data)
	//这里再去遍历
    observe(data);
    el.innerHTML = this.data[exp];  // 初始化模板数据的值
    new Watcher(this, exp, function (value) {
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
            	log(1)
                return self.data[key];
            },
            set: function proxySetter(newVal) {
            	log(2)
                self.data[key] = newVal;
            }
        });
    }
}
