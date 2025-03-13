'use strict';

const switcher = document.querySelector('.btn');


switcher.addEventListener('click', function toggleTheme() {
    
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme'); // Garante a alternância entre os temas

    
    if (document.body.classList.contains('dark-theme')) {
        switcher.textContent = 'LIGHT'; 
    } else {
        switcher.textContent = 'DARK'; 
    }

    
    console.log('Current class name: ' + document.body.className);
});