const Button = document.querySelector('button');

Button.addEventListener('click', () => {
    console.log("hello");
    const audio = new Audio('song.mp3');
    audio.play();
})


// We can store the value entered in the form by local storage
// It will add a advantage that text already written even when page refreshed

window.addEventListener('load', () => {
    const essayInput = document.getElementById('essay');
    essayInput.value = localStorage.getItem('key_essay')
})

const essayInput = document.getElementById('essay');

essayInput.addEventListener('change', () => {
    localStorage.setItem('key_essay', essayInput.value)
})

// 