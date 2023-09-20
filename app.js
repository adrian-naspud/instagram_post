import { userData } from "./users.js";

// Hide Cards
const showCommentsBtn = document.querySelector('.comments-btn');
const hideCommentsBtn = document.querySelector('.hide_comments-btn');

const showLikesBtn = document.querySelector('.likes-btn');
const hideLikesBtn = document.querySelector('.hide_likes-btn');

const cardMain = document.querySelector('.container-main_post');
const cardComments = document.querySelector('.container-main_comments');
const cardLikes = document.querySelector('.container-main_likes');


// like button
const likesIcon = document.querySelectorAll(".fa-regular.fa-heart");

likesIcon.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("fa-regular");
    like.classList.toggle("fa-solid");
  });
});

// bookmark button 
const bookmarkIcon = document.querySelectorAll(".fa-regular.fa-bookmark");

bookmarkIcon.forEach((book) => {
  book.addEventListener("click", () => {
    book.classList.toggle("fa-regular");
    book.classList.toggle("fa-solid");
  });
});



// Comments
hideCommentsBtn.addEventListener("click", () => {
  cardMain.classList.remove("hidden");
  cardComments.classList.add("hidden");
});

showCommentsBtn.addEventListener('click', () => {
  cardMain.classList.add('hidden');
  cardComments.classList.remove('hidden')

  // Populate comments
  let commentsHTML = "";
  userData.forEach((comment) => {
    const { profilePicture, username, comment: commentText } = comment;
    commentsHTML += `
    <div class="comment_single-container">
      <img src="${profilePicture}" alt="" srcset="" class="profile-photo">
      <div class="comment_single-text">
        <p class="comment_single-user">${username}</p>
        <p class="comment_single-text">${commentText}</p>
      </div>
    </div>
    `
  });
  const commentsSection = document.querySelector('.comments-section');
  commentsSection.innerHTML = commentsHTML;

})
console.log(userData);
// number of comments
const numComments = document.querySelector(".number-of-comments")
const commentCount = userData.filter(item => item.username !== '').length;// there has to be a better way to count
numComments.innerHTML = commentCount;

// lIKES
hideLikesBtn.addEventListener("click", () => {
  cardMain.classList.remove("hidden");
  cardLikes.classList.add("hidden");
});

showLikesBtn.addEventListener('click', () => {
  cardMain.classList.add('hidden');
  cardLikes.classList.remove('hidden');

  // Populate likes
  let likesHTML = "";
  userData.forEach((like) => {
    const { profilePicture, username } = like;
    likesHTML += `
      <div class="likes_single-container">
        <div class="likes_single-container-left">
          <img src="${profilePicture}" alt="" srcset="" class="profile-photo">
          <p class="comment_single-user">${username}</p>
        </div>
            <button class="follow-btn">Follow</button>
      </div>    
      `
  });
  const likesSection = document.querySelector('.likes-section');
  likesSection.innerHTML = likesHTML
});

// number of likes 
const numLikes = document.querySelector(".and")
const likesCount = userData.filter(item => item.likedPost === true).length;// there has to be a better way to count
numLikes.innerHTML = `and ${likesCount}`;