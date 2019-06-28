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
    this.getName = function() {
        return 'Planet name is ' + this.name;
    };
};

function PlanetWithSatellite(name, satelliteName) {
    Planet.call(this, name);
    const previousGetName = this.getName;
    this.satelliteName = satelliteName;
    this.getName = function() {
        return (
            previousGetName.call(this) + '. ' + "The satellite is " +
            this.satelliteName
        );
    };
};
PlanetWithSatellite.prototype = Object.create(Planet.prototype);
PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

const earth = new PlanetWithSatellite('earth', 'moon');
console.log(earth.getName());

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
    constructor(name, floors) {
        this.name = name;
        this.floors = floors;
    }

    get numberOfFloors() {
        return this.floors;
    }

    set numberOfFloors(value) {
        this.floors = value;
    }
};
class LiveHome extends Build {
    constructor(name, floors, flats) {
        super(name, floors);
        this.flats = flats;
    };
    getFloors() {
        return {
            Type: 'liveHome',
            Name: this.name,
            Floors: this.floors,
            Flats: this.floors * this.flats
        };
    };
};
class ShoppingMall extends Build {
    constructor(name, floors, shops) {
        super(name, floors);
        this.shops = shops;
    };
    getFloors() {
        return {
            Type: 'Shopping center',
            Name: this.name,
            Floors: this.floors,
            Stores: this.floors * this.shops
        };
    };
};
const livehome = new LiveHome('Faina Taun', 7, 3);
const shoppingMall = new ShoppingMall('Lavina Mall', 5, 4);
console.log(livehome.getFloors());
console.log(shoppingMall.getFloors());

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
    return {
        name: this.name,
        dateRegistration: this.date,
    }
};

function Admin(name, date, superAdmin) {
    User.call(this, name, date);
    this._isSuperAdmin = superAdmin;
};

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getInfoUser = function() {
    return {
        name: this.name,
        dateRegistration: this.date,
        superAdmin: this._isSuperAdmin
    }
};

function Guest(name, date) {
    User.call(this, name, date);
    this.createDate = function() {
        this.startDate = new Date(this.date);
        this.endDate = new Date(this.date);
        this.endDate.setDate(this.endDate.getDate() + 7);
        this.localestr = this.endDate.toLocaleDateString();

        return this.localestr;

    };

};
Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

Guest.prototype.getInfoUser = function() {
    return {
        name: this.name,
        dateRegistration: this.date,
        validDate: guest.createDate()
    }
};

const admin = new Admin('Denis', '18.04.2019', true);
const guest = new Guest('Sveta', '06.06.2019');
console.log(admin.getInfoUser());
console.log(guest.getInfoUser());