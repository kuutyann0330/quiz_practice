document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navUl = document.getElementById('nav_ul');
  
    if (hamburgerMenu && navUl) {
      hamburgerMenu.addEventListener('click', function() {
        // is-activeクラスを付け外しする
        hamburgerMenu.classList.toggle('is-active');
        navUl.classList.toggle('is-active');
      });
    }
  });