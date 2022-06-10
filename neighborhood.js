/////////////////////////////////
/////////////////////////////////
/////////////////////////////////



const myRandom = () => {
    let result = ["Maccas", "Wendy's", "BK"][Math.floor(Math.random() * 3)]
    alert(`${result}`)
}

document.getElementById("food-btn").addEventListener("click", myRandom)