
import { elements } from "./helpers.js";
import { menu, buttonsData } from "./db.js";






const searchCategory = (e) => {

    const category = e.target.dataset.category;
    const filteredItems = menu.filter((item) => item.category === category);

    if (category === "all") {
        renderMenuItems(menu);
    }
    else {
        renderMenuItems(filteredItems);

    }


}



const renderMenuItems = (menuItems) => {
    let menuHTML = menuItems.map(
        (item) =>
            `
        <a href="/productDetail.html?id=${item.id}" id="card" class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2">
            <img src="${item.img}" class="rounded shadow" width="500">
            <div>
            <div class="d-flex justify-content-between align-items-center">
                <h5>${item.title}</h5>
                <p class="text-success">${item.price}</p>
            </div>
            <p class="lead">${item.desc}</p>
        </div>
        </a>
        `
    ).join("");


    elements.menuArea.innerHTML = menuHTML;


}



const renderButtons = (active) => {
    console.log(active);
    elements.buttonsArea.innerHTML = "";
    buttonsData.forEach((btn) => {
        const buttonEle = document.createElement("button");
        buttonEle.className = "btn btn-outline-dark filter-btn";
        buttonEle.textContent = btn.text;
        buttonEle.dataset.category = btn.value;
        if (btn.value === active) {
            buttonEle.classList.add("bg-dark", "text-light");
        }

        //* HTML'e gönderme
        elements.buttonsArea.appendChild(buttonEle);
    });
};









//Events

elements.buttonsArea.addEventListener("click", searchCategory);
document.addEventListener("DOMContentLoaded", () => {
    renderButtons("all");
    renderMenuItems(menu);

});

