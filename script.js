document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Kliknij mnie jezeli mnie Kochasz!';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Twój Pawian też Cie Kocha!');
    });
});