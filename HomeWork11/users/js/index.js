const addUserBtn = document.getElementById('add-users');
const usersList = new Users('#users-list');

addUserBtn.addEventListener('click', () => {
    usersList.getUsers();
});