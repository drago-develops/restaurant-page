

export const menuTab = function() {

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
    firstPara.textContent = 'Pierogi type 1'

    //creating second paragraph
    const secondPara = document.createElement('p');
    secondPara.textContent = 'Pierogi type 2';

    //appending paragraphs
    mainDiv.appendChild(firstPara);
    mainDiv.appendChild(secondPara);
}