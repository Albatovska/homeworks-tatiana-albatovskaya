// Получить пользователей(users) от сервера https: //jsonplaceholder.typicode.com
// используя класс созданный на занятии.Получив ответ от сервера вывести имена
// пользователей на страницу.При клике на имя пользователя в произвольном месте
// должна появиться подробная информация о нем.Для визуальной части можно использовать
// bootstrap или другие фреймворки.

const url = 'https://jsonplaceholder.typicode.com';

class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => {
            const resp = JSON.parse(xhr.responseText)
            callback(resp);
        });
    }


};
const http = new CustomHttp();