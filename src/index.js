console.log("Hello world")

import "./style.css";
import Image from './jakub-zerdzicki--YuZOVdj3js-unsplash.jpg';
import {menuTab} from './menu.js';
import {contactTab} from './contact.js';

document.getElementById('home').addEventListener('click', homeTab);
document.getElementById('menu').addEventListener('click', menuTab);
document.getElementById('contact').addEventListener('click', contactTab);


//on opeining the page the home tab will be displayed
homeTab();

function homeTab()  {
    
    //checks if the div#main exist and removes it when switching between the tabs
    if(document.getElementById('main') != null){
        document.getElementById('main').remove();
    };

    //creating and appending div.main
    const divContent = document.getElementById('content');
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'main');
    divContent.appendChild(mainDiv);

    //creating first paragraph
    const firstPara = document.createElement('p')
    firstPara.textContent = 'Best Pierogi in London'

    //creating second paragraph
    const secondPara = document.createElement('p');
    secondPara.textContent = 'Home made with passion since 2025';

    //appending paragraphs
    mainDiv.appendChild(firstPara);
    mainDiv.appendChild(secondPara);

    //creating and adding picture
    const dumplingImage = document.createElement('img');
    dumplingImage.setAttribute('id', 'home-made');
    dumplingImage.src = Image;
    dumplingImage.setAttribute('alt','home made dumplings')
    mainDiv.appendChild(dumplingImage);
}


