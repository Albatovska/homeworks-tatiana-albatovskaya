// 1. Есть класс Planet

// function Planet(name) {
//     this.name = name;
//     this.getName = function() {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника(satelliteName).Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
//     дополнительный текст 'The satellite is' + satelliteName.
// Например:
//     var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’

function Planet(name) {
    this.name = name;
    this._getName = function() {
        return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.call(this, name);
    this.satelliteName = satelliteName;
    this.getName = function() {
        return 'The satellite is ' + satelliteName;
    }
    console.log(this._getName(this.name) + '. ' + this.getName(this.name))
}
var earth = new PlanetWithSatellite('earth', 'moon');
earth.getName();

// 2. Создайте класс“ Здание”(пусть у него будет имя, количество этажей, метод“ 
//получить количество этажей” и метод“  установить количество этажей”).
// Создайте наследников этого класса:
//     классы“ Жилой дом” и“ Торговый центр”.Используйте функциональное наследование

// У жилого дома появится свойство“ количество квартир на этаже”, а метод“ получить
// количество этажей” должен
// вернуть объект вида { этажи: 5, всегоКвартир: 5 * количествоКвартир }

// У торгового центра появится свойство“ количество магазинов на этаже”, а метод“ получить количество этажей”
// должен вернуть объект вида { этажи: 3, всегоМагазинов: 3 * количествоМагазинов }
// От каждого класса создать экземпляр(дом, торговый центр)

class Build {
    constructor(floors) {
        this.floors = floors
    }
    setFloors() { return floorscount = this.floors }
    getFloors() { return this.floors }
}
class LiveHome extends Build {
    constructor(floors, flats) {
        super(floors);
        this.flats = flats;
    }
    getFloors() {
        return 'Жилой дом. Этажей: ' + this.floors + ', ' + 'всего квартир: ' + super.getFloors() * this.flats;
    }
}
class TradeHome extends Build {
    constructor(floors, shops) {
        super(floors);
        this.shops = shops;
    }
    getFloors() {
        return 'Торговый центр. Этажей: ' + this.floors + ', ' + 'всего магазинов: ' + super.getFloors() * this.shops;
    }
}
const livehome = new LiveHome(7, 3);
const tradehome = new TradeHome(5, 4);
console.log(livehome.getFloors());
console.log(tradehome.getFloors());

// 3. Создать класс“ Мебель” с базовыми свойствами“ имя”, “цена” и методом“ получить информацию”
// (метод должен вывести имя и цену).Метод должен быть объявлен с помощью прототипов
//(Func.prototype...).
// Создать два экземпляра класса“ Мебель”: экземпляр“ ОфиснаяМебель” и“ Мебель для дома”.
//Придумайте им по одному свойству, которые будут характерны только для этих экземпляров
//(например, для офисной мебели - наличие компьютерного стола или шредера).
//Метод“ получить информацию”  должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture(name, price) {
    this.name = name;
    this.price = price;
};
Furniture.prototype.getInfoFurniture = function() {
    return 'Name: ' + this.name + ' ' + 'Price: ' + this.price;
};

function OfficeFurniture(name, price, unit) {
    Furniture.call(this, name, price);
    this.unit = unit;
};
OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;
OfficeFurniture.prototype.getInfoFurniture = function() {
    return 'Office Furniture: ' + Furniture.prototype.getInfoFurniture.call(this) + ' ' + this.unit;
};

function HomeFurniture(name, price, unit) {
    Furniture.call(this, name, price);
    this.unit = unit;
};
HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;
HomeFurniture.prototype.getInfoFurniture = function() {
    return 'Home Furniture: ' + Furniture.prototype.getInfoFurniture.call(this) + ' ' + this.unit;
};

officefurniture = new OfficeFurniture('office', 1550, 'computer desk');
homefurniture = new HomeFurniture('home', 1000, 'sofa');

console.log(officefurniture.getInfoFurniture());
console.log(homefurniture.getInfoFurniture());

// 4. Создать класс“ Пользователь” с базовыми свойствами“ имя”, “дата регистрации”
// и методом“ получить информацию”(метод должен вывести имя и дату регистрации).
// Метод должен быть объявлен с помощью прототипов(Func.prototype...) Создать два
// наследника класса“ Пользователь”: класс“ Админ” и класс“ Гость”.
// У класса“ Админ” должно быть дополнительное свойство“ суперАдмин”(может быть true / false, должно быть скрытым).
//Свойства определяются в момент вызова конструктора.
// У класса“ Гость” должно быть свойство“ срокДействия”(validDate, например),
//     содержащее дату(например, одну неделю от момента регистрации).
// У классов - наследников метод“ получить информацию” должен так же содержать информацию
// о дополнительных свойствах(“суперАдмин” и“ срокДействия”)

function User(name, date) {
    this.name = name;
    this.date = date;
};
User.prototype.getInfoUser = function() {
    return this.name + ' ' + this.date;
};

function Admin(name, date) {
    User.call(this, name, date);
    isSuperAdmin = true;
    this.getIsAdmin = function() {
        return isSuperAdmin ? 'admin' : 'guest';
    };
};
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.getInfoUser = function() {
    return User.prototype.getInfoUser.call(this) + ' ' + this.getIsAdmin()
};

function Guest(name, date) {
    User.call(this, name, date);
    this.createDate = function() {
        this.endDateString = date;
        let ddmmyyyy = this.endDateString.split("-");
        this.endDate = new Date(parseInt(ddmmyyyy[2], 10),
            parseInt(ddmmyyyy[1], 10) - 1,
            parseInt(ddmmyyyy[0], 10));
        this.endDate.setDate(this.endDate.getDate() + 7);
        this.endDate = this.endDate.toDateString();
        return this.endDate;
    };

    validDate = this.createDate();
    this.getValidDate = function() {
        return validDate ? this.endDate : 'false';
    };

};
Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;
Guest.prototype.getInfoUser = function() {
    return User.prototype.getInfoUser.call(this) + ' ' + 'validDate: ' + this.endDate;
};

const admin = new Admin('Denis', '18-04-2019');
const guest = new Guest('Sveta', '06-06-2019');
console.log(admin.getInfoUser());
console.log(guest.getInfoUser());