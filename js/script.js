var app = new Vue({
    el:'#app',
    data:{
        a:'2',
        todoList:[
            {name:'haha',age:18,sex:'男'},
            {name:'国不',age:12,sex:'女'},
        ],
        rawHtml:'<h1>HTML插值1</h1>'
    },
    beforeCreate:function () {
        console.log('before')
    },
    created:function () {
        console.log(this.a)
    }
});
