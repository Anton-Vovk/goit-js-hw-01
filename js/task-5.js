const China = 'Китай';
const Chile = 'Чили';
const Australia = 'Австралия';
const India = 'Индия';
const Jamaica = 'Ямайка';
const ChinaPrice = 100;
const ChilePrice = 250;
const AustraliaPrice = 170;
const IndiaPrice = 80;
const JamaicaPrice = 120;
const CountryOfDelivery = prompt('Введите страну доставки').toLowerCase();

switch (CountryOfDelivery) {
    case 'китай':
        console.log(`Доставка в ${China} будет стоять ${ChinaPrice} кредитов`);
        break;
    case 'чили':
        console.log(`Доставка в ${Chile} будет стоять ${ChilePrice} кредитов`);
        break;
    case 'австралия':
        console.log(`Доставка в ${Australia} будет стоять ${AustraliaPrice} кредитов`);
        break;
    case 'индия':
        console.log(`Доставка в ${India} будет стоять ${IndiaPrice} кредитов`);
        break;
    case 'ямайка':
        console.log(`Доставка в ${Jamaica} будет стоять ${JamaicaPrice} кредитов`);
        break;
    default:
        alert('В вашей стране доставка не доступна');
}

