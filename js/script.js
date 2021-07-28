console.clear();

const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
};

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass)){
    element.classList.remove(stringClass);
    setTimeout(function () {
      element.classList.add('hidden');
    }, 1000);
    }else{

    // element.classList.add(stringClass);
    element.classList.remove('hidden');
    setTimeout(function () {
      element.classList.add(stringClass);
    }, 20);
  }
  };

  init();
})();

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#profile');
  var offset = startchange.offset();
  var windowWidth = window.innerWidth;
  if (windowWidth < 768){
    if (startchange.length){
        $(document).scroll(function() { 
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $("nav").css('background-color', 'rgb(0,0,0, 0.5)');
            } else {
                $('nav').css('background-color', 'transparent');
            }
        });
    }
  }
});