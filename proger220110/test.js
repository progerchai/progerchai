import '@babel/polyfill'

const fn = () => {
    console.log(12345)
}


new Promise(() => { })

class Test { }

const b = [1, 2, 3].includes(1)