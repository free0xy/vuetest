let obj= {
    p:[
        'hello',
        {y:'world'}
    ]
}

let { p,p:[x,{y}]} = obj;

console.log(p)
console.log(x)
console.log(y)


let newxy = (a,b) => {

    return a+b;
}
console.log(newxy(2,3))


var dj = {
    num:929
}

var jubucom = {
    template:'<i @click=" msg++ ">{{ msg }}</i>',
    data:function () {
        return {
            msg:0
        }
    }
}

Vue.component('zipro',{
    template:'<div>' +
    '<h2>我是子组件</h2>' +
    '<slot>没内容时显示</slot>' +
    '</div>'
})

Vue.component('input-com',{
    props:['value'],
    template:'<input type="text" ref="input" :value="value" @input="updateVal($event.target.value)">',
    methods:{
        updateVal:function (val) {
            var formatVal = val.trim().slice(0,val.indexOf('.') === -1?val.length:val.indexOf('.')+3);
            if(formatVal != val){
                this.$refs.input.value = formatVal;
            }
            this.$emit('input',Number(formatVal))
        }
    }
})

Vue.component('licom',{
    props:['titlex'],
    template:'<li>{{ titlex.title }} 　 X</li>'
});
Vue.component('my-com',{
    template:'<span>你好</span>'
});

Vue.component('xy-com',{
    props:['mess'],
    template:'<i>{{ mess }}</i>'
});

Vue.component('xy-com1',{
    props:['mess'],
    template:'<p>{{ mess }}</p>'
});

Vue.component('son-com',{
    template:'<span @click="selfadd">{{ msg }}</span>',
    data:function () {
        return {
            msg:0
        }
    },
    methods:{
        selfadd:function () {
            this.msg ++;
            this.$emit('incre-out');
        }
    }
})
var app = new Vue({
    el:'#app',
    data:{
        show:true,
        price:'',
        total:0,
        xycominput:'',
        lazytest:'',
        aaaa:'真',
        bbbb:'假',
        sele:'',
        radioh:'nan',
        mcheck:[],
        checke:'',
        inputText:'',
        nexttodoid:3,
        todoList1:[
            {id:0,title:'节点一'},
            {id:1,title:'节点2'},
            {id:2,title:'节点3'},
        ],
        items:[
            {id:0,text:'第一'},
            {id:1,text:'第2'},
            {id:2,text:'第三'}
        ],
        redObj:{
            'red':true
        },
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
    components:{
        'my-com':jubucom
    },
    computed:{
        chnCheck:function () {
            if(this.checke){
                return '真'
            }else{
                return '假'
            }
        },
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
        incre:function () {
            this.total+=1 ;
        },
        sayhi:function (txt) {
            alert(txt)
        },
        addNew:function () {
            console.log(this.nexttodoid)
            this.todoList1.push({id:this.nexttodoid++,title:this.inputText})
        },
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
        this.items.push({id:3,text:'第四'})
        console.log(this.a)
    }
});

function dothis() {
    alert(2)
}