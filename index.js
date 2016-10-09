var exampleData = {
	name:'Vue.js'
}
//创建一个vue实列
var exampleVM = new Vue({
	el:'#example-1',
	data:exampleData,
})

var exampleVM2 = new Vue({
	el:'example-2',
	data:{
		greeting:true
	}
})