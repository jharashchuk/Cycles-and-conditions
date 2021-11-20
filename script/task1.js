// Задание 1! Поиск данных в массиве.
// Создадим массив объектов, который будет содержать данные о пользователях;
// Выведем окно prompt, в которое необходимо будет ввести фамилию пользователя;
// Написать инструкцию поиска по массиву data, с введенными в prompt данными;
// Если есть совпадение - вывести все данные этого пользователя в altert;прим:
// user name: Ashton Kutcher.
// user age: 40.
// Если совпадения не произошло вывести alert с ошибкой: 
// “No results found for your request”
// Добавить в функционал возможность поиска пользователя без учета регистра.

let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
 ];

let surname = prompt('Введите вашу фамилию', '');

let info;

for (let elem of data) {
    if(elem.lastName.toLowerCase() == surname.toLowerCase()) {
        info = elem;
    }
}

if(info) {
    alert('user name: ' + info.firstName + info.lastName + ' user age: ' + info.age);    
} else {
    alert ('No results found for your request');
}
