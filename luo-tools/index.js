//定义格式化时间的函数
function dateFormat(dtStr) {
    const dt = new Date(dtStr)
    const y = padZero(dt.getFullYear())
    const m = padZero(dt.getMonth() + 1)  //月份从0到11，要+1
    const d = padZero(dt.getDate())

    const hour = padZero(dt.getHours())
    const min = padZero(dt.getMinutes())
    const sec = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hour}:${min}:${sec}`
}

//定义补零的函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}



//定义转义 HTML 字符的函数

function htmlEscape(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

//定义还原HTML字符的函数
function htmlUnEscape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
        switch (match) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

//向外暴露需要的成员
module.exports = {
    dateFormat,
    htmlEscape,
    htmlUnEscape
}