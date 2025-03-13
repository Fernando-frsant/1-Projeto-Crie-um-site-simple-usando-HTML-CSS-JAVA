# 1-Projeto-Crie-um-site-simple-usando-HTML-CSS-JAVA
Criei um site interativo usando comandos de HTML/CSS/JAVA.

html
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Simple website</title>
    <link rel="stylesheet" href="main.css">
</head>
<body class="light-theme"></body>
    <h1>Task List</h1>
    <p id="msg">Current tasks:</p>
    <ul>
    <li class="list">Add visual styles</li>
    <li class="list">Add light and dark themes</li>
<li>Enable switching the theme</li>
</ul>  
<div>
    <button class="btn" onclick="toggleTheme()">dark</button> 
    </div> 
<script src="app.js"></script>
<noscript>You need to enable Javascript to view the full site</noscri4pt>

</body>

</html>

css:

:root {
    --green: chartreuse; 
    --white: white; 
    --black: black; 
    --bg: var(--white); 
    --fontcolor: var(--black); 
}

body {
    font-family: monospace;
    background: var(--bg); 
}

ul {
    font-family: Helvetica;
}

li {
    list-style: circle;
}

.list {
    list-style: square;
}

:root {
    --green: chartreuse;
    --white: white;
    --black: black;
    --bg: var(--white);
    --fontcolor: var(--black);
    --btnbg: var(--black);
    --btnfontcolor: var(--white);

.light-theme {
    --bg: var(--green); 
    --fontcolor: var(--black); 
    color: var(--fontcolor); 
    background-color: var(--bg); 
}

.dark-theme {
    --bg: var(--black); 
    --fontcolor: var(--green); 
    color: var(--fontcolor); 
    background-color: var(--bg); 
}
.btn {
    color: var(--btnfontcolor);
    background-color: var(--btnbg);
    }
.btn {
    position: absolute;
    top: 20px;
    left: 250px;
    height: 50px;
    width: 50px;
    border-radius:50%;
    border: none;
    color: var(--btnfontcolor);
    background-color: var(--btnbg);
   }
   .btn:focus {outline-style: none;}

   .light-theme {
   --bg: var(--green);
   --fontColor: var(--black);
   --btnBg: var(--black);
   --btnFontColor: var(--white);
}

   .dark-theme {
    --bg: var(--black);
    --fontcolor: var(--green);
    --btnbg: var(--white);
    --btnfontcolor: var(--black);   
   }  

   JS

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
