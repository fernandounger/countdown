const hoursLaunch = document.querySelector('h2')

function updateTimer() {
    const date = new Date();
    const dateTime = new Intl.DateTimeFormat('pt-BR', { 
        day : 'numeric' , hour : 'numeric', minute : 'numeric' , second : 'numeric'
    }).format(date);
    hoursLaunch.innerHTML = `${dateTime.replace(' ' , ':')}`;
}

setInterval(updateTimer, 1000)
