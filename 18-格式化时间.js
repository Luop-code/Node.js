//定义格式化时间的函数
function dateFormat(dtStr) {
    const dt = new Date(dtStr)
    const y = padZero(dt.getFullYear())
    const m = padZero(dt.getMonth() + 1)  //月份从0到11，要+1
    const d = padZero(dt.getDate())

    const hour = padZero(dt.getHours())
    const min = padZero(dt.getMinutes())
    const sec = padZero(dt.getSeconds())

    return `${y}-${m}-${d}-${hour}-${min}-${sec}`
}

//定义补零的函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}


module.exports = {
    dateFormat
}