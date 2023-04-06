import dogs from "/data.js"
import Dog from "/Dog.js"
import Finish from "/Finish.js"

let isWaiting = false
let nextDogData = [...dogs]
const likedDogs = []


function getNewDog() {
  nextDogData = dogs.shift()
  return nextDogData ? new Dog(nextDogData) : ""
}


function render() {  
  if(dog) {
    document.getElementById("dog_card").innerHTML = dog.getDogHTML()
    reactionsRender()
  }else {
   document.querySelector(".dog_card__main").innerHTML =  finish.getFinishHTML(likedDogs)
   document.querySelector(".dog_card__main").style.textAlign = "center"
   document.querySelector(".dog_card__main").style.marginTop = "30%"
   document.querySelector(".dog_card__footer").innerHTML = ""  
   document.querySelector(".grid").addEventListener("click", function(e) {
    document.querySelector(".dog_card__main").innerHTML =  finish.ifDogClicked(e.target.closest("div.liked-dog"))
    document.querySelector(".dog_card__main").style.marginTop = "0"
   
   })
   document.querySelector(".dog_card__main").addEventListener("keypress", function(e){
    if(e.key == "Enter" && e.target.id == "textarea-message"){
      document.querySelector(".dog_card__main").style.marginTop = "50%"
      document.querySelector(".dog_card__main").innerHTML = finish.ifInputClicked(e.target.value)
    }
   })
  }
}

let dog = getNewDog()
let finish = new Finish(likedDogs)

render()


function reactionsRender() {
  if(isWaiting == false) {
    document.querySelector(".accept_btn").addEventListener("click", function() {
      dog.hasBeenLiked = true
      likedDogs.push(dog)
      dog.likeCheck( dog.hasBeenLiked)
      setNextDog()
      render()
      isWaiting = false
    })
    document.querySelector(".reject_btn").addEventListener("click", function() {
     dog.hasBeenSwiped = true
      dog.likeCheck(dog.hasBeenSwiped)
      setNextDog()
      render()
      isWaiting = false
    })
  }
}

function setNextDog() {
  if(dog.hasBeenLiked || dog.hasBeenSwiped) {
    isWaiting = true
    setTimeout(() => {
      dog = getNewDog()
      render()
    }, 1000)
  }     
}






