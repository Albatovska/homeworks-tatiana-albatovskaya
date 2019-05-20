// 6. Реализовать примитивный дропдаун.Изначально все dropdown - menu скрыты
// через класс.d - none.При клике на dropdown - item должен отображаться блок
// dropdown - menu который вложен именно в тот dropdown - item на котором произошел клик.
// При повторном клике на этот же dropdown - item блок dropdown - menu должен закрыться.
// При клике на любой другой dropdown - item уже открытый dropdown - menu должен закрываться
// а на тот который кликнули открываться.

const dropdownItems = document.querySelectorAll(".dropdown-item");

Array.prototype.forEach.call(dropdownItems, item =>
    item.addEventListener("click", openCurrentDropdown)
);

function openCurrentDropdown() {
    const thisMenu = this.querySelector(".dropdown-menu");
    const thisMenuClose = thisMenu.classList.contains("d-none");
    const openedDropdowns = document.querySelectorAll('.dropdown-menu:not(.d-none)');

    Array.prototype.forEach.call(openedDropdowns, el =>
        el.classList.add('d-none'));

    if (thisMenuClose) {
        thisMenu.classList.remove("d-none");
    }


};