/////////////////////////////////
/////////////////////////////////
/////////////////////////////////


let foodList = document.getElementById("random-restaurant-list");





function clearFood() {
    foodList.innerHTML = ` `
}

const getRandom = () => {
    clearFood();
    foodList.textContent = "Try this place: " + ["Maccas", "Wendy's", "BK"][Math.floor(Math.random() * 3)];
}



document.getElementById("food-btn").addEventListener("click", getRandom);