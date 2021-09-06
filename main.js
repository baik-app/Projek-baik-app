conts;call = document.getElementById('panggil') 

function callNumber(num) {
    call.innerHTML ='Panggil'
    console.log(num)
    let textCall = call.innerHTML
    call.innerHTML = `${textCall} ${num}`
    call.setAttribute('href', `tel:${num}`)
}