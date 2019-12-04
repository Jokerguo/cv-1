let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/*你好，我叫郭东生
 * 接下来 我演示一下我的前端功底
 * 首先要准备一个div
*/
#div{
    border : 1px solid red;
    width : 200px;
    height : 200px;
}
/*
 * 接下来我要将它变成一个太极
 * 注意看好了
 * 首先要将它变成一个圆
*/
#div{
    border-radius : 50%;
    box-shadow : 0 0 3px rgba(0,0,0,0.5);
    border : none;
}
/*
 * 太极是阴阳
 * 一黑一白
*/
#div{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*现在给太极加上重要的一部分*/
#div::before{
    width : 100px;
    height : 100px;
    top : 0px;
    left : 50%;
    transform : translateX(-50%);
    border-radius : 50%;
    background : #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div::after{
    width : 100px;
    height : 100px;
    bottom : 0px;
    left : 50%;
    transform : translateX(-50%);
    border-radius : 50%;
    background : #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
string2 = ''
let n = 0
let step = () => {
    setTimeout(() => {
        //判断字符是不是空格，是就改成<br>
        //不是就照抄
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp;'
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0,99999);
        html.scrollTo(0,99999)
        if (n < string.length - 1) {
            n += 1
            step()
        }
    }, 50)
}
step()

