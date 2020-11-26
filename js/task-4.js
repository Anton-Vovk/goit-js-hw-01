const pricePerDroid = 3000;
let credits = 23580;

let uzerQuantityDroid = prompt('Введите количество дроидов, которое Вы хотите купить');
let totalPrice = uzerQuantityDroid * pricePerDroid;
if (uzerQuantityDroid === null) {
    alert('Отменено пользователем!')
} else if (totalPrice <= credits)
    alert(`Вы купили ${uzerQuantityDroid} дроидов, на счету осталось кредитов ${credits-totalPrice}.`)
else 
    alert('Недостаточно средств на счету!')