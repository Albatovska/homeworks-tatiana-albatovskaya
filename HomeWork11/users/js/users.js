class Users {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.http = new CustomHttp();
        this.handleResponse = this.handleResponse.bind(this)
    };

    setUsers(list) {
        list.forEach(user => {
            const pEl = document.createElement("p");
            pEl.innerHTML = `${user.name}`;
            this.element.appendChild(pEl);
            pEl.addEventListener("click", () => {
                const openLists = document.querySelectorAll('.second');
                Array.prototype.forEach.call(openLists, el => {
                    el.remove();
                })
                const pId = document.createElement("p");
                pId.classList.add('second');
                pId.innerHTML = `<b>id: </b> ${user.id}`;
                pEl.appendChild(pId);
                const pEm = document.createElement("p");
                pEm.classList.add('second');
                pEm.innerHTML = `<b>Email:</b> ${user.email}`;
                pEl.appendChild(pEm);
            })
        });
        return this
    };
    handleResponse(list) {
        this.element.innerHTML = '';
        this.setUsers(list);
    };
    getUsers() {

        this.http.get('https://jsonplaceholder.typicode.com/users', this.handleResponse)
    };
};