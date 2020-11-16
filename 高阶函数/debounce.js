// 函数防抖 ，在规定时间内重复触发函数只执行最后一次

function debounce(fn, wait, ...args) {
    let timer = null;
    return () => {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}