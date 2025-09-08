import './menu.css';

import food1 from './risotto.jpg';
import food2 from './SPAGH.jpg';
import food3 from './beef-ravi.jpg';
import food4 from './feccu.jpg';

export function fillmenu() {
const idcontent= document.querySelector("#content");
idcontent.innerHTML= '';
const mainmenubox = document.createElement('div');
idcontent.appendChild(mainmenubox);
mainmenubox.id = "main-menu-box";
mainmenubox.innerHTML=`<div id="menu-item1">
                <div id="picture"><img src="${food2}"></div>
                <div id="desc">Classic Italian pasta served with rich tomato sauce and herbs.</div>
                <div id="name-price"> 
                    <p>Spaghetti</p>
                    <p>15,40$</p>
                </div>
            </div>
            <div id="menu-item1">
                <div id="picture"><img src="${food3}"></div>
                <div id="desc">Cheese-filled ravioli in a beefy tomato sauce, all prepared on the stove top in one skillet.</div>
                <div id="name-price"> 
                    <p>Beefy Ravioli</p>
                    <p>21,70$</p>
                </div>
            </div>
            <div id="menu-item1">
                <div id="picture"><img src="${food4}"></div>
                <div id="desc">A side fettuccine pasta recipe is tossed with a light fire-roasted tomato and garlic sauce.</div>
                <div id="name-price"> 
                    <p>Fettuccine Pasta</p>
                    <p>18,6$</p>
                </div>
            </div>
            <div id="menu-item1">
                <div id="picture"><img src="${food1}"></div>
                <div id="desc">Creamy Arborio rice cooked with savory flavors.</div>
                <div id="name-price"> 
                    <p>Risotto</p>
                    <p>15,40$</p>
                </div>
            </div>
        </div>`;
const Footer= document.createElement("footer");
Footer.innerHTML = `@Copyright, 2025.`;
idcontent.appendChild(Footer);
}