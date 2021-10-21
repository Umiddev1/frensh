let SiteNav = document.querySelector('.nav');
let SiteBtn = document.querySelector('.site-header__btn');

SiteBtn.addEventListener("click", () =>  {
  SiteNav.classList.toggle('show');
})
