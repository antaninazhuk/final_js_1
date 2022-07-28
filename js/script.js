const header = document.querySelector('header');
window.addEventListener('scroll', function(e) {
    const scrollFromTop = document.querySelector('html').scrollTop;
    header.style.backgroundColor = scrollFromTop > header.offsetHeight ? '#7D604B' : '#fff';

})

const button = document.querySelector('.learn-more');

button.addEventListener('click', async function(e) {
    try {

        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        let result = await response.json();
        let text = document.createElement('div');
        text.innerHTML = JSON.stringify(result);
        this.after(text);
    } catch (error) {
        console.error(error);
        this.errorMessage = error.errorMessage;
    }

})

const buttonOne = document.querySelector('.button-one');
const buttonTwo = document.querySelector('.button-two');

buttonOne.addEventListener('click', function(e) {
    buttonOne.classList.add('active-button-learn-more');
    buttonTwo.classList.remove('active-button-learn-more');
})

buttonTwo.addEventListener('click', function(e) {
    buttonTwo.classList.add('active-button-learn-more');
    buttonOne.classList.remove('active-button-learn-more');
})