import './about.css';
import chiefImg from './chef-pouring-special-sauce-pork-ribs-kitchen.jpg';

const idcontent= document.querySelector("#content");

export function fillabout() {
const idcontent= document.querySelector("#content");
idcontent.innerHTML= '';
const aboutPageBox = document.createElement('div');
idcontent.appendChild(aboutPageBox);
aboutPageBox.id = "about-page-box";
aboutPageBox.innerHTML=`<div id="image-left"><img src="${chiefImg}"></div>
        <div id="right-info">
            <ul class="about-list">
                <li>Address: 659 Howell Fords, Lilamouth, KY 05698</li>
                <li>Phone: +1 3052327673</li>
                <li>E-mail: randomemail@gmail.com</li>
                <li>Facebook: facebook.com/</li>
                <li>Tiktok: tiktok.com/@</li>
                <li>Instagram: instagram.com/</li>
            </ul>
        </div>
        <div id="text-bottom">
            <p style="font-weight: bolder;">About us</p>
            <p>We’re a cozy Italian-style eatery based in the heart of Lilamouth, KY, serving up classic favorites like spaghetti, risotto, and freshly made pasta dishes. Our focus is on authentic flavors, warm hospitality, and creating a welcoming space where friends and family can gather to enjoy a true taste of Italy.</p>
        </div>`;
const Footer= document.createElement("footer");
Footer.innerHTML = `@Copyright, 2025.`;
idcontent.appendChild(Footer);
}