import './styles.css';
import food1 from './pexels-ash-craig-122861-376464.jpg';
import food2 from './pexels-janetrangdoan-1099680.jpg';
import food3 from './pexels-ella-olsson-572949-1640777.jpg';
import food4 from './pexels-robinstickel-70497.jpg';
const idcontent= document.querySelector("#content");
const MidSection= document.createElement("div");
MidSection.classList.add("mid-section-contain");
MidSection.innerHTML = `<div class="left-side">
        <p id="text-leftside">The Willow & Stone is a cozy, rustic-style restaurant tucked into a quiet corner of the city. With warm wooden beams, hanging plants, and soft amber lighting, it feels like stepping into a countryside inn. The menu blends comfort food with a modern twist — think slow-braised short ribs with rosemary mashed potatoes, wood-fired flatbreads topped with seasonal vegetables, and homemade desserts like honey-lavender panna cotta. A small but carefully curated wine list highlights regional vineyards, while the bar serves craft cocktails infused with herbs grown right on the windowsill. It’s the kind of place where conversations linger, and every detail — from the mismatched vintage plates to the handwritten chalkboard specials — makes it feel both welcoming and memorable.</p>
        </div>   
        <div class="right-side">
            <div class="box-for-hours">
                <ul>
                    <li>Mon-Fri: 11am - 10pm</li>
                    <li>Sat: 10am - 11pm</li>
                    <li>Sun: 10am - 9pm</li>
                </ul>
                </div>
                </div>
                </div>`;
idcontent.appendChild(MidSection);

const telAddress= document.createElement("div");
telAddress.classList.add("tel-address");
telAddress.innerHTML= `Tel. +1 3052327673    Address. 659 Howell Fords, Lilamouth, KY 05698`;
idcontent.appendChild(telAddress);

const ImageContainer= document.createElement("div");
ImageContainer.classList.add("image-showcase");
ImageContainer.innerHTML= ` <div class="image"><img src="${food1}"></div>
                <div class="image"><img src="${food2}"></div>
                <div class="image"><img src="${food3}"></div>
                <div class="image"><img src="${food4}"></div>`;
idcontent.appendChild(ImageContainer);

const Footer= document.createElement("footer");
Footer.innerHTML = `@Copyright, 2025.`;
idcontent.appendChild(Footer);