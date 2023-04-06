class Dog {
  constructor(data) {
    Object.assign(this,data)
  }

  likeCheck(checkLike, checkSwipe) {
    if(checkLike) {
      return `<img
      class="bage bage-like"
      src="images/badge-like.png"
      alt=""
      srcset=""
    />`
    }else if(checkSwipe) {
      return ` <img
      class="bage bage-nope"
      src="images/badge-nope.png"
      alt=""
      srcset=""
    />`
    }else {
      return ""
    }
  }


  getDogHTML() {
    const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
    const getBageHTML = this.likeCheck(hasBeenLiked, hasBeenSwiped)

    return `
      <div class="dog_card__header">
          <a href="" class="header_icon"
            ><img src="images/icon-profile.png" alt="" srcset=""
          /></a>
          <a class="paw header_icon"
            ><img src="images/logo.png" alt="" srcset=""
          /></a>
          <a href="" class="header_icon"
            ><img src="images/icon-chat.png" alt="" srcset=""
          /></a>
        </div>
        <div class="dog_card__main">
          <img
            class="dog_img"
            src="${avatar}"
            alt=""
            sizes=""
            srcset=""
          />
          <div class="dogs_info">
            <h2>${name}, ${age}</h2>
            <p class="bio">${bio}</p>
          </div>       
         ${getBageHTML}
        </div>
        <div class="dog_card__footer">
          <button class="reactions reject_btn">
            <img src="images/nope-icon.png" alt="" />
          </button>
          <button class="reactions accept_btn">
            <img src="images/like-icon.png" alt="" srcset="" />
          </button>
        </div>
      `
    }

   
}


export default Dog