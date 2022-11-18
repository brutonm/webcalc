document.addEventListener('DOMContentLoaded', () => {
    console.log('secret message');
});


const clickme = (e) => {
   // alert('You dare write that, mortal');
   
   for (let i = 1; i <= 5; i++) {
    logNumbers(i, 12);
   }
};

const logNumbers = (multiplier, maxMultiplier) => {
    let x = '';
    for (let m = 1; m <= maxMultiplier; m++) {
        let b = multiplier * m;
        x = x + b + ', ';
    }
    console.log(x);
};