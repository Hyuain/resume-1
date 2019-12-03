let html = document.querySelector('#html')
let style = document.querySelector('#style')

let string = `
/* 您好，我叫张钰海
 * 接下来我将写一个 html 页面
 * 首先我要准备一个 div
 **/
#div1 {
    border: 1px solid red;
    width: 400px;
    height: 400px;
}
/* 接下来我把 div 变成一个太极图
 * 看好了哦
 * 首先把 div 变成一个圆
 **/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    border: none;
}
/* 太极图以一条曲线将圆形分为两半
 * 形成一半白一半黑
   白者像阳，黑者像阴
 **/
#div1 {
    background: linear-gradient(
        90deg, rgba(255,255,255,1) 0%,
        rgba(255,255,255,1) 50%,
        rgba(0,0,0,1) 50%,
        rgba(0,0,0,1) 100%);
}
/* 阳中有阴，阴中有阳
 * 分开的两半，酷似两条鱼
 * 所以俗称阴阳鱼
 **/
#div1::before {
    width: 200px;
    height: 200px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgb(0,0,0);
    background: radial-gradient(
        circle,
        rgba(0,0,0,1) 0%,
        rgba(0,0,0,1) 25%,
        rgba(255,255,255,1) 25%,
        rgba(255,255,255,1) 100%);
    border-radius: 50%;
}
#div1::after {
    width: 200px;
    height: 200px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgb(255,255,255);
    background: radial-gradient(
        circle,
        rgba(255,255,255,1) 0%,
        rgba(255,255,255,1) 25%,
        rgba(0,0,0,1) 25%,
        rgba(0,0,0,1) 100%);
    border-radius: 50%;
}
`
let string2 = ''
let n = 0

let step = () => {
    if (n < string.length) {
        setTimeout(() => {
            // 如果是回车就在string2上加<br>，如果不是回车就照搬
            if (string[n] === '\n') {
                string2 += '<br>'
            } else if (string[n] === ' ') {
                string2 += '&nbsp'
            } else {
                string2 += string[n]
            }
            html.innerHTML = string2
            style.innerHTML = string.substring(0, n + 1)
            n++
            window.scrollTo(0,99999)
            html.scrollTo(0,99999)
            step()
        }, 50)
    }
}

step()

