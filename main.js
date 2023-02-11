let d = document.getElementsByClassName("arrow")

function aa () {
    for (let i = 0; i < d.length ; i++) {
        document.getElementsByClassName("l")[i].onclick = function () {
            document.getElementsByClassName("arrow")[i].classList.toggle("r")
            document.getElementsByClassName("a1")[i].classList.toggle("block")
        }
    }
}

console.log(d.length)
aa()

setInterval(function() {
    console.log(document.querySelector(".a1").classList)
}, 300)