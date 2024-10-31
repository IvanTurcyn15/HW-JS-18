// Task 1

console.log("Task 1");

console.log(`У списку ${document.querySelector("#categories").children.length} категорії`);

const titles = [...document.getElementsByTagName("h2")];

for(let category of titles){
    console.log(`Категорія: ${category.textContent}\nКількість елементів: ${category.nextElementSibling.childElementCount}`);
}

// Task 2

let ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

ingredients = ingredients.map(el => {
    const newLi = document.createElement("li");
    newLi.textContent = el;
    return newLi;
});

ingredients.forEach((el) => document.querySelector("#ingredients").appendChild(el));

// Task 3

const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
];

const galleryList = document.getElementById('gallery');

const fillList = images.map((el) => `<li><img src="${el.url}" alt="${el.alt}" width=300 height="200"></li>`).join("");

galleryList.insertAdjacentHTML("afterbegin",fillList);

// Task 4

function decrement() {
    const span = document.querySelector("#value");

    span.textContent = Number(span.textContent) - 1;
}

function increment() {
    const span = document.querySelector("#value");

    span.textContent = Number(span.textContent) + 1;
}

document.querySelector("[data-action='decrement']").addEventListener("click", decrement);
document.querySelector("[data-action='increment']").addEventListener("click", increment);