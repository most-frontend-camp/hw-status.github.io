let xhr = new XMLHttpRequest();
// 2. Определяем функцию обратного вызова
xhr.onreadystatechange = processResponse;
// Этот код выполнится, запрос кода будет в пути
function processResponse(e) {
    if (xhr.readyState === 4) {    // Запрос выполнился!
        console.log(xhr.responseText);
    } else {     // Запрос ещё выполняется
        console.log("Загружаем ...");
    }
}
// 3. Определяем, куда и как отправлять запрос
xhr.open("GET", "employees.json", true);
// 4. Отправляем запрос
xhr.send();
console.log("Другая важная работа ...");