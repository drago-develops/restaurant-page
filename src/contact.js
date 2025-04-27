
export const contactTab = function() {
    
    //checks if the div#main exist and removes it when switching between the tabs
    if(document.getElementById('main') != null){
        document.getElementById('main').remove();
    };

    //creating and appending div.main
    const divContent = document.getElementById('content');
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'main');
    divContent.appendChild(mainDiv);

    //creating first headline and paragraph
    const firstHeadline = document.createElement('h1');
    firstHeadline.textContent = 'Phone';
    const firstPara = document.createElement('p');
    firstPara.textContent = '020 1234 1234';

    //creating second paragraph
    const secondHeadline = document.createElement('h1');
    const secondPara = document.createElement('p');
    secondHeadline.textContent = 'Address'
    secondPara.textContent = 'Some address';

    //appending paragraphs
    mainDiv.appendChild(firstHeadline);
    mainDiv.appendChild(firstPara);
    mainDiv.appendChild(secondHeadline);
    mainDiv.appendChild(secondPara);
};