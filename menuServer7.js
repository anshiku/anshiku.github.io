"use strict";

const categories = [
    {
        id: "soup",
        name: "Суп",
        title: "Выберите суп"
    },
    {
        id: "main_course",
        name: "Главное блюдо",
        title: "Выберите главное блюдо"
    },
    {
        id: "salad",
        name: "Салат",
        title: "Выберите салат или стартер"
    },
    {
        id: "drink",
        name: "Напиток",
        title: "Выберите напиток"
    },
    {
        id: "dessert",
        name: "Десерт",
        title: "Выберите десерт"
    }];

let menu;

function getMenu() {
    let req = new XMLHttpRequest();

    req.open("GET", "https://edu.std-900.ist.mospolytech.ru/labs/api/dishes", false);
    req.onload = () => {
        menu = JSON.parse(req.response);
    };
    req.send();
}

getMenu();

/*const menu = [
    {
        keyword: "gazpacho",
        name: "Гаспачо",
        price: 195,
        category: "soup",
        count: "350 г",
        image: "soups/gazpacho.jpg",
        kind: "veg"
    },
    {
        keyword: "mushroom_soup",
        name: "Грибной суп-пюре",
        price: 185,
        category: "soup",
        count: "330 г",
        image: "soups/mushroom_soup.jpg",
        kind: "veg"
    },
    {
        keyword: "norwegian_soup",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "330 г",
        image: "soups/norwegian_soup.jpg",
        kind: "fish"
    },
    {
        keyword: "ramen",
        name: "Рамен",
        price: 375,
        category: "soup",
        count: "425 г",
        image: "soups/ramen.jpg",
        kind: "meat"
    },
    {
        keyword: "tomyum",
        name: "Том ям с креветками",
        price: 650,
        category: "soup",
        count: "500 г",
        image: "soups/tomyum.jpg",
        kind: "fish"
    },
    {
        keyword: "chicken",
        name: "Куриный суп",
        price: 330,
        category: "soup",
        count: "350 г",
        image: "soups/chicken.jpg",
        kind: "meat"
    },
    {
        keyword: "friedpotatoeswithmushrooms",
        name: "Жареная картошка с грибами",
        price: 150,
        category: "main_course",
        count: "250 г",
        image: "main_course/friedpotatoeswithmushrooms1.jpg",
        kind: "veg"
    },
    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main_course",
        count: "310 г",
        image: "main_course/lasagna.jpg",
        kind: "meat"
    },
    {
        keyword: "chickencutletsandmashedpotatoes",
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: "main_course",
        count: "280 г",
        image: "main_course/chickencutletsandmashedpotatoes.jpg",
        kind: "meat"
    },
    {
        keyword: "fishrice",
        name: "Рыбная котлета с рисом и спаржей",
        price: 320,
        category: "main_course",
        count: "270 г",
        image: "main_course/fishrice.jpg",
        kind: "fish"
    },
    {
        keyword: "pizza",
        name: "Пицца Маргарита",
        price: 450,
        category: "main_course",
        count: "470 г",
        image: "main_course/pizza.jpg",
        kind: "veg"
    },
    {
        keyword: "shrimppasta",
        name: "Паста с креветками",
        price: 340,
        category: "main_course",
        count: "280 г",
        image: "main_course/shrimppasta.jpg",
        kind: "fish"
    },
    {
        keyword: "orangejuice",
        name: "Апельсиновый сок",
        price: 120,
        category: "drink",
        count: "300 мл",
        image: "beverages/orangejuice.jpg",
        kind: "cold"
    },
    {
        keyword: "applejuice",
        name: "Яблочный сок",
        price: 90,
        category: "drink",
        count: "300 мл",
        image: "beverages/applejuice.jpg",
        kind: "cold"
    },
    {
        keyword: "carrotjuice",
        name: "Морковный сок",
        price: 110,
        category: "drink",
        count: "300 мл",
        image: "beverages/carrotjuice.jpg",
        kind: "cold"
    },
    {
        keyword: "cappuccino",
        name: "Капучино",
        price: 180,
        category: "drink",
        count: "300 мл",
        image: "beverages/cappuccino.jpg",
        kind: "hot"
    },
    {
        keyword: "greentea",
        name: "Зелёный чай",
        price: 100,
        category: "drink",
        count: "300 мл",
        image: "beverages/greentea.jpg",
        kind: "hot"
    },
    {
        keyword: "tea",
        name: "Чёрный чай",
        price: 90,
        category: "drink",
        count: "300 мл",
        image: "beverages/tea.jpg",
        kind: "hot"
    },
    {
        keyword: "caesar",
        name: "Цезарь с цыплёнком",
        price: 370,
        category: "salad",
        count: "220 г",
        image: "salads_starters/caesar.jpg",
        kind: "meat"
    },
    {
        keyword: "caprese",
        name: "Капрезе с моцареллой",
        price: 350,
        category: "salad",
        count: "235 г",
        image: "salads_starters/caprese.jpg",
        kind: "veg"
    },
    {
        keyword: "frenchfries1",
        name: "Картофель фри с соусом Цезарь",
        price: 280,
        category: "salad",
        count: "235 г",
        image: "salads_starters/frenchfries1.jpg",
        kind: "veg"
    },
    {
        keyword: "frenchfries2",
        name: "Картофель фри с кетчупом",
        price: 260,
        category: "salad",
        count: "235 г",
        image: "salads_starters/frenchfries2.jpg",
        kind: "veg"
    },
    {
        keyword: "saladwithegg",
        name: "Корейский салат с овощами и яйцом",
        price: 330,
        category: "salad",
        count: "250 г",
        image: "salads_starters/saladwithegg.jpg",
        kind: "veg"
    },
    {
        keyword: "tunasalad",
        name: "Салат с тунцом",
        price: 480,
        category: "salad",
        count: "250 г",
        image: "salads_starters/tunasalad.jpg",
        kind: "fish"
    },
    {
        keyword: "baklava",
        name: "Пахлава",
        price: 220,
        category: "dessert",
        count: "300 г",
        image: "desserts/baklava.jpg",
        kind: "middle"
    },
    {
        keyword: "checheesecake",
        name: "Чизкейк",
        price: 240,
        category: "dessert",
        count: "125 г",
        image: "desserts/checheesecake.jpg",
        kind: "small"
    },
    {
        keyword: "chocolatecake",
        name: "Шоколадный торт",
        price: 270,
        category: "dessert",
        count: "140 г",
        image: "desserts/chocolatecake.jpg",
        kind: "small"
    },
    {
        keyword: "chocolatecheesecake",
        name: "Шоколадный чизкейк",
        price: 260,
        category: "dessert",
        count: "125 г",
        image: "desserts/chocolatecheesecake.jpg",
        kind: "small"
    },
    {
        keyword: "donuts",
        name: "Пончики (6 штук)",
        price: 650,
        category: "dessert",
        count: "700 г",
        image: "desserts/donuts.jpg",
        kind: "big"
    },
    {
        keyword: "donuts2",
        name: "Пончики (3 штуки)",
        price: 410,
        category: "dessert",
        count: "350 г",
        image: "desserts/donuts2.jpg",
        kind: "middle"
    }
];*/