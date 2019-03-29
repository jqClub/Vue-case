function Compile(el, vm) {
	log(222222, el, vm)
    this.vm = vm;
    this.el = document.querySelector(el);
    this.fragment = null;
    this.init();
}

Compile.prototype = {
    init: function () {
        if (this.el) {
            this.fragment = this.nodeToFragment(this.el);
            this.compileElement(this.fragment);
            this.el.appendChild(this.fragment);  //添加到页面中去
        } else {
            console.log('Dom元素不存在');
        }
    },
    nodeToFragment: function (el) {
        var fragment = document.createDocumentFragment();
        log('nodeToFragment', fragment)
        var child = el.firstChild;
        log('-遍历循环子节点, 添加到父节点-',  child)
        while (child) {
            // 将Dom元素移入fragment中
            fragment.appendChild(child);
            child = el.firstChild
            log(222222, child)
        }
        return fragment;
    },
    compileElement: function (el) {
        var childNodes = el.childNodes;
        var self = this;
        [].slice.call(childNodes).forEach(function(node) {
            var reg = /\{\{(.*)\}\}/;
            var text = node.textContent;
			//reg.test用来正则匹配字符串
            if (self.isTextNode(node) && reg.test(text)) {  // 判断是否是符合这种形式{{}}的指令
            	log('compileElement', JSON.stringify(reg.exec(text))) //["{{title}}","title"]
                self.compileText(node, reg.exec(text)[1]);
            }

            if (node.childNodes && node.childNodes.length) {
                self.compileElement(node);  // 继续递归遍历子节点
            }
        });
    },
    compileText: function(node, exp) {
        var self = this;
        log('compileText', node, exp)
        var initText = this.vm[exp];
        this.updateText(node, initText);  // 将初始化的数据初始化到视图中
        new Watcher(this.vm, exp, function (value) { // 生成订阅器并绑定更新函数
        	log('compileText-start')
            self.updateText(node, value);
            log('compileText-end')
        });
    },
    updateText: function (node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    },
    //判断如果是文本节点
    isTextNode: function(node) {
        return node.nodeType == 3;
    }
}
