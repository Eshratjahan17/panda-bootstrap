//h3 color change
const headers = document.getElementsByTagName('h3');
for (const header of headers) {
    header.style.color = 'hotpink';

}
//bagpack background color change

const bagSection = document.getElementById('bagpack');
bagSection.style.backgroundColor = 'PapayaWhip';

//cards border radius change
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.border = '2px solid red'
    card.style.borderRadius = '30px ';
}
//consol log in submit button
function submitBtn() {
    console.log('clicked on submit button');
}
//deleteing buy now button
const buyNow = document.getElementById('buy-now');

buyNow.addEventListener('click', function() {
    buyNow.style.display = 'none';

})

//submit button activeted

const submitButton = document.getElementById('submit-btn');
const inputBox = document.getElementById('email');
inputBox.addEventListener('keyup', function(event) {
        if (event.target.value == 'email') {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', true);
        }

    })
    // mouseenter img change

function changeImg() {
    const redShoe = document.getElementById('red-shoe');
    redShoe.src = 'images/shoes/shoe-1.png';
}

function changeImg2() {
    const redShoe = document.getElementById('red-shoe');
    redShoe.src = "images/shoes/shoe-3.png";

}
// on doubleclick background change

function doubleClick() {
    const subscribe = document.getElementById('subscribe');
    subscribe.style.backgroundColor = 'SkyBlue';
}