/*
    类型	    例子	    描述
    number	1, -33, 2.5	任意数字
    string	'hi', "hi", hi	任意字符串
    boolean	true、false	布尔值true或false
    字面量	其本身	限制变量的值就是该字面量的值
    any	*	任意类型
    unknown	*	类型安全的any
    void	空值（undefined）	没有值（或undefined）
    never	没有值	不能是任何值
    object	{name:'孙悟空'}	任意的JS对象
    array	[1,2,3]	任意JS数组
    tuple	[4,5]	元素，TS新增类型，固定长度数组
    enum	enum{A, B}	枚举，TS中新增类型
* */

/*
* ts变量 number使用
* number	1, -33, 2.5	任意数字
* */
function number():number {
    let a:number = 100;
    return  a = a +1
}

console.log("test variable number",number())


/*
    string	'hi', "hi", hi	任意字符串
*/
function string():[string,string] {
    let str,str1 :string
    str = "str is a string"
    str1 = 'str1 declare'
    return [str,str1]
}
console.log("test variable string",string())


/*
    boolean	true、false	布尔值true或false
*/
function boolean(a,b:number):boolean{
    return a > b;
}

console.log("a=10,b=9 a>b is:",boolean(10,9))



/*
    字面量	其本身	限制变量的值就是该字面量的值
*/
function constVar() {
    let a:number
    let b:string
    a = 10
    b = "str1"

    // c 字面量
    let c:1|2|"str"|true;

    let d: boolean | string;

    console.log(a,b,c=2)
}
constVar()


/*
   any	*	任意类型

   any 表示的是任意类型，一个变量设置类型为any后
   相当于对该变量关闭了TS的类型检测

    充当接口类型
*/
function any():any {
    let a :any
    a = "11"
    a = 90

    let b :number
    b = 100


    // 声明变量如果不指定类型，则TS解析器会自动判断
    // 变量的类型为any （隐式的any）
    let d;
    d = 10;
    d = 'hello';
    d = true;

    return a
}
any()



/*
    unknown	*	类型安全的any
        // unknown 实际上就是一个类型安全的any
    // unknown类型的变量，不能直接赋值给其他变量
*/
function unknownFunc() {
    let e: any;
    e = 10;
    e = "hello";
    e = true;

    let s: number;

    if (typeof e === "string" && !isNaN(parseInt(e))) {
        s = parseInt(e);
    }

    console.log(s); // 输出: NaN，因为 "hello" 无法转换为数字
}

unknownFunc();



/*
    void	空值（undefined）	没有值（或undefined）
*/
function fnVoid(): void{
    console.log("no value return")
}
fnVoid()

/*
    never	没有值	不能是任何值
*/
function fnNever(): never{
    console.log("never!!!")
    throw new Error('报错了！');
}
//fnNever()


/*
    object	{name:'孙悟空'}	任意的JS对象
*/
/*
*   设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
*
*   let d: (a: number ,b: number)=>number;
    d = function (a: number, b: number): number{
        return a+b;
}
* */
function varObj1() {
    // object表示一个js对象
    let a: object;
    a = {};
    a = function(a, b) {
        return a + b;
    };
    // @ts-ignore

    // 在 TypeScript 中，object 类型的变量不能被调用，
    // 因此在调用 a() 时会报错。
    let result = a(1, 2);
    console.log("log varObj1",result);
}
varObj1()

function varObj2() {
    let obj: (a: number, b: number) => number;

    obj = function(a, b) {
        return a + b;
    };

    let result = obj(1, 2);

    console.log("log varObj2\n",result);
}
varObj2()


/*
{} 用来指定对象中可以包含哪些属性
语法：{属性名:属性值,属性名:属性值}
在属性名后边加上?，表示属性是可选的
* */
function varObj3() {
    let a: {name: string, age: number};
    a = {name: '孙悟空', age: 18};


    let b: {name: string, age: number};
    //b = {name: '孙悟空'};


    let c: {name: string, age?: number};
    c = {name: '孙悟空'};


    let e: {name: string, age?: number|string};
    e = {name: '孙悟空',age:11};

    let f: {name: string, age?: number|string};
    f = {name: '孙悟空',age:"age"};

    console.log(a,c,e,f)
}
varObj3()

/*
* [propName: string]: any 表示任意类型的属性
* */
function varObj4():object {
    let c: {name: string, [propName: string]: any};
    c = {name: '猪八戒', age: 18, gender: '男',sex:1};
    return c
}


/*
    array	[1,2,3]	任意JS数组

    *   数组的类型声明：
*       类型[]
*       Array<类型>
*/
function varArray() {
    // string array
    let strs: string[];
    strs = ['a', 'b', 'c'];
    console.log("array of string strs:",strs)

    // number[] 表示数值数值
    let f: number[];
    f = [1,2,3,4,1]
    console.log("array of number f:",f)


    let g: Array<number>;
    g = [1,2,3,4,1]
    console.log("array of number g:",g)

    let as: Array<string>
    strs = ['a', 'b', 'c'];
    console.log("array of string as:",strs)

}
varArray()



/*
    tuple	[4,5]	元素，TS新增类型，固定长度数组
*       元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
*/

function varTuple() {
    let a: object;
    a = {};
    a = function(a, b) {
        return a + b;
    };

    let h: [string, number,object?];
    h = ['hello', 123];
    console.log("tuple h:",h,varObj4())
}
varTuple()


/*
    enum	enum{A, B}	枚举，TS中新增类型

* */

function varEnum() {
    enum Gender{
        Male,
        Female
    }

    let i: {name: string, gender: Gender};
    i =  {name: '猪八戒',  gender: 1};

    console.log("varEnum:",i)
}
varEnum()

/*
* 类型断言
*
* */
function varTypeConvert() {
    let v1 :unknown = "10"
    console.log(    (<string>v1).length)
}
varTypeConvert()
