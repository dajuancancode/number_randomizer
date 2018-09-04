const quoteContainer = document.querySelector('.quote');
const authorContainer = document.querySelector('.author');
const newQuote = document.querySelector('.newQuote');
const mainBackground = document.querySelector('main');
const headLine = document.getElementsByTagName('h1')[0];
const tweetButton = document.querySelector('.tweet');

let viewedNumbers = [];

let randomColorGenerator = () => {
    let randomColor;
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let orange = Math.floor(Math.random() * 256);
    randomColor = 'rgb(' + red + ',' + blue + ',' + orange + ')';
    return randomColor;
  }

let randomNum = () => Math.floor(Math.random() * (numbers.length));
let randomNumber = () => {
    if(numbers.length === 0){
        numbers = viewedNumbers;
        viewedNumbers = [];
    }
        
    i = randomNum()

    quoteContainer.textContent = numbers[i];
    quoteContainer.style.color = 'white';

    let splicedNumber = numbers.splice(i, 1)[0];
    viewedNumbers.push(splicedNumber);
};

newQuote.addEventListener('click', () => {
    mainBackground.style.backgroundColor = randomColorGenerator();
    headLine.style.color = 'white';
    randomNumber();
    
});