const order = {
    soup: null,
    main_course: null,
    drink: null,
    salad: null,
    dessert: null
};

let cost = {
    soup: 0,
    main_course: 0,
    drink: 0,
    salad: 0,
    dessert: 0
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
    const section = document.getElementById(`section_${category.id}`);
    const h2 = document.createElement("h2");
    h2.textContent = category.title;
    const lastButton = section.firstChild;
    lastButton.before(h2);
    const containerDiv = document.createElement("div");
    containerDiv.className = "container";
    menu.filter(item => item.category == category.id)
        .forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "item";
            itemDiv.setAttribute("data-dish", item.keyword);
            itemDiv.setAttribute("data-kind", item.kind);
            const img = document.createElement("img");
            img.setAttribute("src", item.image);
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
    if (order.soup || order.main_course || order.drink || order.salad || order.dessert) {
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

    document.getElementById("summ").lastElementChild.textContent = cost.soup + cost.main_course + cost.drink + cost.salad + cost.dessert + " ₽";
}

function selection(category, kind="any") {
    const section = document.getElementById(category);
    const containerDiv = section.lastElementChild;
    menu.filter(item => "section_" + item.category == section.id && (item.kind == kind || kind == "any"))
        .forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "item";
            itemDiv.setAttribute("data-dish", item.keyword);
            itemDiv.setAttribute("data-kind", item.kind);
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
            console.log(order[item.category]);
            if (order[item.category] != null && order[item.category].keyword == item.keyword) {
                document.getElementById(section.id).lastElementChild.lastElementChild.classList.add("selected");
            }
        });
}

function filter(event) {
    let count = 0;
    for (let i of Array.from(event.currentTarget.parentNode.parentNode.lastElementChild.children)) {
        i.remove();
    }

    if (event.currentTarget.dataset.hasbeenchecked == "true") {
        selection(event.currentTarget.parentNode.parentNode.id);

        event.currentTarget.dataset.hasbeenchecked = "false";
        event.currentTarget.checked = false;

        return;
    }

    selection(event.currentTarget.parentNode.parentNode.id, event.currentTarget.value);

    for (let i of event.currentTarget.parentNode.children)
    {
        if (i.nodeName == "INPUT")
        {
            i.dataset.hasbeenchecked = "false";
        }
    }

    event.currentTarget.dataset.hasbeenchecked = "true";
}

let filterButtons = document.querySelectorAll('#menu input[type="radio"]');
for (let i of filterButtons) {
    i.addEventListener("click", filter);
}