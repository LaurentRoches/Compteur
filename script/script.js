// window.onload = () => {
//     document.body.innerHTML = 
//     `<main>
//         <div class="container">
//             <h1> Les Counter </h1>
//             <span id="counter"></span>
//             <div class="button-container">
//                 <button class="decrease" type="button">Decrease</button>
//                 <button class="reset" type="button">reset</button>
//                 <button class="increase" type="button">increase</button>
//             </div>
//         </div>
//     </main>`;
// };

let value = document.getElementById('counter');
let btns = document.querySelectorAll('button');

let count = 0;

btns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('decrease')) {
            count--;
            if (count > 0){
                value.style.color = 'green';
            } else if (count < 0){
                value.style.color ='red';
            }else if (count === 0){
                value.style.color ='gray';
            };
        } else if (button.classList.contains('reset')) {
            count = 0;
            if (count > 0){
                value.style.color = 'green';
            } else if (count < 0){
                value.style.color ='red';
            }else if (count === 0){
                value.style.color ='gray';
            };
        } else if (button.classList.contains('increase')) {
            count++;
            if (count > 0){
                value.style.color = 'green';
            } else if (count < 0){
                value.style.color ='red';
            }else if (count === 0){
                value.style.color ='gray';
            };
        };
        value.textContent = count;
    });
});



