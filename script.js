document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Kliknij mnie jezeli mi nie wierzysz!';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('https://www.nordnet.no/market/stocks/16105714-grieg-seafood');
    });
});