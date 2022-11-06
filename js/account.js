

const acc = () =>{
    let elem1 = document.getElementById("accountmenu")
    let elem2 = document.getElementById("buttsacc")
    elem1.style.left = '10px'
    elem2.style.marginLeft = '90px'
}

const closeacc = () =>{
    let elem1 = document.getElementById("accountmenu")
    let elem2 = document.getElementById("buttsacc")
    elem1.style.left = '-300px'
    elem2.style.marginLeft = '-220px'
}

function movepage (page) {
    window.open(page)
}

const main = () =>{
window.open('main.html')
}

const sub = () =>{
    window.open('buy.html')
}

const ft = () =>{
    window.open('forum.html')
}

const dv = () =>{
    window.open('devlog.html')
}


const cd = () =>{
    window.open('credits.html')
}

const acco = () =>{
    window.open('account.html')
}