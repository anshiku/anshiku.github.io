const order = {
    soup: null,
    main_course: null,
    drink: null
};

let cost = {
    soup: 0,
    main_course: 0,
    drink: 0
};

displayOrder();

function dishSort(a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    }

    return 0;
}

menu.sort(dishSort);
let menuDiv = document.getElementById("menu");
categories.forEach(category => {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = category.title;
    const containerDiv = document.createElement("div");
    containerDiv.className = "container";
    section.appendChild(h2);
    menu.filter(item => item.category == category.id)
        .forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "item";
            itemDiv.setAttribute("data-dish", item.keyword);
            const img = document.createElement("img");
            img.setAttribute("src", `../menu/${item.image}`);
            img.setAttribute("alt", item.keyword);
            const cost = document.createElement("p");
            cost.className = "cost";
            cost.textContent = `${item.price}₽`;
            const name = document.createElement("p");
            name.className = "name";
            name.textContent = item.name;
            const count = document.createElement("p");
            count.className = "weight";
            count.textContent = item.count;
            const add = document.createElement("button");
            add.textContent = "Добавить";
            add.addEventListener("click", addToOrder);
            itemDiv.appendChild(img);
            itemDiv.appendChild(cost);
            itemDiv.appendChild(name);
            itemDiv.appendChild(count);
            itemDiv.appendChild(add);
            containerDiv.appendChild(itemDiv);
        });
    section.appendChild(containerDiv);
    menuDiv.appendChild(section);
});

let selectedItem;

function unHighlightOrdered(dishLine) {
    for (let i of dishLine.children)
    {
        i.classList.remove("selected");
    }
}

function highlightOrdered(currentItem) {
    currentItem.classList.add("selected");
}

function addToOrder(event) {
    let item;
    for (let i of menu) {
        if (i.keyword == event.currentTarget.parentNode.dataset.dish)
        {
            item = i;
            break;
        }
    }
    order[item.category] = item;
    unHighlightOrdered(event.currentTarget.parentNode.parentNode);
    highlightOrdered(event.currentTarget.parentNode);
    displayOrder();
    document.getElementById(`input_${item.category}`).value = item.keyword;
}

function displayOrder() {
    const empty = document.getElementById("empty_order")
    const orderitems = document.getElementById("order_items")
    if (order.soup || order.main_course || order.drink) {
        empty.style.display = "none";
        orderitems.style.display = "block";
    }

    for (var property in order) {
        const item = order[property];
        if (!item)
            continue;
        const noLabel = document.getElementById(`no_${item.category}`);
        noLabel.style.display = "none";
        const dishLabel = document.getElementById(`category_${item.category}`);
        dishLabel.style.display = "block";
        const selectedDish = document.getElementById(`selected_${item.category}`);
        selectedDish.textContent = item.name + " " + item.price + "₽";
        cost[property] = item.price;
    };

    document.getElementById("summ").lastElementChild.textContent = cost.soup + cost.main_course + cost.drink + " ₽";
}
