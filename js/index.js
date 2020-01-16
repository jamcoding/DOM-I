const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const br = document.createElement('br');
const newLink = document.createElement('a');

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.getElementsByTagName('a');
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];

links.appendChild(newLink).textContent = "Test";
// links.prepend(newLink.cloneNode(true));

// nav text color
Array.from(links).forEach(element => {
  element.style.color = "green";
});

// cta
let h1Tag = document.querySelector('h1');
let h1MiddleText = document.createTextNode('IS');
let h1BottomText = document.createTextNode('AWESOME');

h1Tag.textContent = 'DOM';
h1Tag.appendChild(br.cloneNode(true));
h1Tag.appendChild(h1MiddleText);
h1Tag.appendChild(br.cloneNode(true));
h1Tag.appendChild(h1BottomText);


let ctaButton = document.querySelector("section.cta .cta-text button");
ctaButton.textContent = siteContent['cta']['button'];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// main-content
// top content
let h4Tag = document.getElementsByTagName('h4');
let pTag = document.getElementsByTagName('p');

h4Tag[0].textContent = siteContent['main-content']['features-h4'];
pTag[0].textContent = siteContent['main-content']['features-content'];

h4Tag[1].textContent = siteContent['main-content']['about-h4'];
pTag[1].textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// bottom content
h4Tag[2].textContent = siteContent['main-content']['services-h4'];
pTag[2].textContent = siteContent['main-content']['services-content'];

h4Tag[3].textContent = siteContent['main-content']['product-h4'];
pTag[3].textContent = siteContent['main-content']['product-content'];

h4Tag[4].textContent = siteContent['main-content']['vision-h4'];
pTag[4].textContent = siteContent['main-content']['vision-content'];


// contact
let contactHeader = document.querySelector("section.contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let country = document.createTextNode('Somewhere, USA');

pTag[5].textContent = "123 Way 456 Street";
pTag[5].appendChild(br.cloneNode(true));
pTag[5].appendChild(country);
pTag[6].textContent = siteContent["contact"]["phone"];
pTag[7].textContent = siteContent["contact"]["email"];

// footer
let footerText = document.querySelector("footer p");
footerText.textContent = siteContent["footer"]["copyright"];