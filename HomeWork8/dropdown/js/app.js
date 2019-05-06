// 6. Реализовать примитивный дропдаун.Изначально все dropdown - menu скрыты
// через класс.d - none.При клике на dropdown - item должен отображаться блок
// dropdown - menu который вложен именно в тот dropdown - item на котором произошел клик.
// При повторном клике на этот же dropdown - item блок dropdown - menu должен закрыться.
// При клике на любой другой dropdown - item уже открытый dropdown - menu должен закрываться
// а на тот который кликнули открываться.


document.addEventListener('click', (event) => {

    (!event.target.nextElementSibling) ? closeAllDropdowns(): (!event.target.nextElementSibling.className) ? closeAllDropdowns() :
        (event.target.nextElementSibling.className === "dropdown-menu d-none") ?
        (closeAllDropdowns(), openCurrentDropdown(event.target)) :
        closeAllDropdowns();

    function closeAllDropdowns() {
        const openedDropdowns = document.querySelectorAll('.d-block');
        Array.prototype.forEach.call(openedDropdowns, (el) => el.classList.toggle('d-block'));
    };

    function openCurrentDropdown(el) {
        el.nextElementSibling.classList.toggle('d-block');
    }
});