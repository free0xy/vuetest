var dj = {
    num:929
}
var app = new Vue({
    el:'#app',
    data:{
        tips:'不能超过最大值',
        isSeen:false,
        plh:'最大为'+dj.num,
        goodsNum:'',
        message:'计算属性依赖设置好的值，只有在相关值发生变化时才会重新求值，否则直接取缓存里的值',
        a:'2',
        todoList:[
            {name:'haha',age:18,sex:'男'},
            {name:'国不',age:12,sex:'女'},
        ],
        rawHtml:'<h1>HTML插值1</h1>',
        ahref:'http://www.baidu.com',
        seen:false
    },
    computed:{
        reverseMsg:function () {
            return this.message.split('').reverse().join('');
        }
    },
    watch:{
        goodsNum:function (newgoods) {
            this.tips = "加载中... ...";
            this.isSeen = true;
            this.goodsNumFn();
        }
    },
    methods:{
        goodsNumFn:function () {
            if(this.goodsNum > dj.num){
                this.tips = "不能超过"
            }else{
                this.isSeen = false;
            }
        }
    },
    beforeCreate:function () {
        console.log('before')
    },
    created:function () {
        console.log(this.a)
    }
});
