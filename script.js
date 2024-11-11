// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=

const imgBox = document.querySelector("#imgBox")
const qrImage = document.querySelector("#qrImage")
const qrInput =  document.querySelector("#qrInput")
const genBtn = document.querySelector("#genBtn")

genBtn.addEventListener("click",(e)=>{
    if(qrInput.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value
    }
})  