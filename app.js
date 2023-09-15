// Hide Cards
const showCommentsBtn = document.querySelector('.comments-btn');
const hideCommentsBtn = document.querySelector('.hide_comments-btn');

const showLikesBtn = document.querySelector('.likes-btn');
const hideLikesBtn = document.querySelector('.hide_likes-btn');

const cardMain = document.querySelector('.container-main_post');
const cardComments = document.querySelector('.container-main_comments');
const cardLikes = document.querySelector('.container-main_likes');

showCommentsBtn.addEventListener('click', () => {
  cardMain.classList.add('hidden');
  cardComments.classList.remove('hidden')
})

hideCommentsBtn.addEventListener("click", () => {
  cardMain.classList.remove("hidden");
  cardComments.classList.add("hidden");
});

showLikesBtn.addEventListener('click', () => {
  cardMain.classList.add('hidden');
  cardLikes.classList.remove('hidden')
})

hideLikesBtn.addEventListener("click", () => {
  cardMain.classList.remove("hidden");
  cardLikes.classList.add("hidden");
});