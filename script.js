
const switchWitget = document.getElementById('toggle-1');
const switchWitgetStatus = document.getElementsByClassName('switch__status-message')[0];

switchWitget.addEventListener('click', (e) => {
    const isSwitchOpened = e.target.checked;

    e.target.setAttribute('aria-checked', isSwitchOpened);
    switchWitgetStatus.textContent = (isSwitchOpened) ? 'Online' : 'Offline';
});
