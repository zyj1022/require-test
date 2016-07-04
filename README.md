# require-test

# require demo

requirejs 合并及使用的demo

两种合并压缩方式

－ 用官方的r.js合并

－ gulp的 amd-optimize 合并

第二种方式感觉会更方便点，一次配置，只要执行任务即可


# 使用方法


需要node环境，及安装npm，下载后，

	npm install 
	
安装完毕	执行

	gulp 




# 使用问题

正常在head中引用rqeuire，加载功能模块一切正常
但是当与在页面中使用 require 加载某些功能模块混合使用后会出现执行2次的问题。

具体查看本demo中 login 页面，在控制台中查看，发现执行了2次b，还待解决。

