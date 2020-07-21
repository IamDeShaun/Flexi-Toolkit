const accordion_button = document.querySelectorAll('.accordion-group .accordion-item button'); 

const all_item = document.querySelectorAll('.accordion-group .accordion-item');

accordion_button.forEach(ele=>{
  ele.addEventListener('click', () => {
    let content = ele.nextElementSibling;
    let active = document.querySelector('.accordion-group .accordion-item.active');
      if (active){
        if(ele.parentElement.classList.contains('active')){
          ele.parentElement.classList.remove('active')
          active.lastElementChild.style.maxHeight = '0';
        } else {
        active.classList.remove('active');
        active.lastElementChild.style.maxHeight = '0';
        ele.parentElement.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        }
      } else {
        ele.parentElement.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
  });
});

(function(w) {
  var sw = document.body.clientWidth,
    sh = document.body.clientHeight;

  $(w).resize(function() {
    //Update dimensions on resize
    sw = document.body.clientWidth;
    sh = document.body.clientHeight;

    //updateAds();
  });

  //Navigation toggle
  $('.nav-toggle-menu').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
  });

  //Navigation toggle
  $('.nav-toggle-search').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header .search-form').toggleClass('active');
  });
})(this);
