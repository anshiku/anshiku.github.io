let form = document.getElementById("info");

let errorMessage;

function deleteMessage() {
    errorMessage.remove();
}

function validation(event) {
    let data = new FormData(form);
    let count = 0;
    let checkList = [false, false, false, false, false];

    for (let choice of data.entries()) {
        if (count < 5) {
            if (choice[1] != "")
            {
                checkList[count] = true;
            }
        } else {
            break;
        }

        count++;
    }

    errorMessage = document.createElement("div");
    errorMessage.classList.add("message");

    if (!(checkList[0] || checkList[1] || checkList[2] || checkList[3] || checkList[4])) {
        event.preventDefault();
        errorMessage.innerHTML += "<p>Ничего не выбрано. Выберите блюда для заказа</p>";
    } else if (checkList[0] && checkList[1] && checkList[2] && checkList[3]) {
        return;
    } else if (!checkList[3]){
        event.preventDefault();
        errorMessage.innerHTML += "<p>Выберите напиток</p>";
    } else if (checkList[0] && !(checkList[1] || checkList[2])){
        event.preventDefault();
        errorMessage.innerHTML += "<p>Выберите главное блюдо/салат/стартер</p>";
    } else if (checkList[2] && !(checkList[0] || checkList[1])) {
        event.preventDefault();
        errorMessage.innerHTML += "<p>Выберите суп или главное блюдо</p>";
    } else if (!checkList[1] && (checkList[3] || checkList[4])) {
        event.preventDefault();
        errorMessage.innerHTML += "<p>Выберите главное блюдо</p>";
    }

    errorMessage.innerHTML += '<button onclick="deleteMessage()">Окей &#128076;</button>';
    document.body.append(errorMessage);
}

form.addEventListener("submit", validation);