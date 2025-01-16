"use strict";

let cards;

function getCards() {
    let req = new XMLHttpRequest();

    req.open("GET", "https://edu.std-900.ist.mospolytech.ru/exam-2024-1/api/goods?api_key=0ed9d0f3-b8d3-4023-bf4f-930ab4b0fe64", false);
    req.onload = () => {
        cards = JSON.parse(req.response);
    };
    req.send();
}

getCards();