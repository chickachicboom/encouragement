let quoteEl = document.getElementById("quote-el")
let imgEl = document.getElementById("img-el")

let quotes1 = ["สู้ๆ!", "เก่งที่สุด!", "อย่าลืมกินข้าว!", "กอดๆ กัน!", "ทำงานสู้ๆ!", "ขับรถดีๆ นะ!", "อย่าลืมกินยา!", "นั่งพักบ้าง!"]
let quotes2 = ["sending hug!", "cheer up!", "proud of u!", "don't give up!", "stay strong!", "you got this!", "slay!", "killing' it!"]

let imgs = [
    "img/appel.png",
    "img/banene.png",
    "img/daisi.png",
    "img/giff.png",
    "img/gyao.png",
    "img/onikiri.png",
    "img/pao.png",
    "img/zuzi.png"
]

function random1() {
    quoteEl.textContent = quotes1[Math.floor(Math.random() * quotes1.length)]
    imgEl.src = imgs[Math.floor(Math.random() * imgs.length)]
}

function random2() {
    quoteEl.textContent = quotes2[Math.floor(Math.random() * quotes2.length)]
    imgEl.src = imgs[Math.floor(Math.random() * imgs.length)]
}