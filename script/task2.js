// Задание 2
// const friends = ['Валера', 'Лёша', 'Тимофей', 'Алла', 'Маша', 'Катя', 'Илья', 'Влад', 'Даша'];
// С помощью цикла 'while' вывести в консоль или алерт всех друзей, начиная с Лёши и заканчивая Ильёй.

const friends = ['Валера', 'Лёша', 'Тимофей', 'Алла', 'Маша', 'Катя', 'Илья', 'Влад', 'Даша'];

for (let i = 0; i < friends.length; i++) {
    while (friends.indexOf(friends[i]) >=1 && friends.indexOf(friends[i]) <= 6) {
        console.log(friends[i]);
        break;
    }
}