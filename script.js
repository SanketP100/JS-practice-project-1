var main = document.querySelector('main')
var bulb = document.querySelector('#bulb')
var btns = document.querySelector('#buttons')

var flag = 0
btns.addEventListener('click', dtl => {


    if (dtl.target.id === "onBtn") {

        if (flag == 0) {
            console.log('on btn');
            bulb.style.backgroundColor = 'rgb(224, 186, 104)'
            bulb.style.boxShadow = `0px 0px 100px rgb(224, 186, 104)`
            main. style.backgroundColor = 'rgb(15, 15, 14)'
            dtl.target.style.boxShadow = `0px 20px 5px #222020`
            flag = 1
            dtl.target.innerHTML = "OFF"

        } else {
            console.log('off btn');
            bulb.style.backgroundColor = 'transparent'
            bulb.style. boxShadow = `none`
            main. style.backgroundColor = '#000'
            dtl.target.innerHTML = "ON"
            dtl.target.style.boxShadow = `none`
            flag = 0
        }

    }

})