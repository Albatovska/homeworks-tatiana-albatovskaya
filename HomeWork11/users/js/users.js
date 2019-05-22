class Users {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.http = new CustomHttp();
        this.handleResponse = this.handleResponse.bind(this)
    };

    setUsers(list) {
        list.forEach(user => {
            const pEl = document.createElement("p");
            pEl.classList.add('new');
            pEl.innerHTML = `<b>Name:</b> ${user.name}`;
            this.element.appendChild(pEl);
            pEl.addEventListener("click", () => {
                const openLists = document.querySelectorAll('.second');
                Array.prototype.forEach.call(openLists, el => {
                    el.remove();
                })
                const newpEl = document.createElement("p");
                newpEl.classList.add('second');
                newpEl.innerHTML = `<b>Info:</b> ${JSON.stringify(user)}`;
                pEl.appendChild(newpEl);

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