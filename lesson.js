// const phoneInput = document.querySelector('#phone_input');
// const phoneButton = document.querySelector('#phone_button');
// const phoneResult = document.querySelector('#phone_result');
// const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/;
// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.textContent = 'OK';
//         phoneResult.style.color = 'green';
//     } else {
//         phoneResult.textContent = 'NOT OK';
//         phoneResult.style.color = 'red';
//     }
// }
// //
// const tabContentBlock = document.querySelectorAll('.tab_content_block');
// const tabItems = document.querySelectorAll('.tab_content_item');
// const tabParent = document.querySelector('.tab_content_items');
// let currentIndex = 0;
// const hideTabContent = () => {
//     tabContentBlock.forEach((item) => {
//         item.style.display = 'none';
//     });
//     tabItems.forEach((item) => {
//         item.classList.remove('tab_content_item_active');
//     });
// };
// const showTabContent = (index) => {
//     tabContentBlock[index].style.display = 'block';
//     tabItems[index].classList.add('tab_content_item_active');
// };
// hideTabContent();
// showTabContent(0);
// setInterval(() => {
//     currentIndex = (currentIndex + 1) % tabItems.length;
//     hideTabContent();
//     showTabContent(currentIndex);
// }, 3000);
// tabParent.onclick = (event) => {
//     if (event.target.classList.contains('tab_content_item')) {
//         tabItems.forEach((item, index) => {
//             if (event.target === item) {
//                 hideTabContent();
//                 showTabContent(index);
//                 currentIndex = index;
//             }
// //         });
// //     }
// // };
// // CONVERTER
//
// const usdInput = document.querySelector('#usd');
// const somInput = document.querySelector('#som');
// const euroInput = document.querySelector('#eur');
//
// somInput.oninput = () => {
//   const request = new XMLHttpRequest()
//   request.open('GET', `../data/converter.json`)
//   request.setRequestHeader('Content-Type', 'application/json')
//   request.send()
//
//   request.onload = () => {
//     const data  = JSON.parse(request.response)
//     usdInput.value = (somInput.value / data.usd).toFixed(2)
//   }
// }
//
// usdInput.oninput = () => {
//   const request = new XMLHttpRequest()
//   request.open('GET', `../data/converter.json`)
//   request.setRequestHeader('Content-Type', 'application/json')
//   request.send()
//
//   request.onload = () => {
//     const data  = JSON.parse(request.response)
//     somInput.value = (usdInput.value * data.som).toFixed(2)
//   }
// }
 // Card switcher
const nextButton = document.querySelector('#btn-next');
const prevButton = document.querySelector('#btn-prev');
const cardBlock = document.querySelector('.card');
let cardIndex = 1;

const updateCard = (index) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
        .then((response) => response.json())
        .then((data) => {
            cardBlock.innerHTML = ` 
                <p>${data.title}</p> 
                <p>Completed: ${data.completed}</p> 
                <span>ID: ${data.id}</span> 
            `;
        })
};

updateCard(cardIndex);

nextButton.onclick = () => {
    cardIndex++;
    if (cardIndex > 200) cardIndex = 1;
    updateCard(cardIndex);
};

prevButton.onclick = () => {
    cardIndex--;
    if (cardIndex < 1) cardIndex = 200;
    updateCard(cardIndex);
};

// task 2

// const fetchcool = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response)  => response.json())
//     .then((data) =>{
//     console.log(data);

//     } )
