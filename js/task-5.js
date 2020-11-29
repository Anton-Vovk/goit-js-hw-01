const сhina = 'китай';
const сhile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';
let price;

const CountryOfDelivery = prompt('Введите страну доставки').toLowerCase();

switch (CountryOfDelivery) {
    case сhina:
        price = 100;
        break;
    case сhile:
        price = 250;
        break;
    case australia:
        price = 170;
        break;
    case india:
        price = 80;
        break;
    case jamaica:
        price = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна');
}
console.log(`Доставка в ${CountryOfDelivery} будет стоять ${price} кредитов`);

