class Finish {
  
  constructor(data) {
    Object.assign(this, data)
  }
  
  
  getFinishHTML(likedDogs) {
    let getEndhHTML = likedDogs.map(dog => {
      return `
      <div class="liked-dog">
      <img src="${dog.avatar}"/>
      <h3>${dog.name}</h3>
      </div>`
  }).join("")
  
  return `    
   
  <h3>You liked them</h3>
  <div class="grid">${getEndhHTML}</div>
  `
  }

  ifDogClicked(target) {   
    return `<div class="message">
      <div class="message-avatar">${target.innerHTML}</div> 
      <input id="textarea-message" placeholder="Do your first move"/>
    </div>`  
  }

  ifInputClicked(message) {
    
    return `<h3>Your friend will receive the next message:</h3><p>"${message}"</p>`
  }

}

export default Finish
