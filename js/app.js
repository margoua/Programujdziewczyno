'use strict';

document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
    
    var forDropdown = document.querySelector('.for-dropdown');
        console.log(forDropdown);
    var menu = document.querySelector('.dropdown');
        console.log(menu);
    
    
   function ChangeDisplayToBlock(){
        menu.style.display = 'block';
   }
    
   function ChangeDisplayToNone(){
        menu.style.display = 'none';
   }
    
    //forDropdown.addEventListener('mouseover', function(){
        //menu.style.display = 'block';
    //});
    
    //forDropdown.addEventListener('mouseout', function(){
        //menu.style.display = 'none';
   // });
    
    forDropdown.addEventListener('mouseover', ChangeDisplayToBlock);
    forDropdown.addEventListener('mouseout', ChangeDisplayToNone);
    
    
  var buttons = document.querySelectorAll('.read-more');

  function showHide() {

    var textArea = this.previousElementSibling;
   
    if (textArea.style.display === 'none' || textArea.style.display === '') {
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
      textArea.style.display = 'none';
      this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
  }

  var pasek = document.querySelector('nav');
    
  window.addEventListener('scroll', function(){
      pasek.style.borderBottom = '1px solid #7f7f7f';
  })
    
    
  var powrot = document.querySelector('.btn');
    powrot.addEventListener('click', function(){
        console.log('klik');
    })

    
    });
     