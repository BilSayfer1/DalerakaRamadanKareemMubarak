let btn = document.querySelector('#check')

btn.onclick = () => {
    addd()
}
function addd() {
    let inputValue = document.querySelector('input').value.trim();
    if (inputValue === '') {
        return;
    }

    let obshiyDiv = document.createElement('div');
    obshiyDiv.classList.add('obshiy');

    let nizDiv = document.createElement('div');
    nizDiv.classList.add('niz');

    let closeDiv = document.createElement('div');
    closeDiv.classList.add('close');

    let imgElement = document.createElement('img');
    imgElement.src = './img/38-381706_small-close-button-small-icon.png';
    imgElement.alt = '';

    closeDiv.appendChild(imgElement);

    let textDiv = document.createElement('div');
    textDiv.classList.add('text');

    let hElement = document.createElement('h4');
    hElement.textContent = inputValue;

    textDiv.appendChild(hElement);

    let timeDiv = document.createElement('div');
    timeDiv.classList.add('time');
    timeDiv.textContent = gettime();

    nizDiv.appendChild(closeDiv);
    nizDiv.appendChild(textDiv);
    nizDiv.appendChild(timeDiv);
    obshiyDiv.appendChild(nizDiv);
    document.body.appendChild(obshiyDiv);
}

function gettime() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    return hours + ':' + minutes;
}
