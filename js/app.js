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
    
    
    
    
    });
     