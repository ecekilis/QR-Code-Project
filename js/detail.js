import { menu } from "./db.js";
import { elements } from "./helpers.js";


const hrefId = new URLSearchParams(window.location.search).get("id"); // id=1'den "1" almak için URLSearchParams kullanıyoruz
// id=1




const correctItem = menu.find((item) => item.id === Number(hrefId));

console.log(correctItem);

elements.outlet.innerHTML = `

        <div class="d-flex justify-content-between align-items-center">
        <a href="/index.html">
        <i class="bi bi-house fs-1"></i>
        </a>
        <div>anasayfa / ${correctItem.category} / ${correctItem.title}</div>
        </div>
        <h1 class="text-center my-3 shadow p-2 rounded">${correctItem.title}</h1>
        <div class="d-flex justify-content-center align-items-center">
        <img
        style="max-width: 480px"
        class="img-fluid shadow rounded"
        src="${correctItem.img}"
        alt=""
        />
        </div>


        <div>
        <h3 class="my-5">
        Ürünün Kategorisi: <span class="text-success">${correctItem.category}</span>
        </h3>
        <h3>Ürünün Fiyatı: <span class="text-success">${correctItem.price} ₺</span></h3>
        </div>
        <p class="lead fs-3">${correctItem.desc}
        </p>
        </div>

`;

