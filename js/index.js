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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Update the img src for header Image and midPageAccent
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let midPageAccent = document.getElementById("middle-img");
midPageAccent.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//Navbar links
const link = document.getElementsByTagName("a")

link[0].textContent = siteContent["nav"]["nav-item-1"]
link[1].textContent = siteContent["nav"]["nav-item-2"]
link[2].textContent = siteContent["nav"]["nav-item-3"]
link[3].textContent = siteContent["nav"]["nav-item-4"]
link[4].textContent = siteContent["nav"]["nav-item-5"]
link[5].textContent = siteContent["nav"]["nav-item-6"]
//nav Green
for (let i = 0; i < link.length; i++){
  link[i].style.color = 'green'
}

// cta content
const h1 = document.getElementsByTagName("h1")
const button = document.getElementsByTagName("button")
button[0].textContent = siteContent["cta"]["button"]
h1[0].textContent = siteContent["cta"]["h1"]

//main-content
const mainContent = document.querySelector('.top-content')
const h4 = mainContent.getElementsByTagName("h4")
const p = mainContent.getElementsByTagName('p')

h4[0].textContent = siteContent["main-content"]["features-h4"]
p[0].textContent = siteContent["main-content"]["features-content"]
h4[1].textContent = siteContent["main-content"]["about-h4"]
p[1].textContent = siteContent["main-content"]["about-content"]

//bottom content
const bottomContent = document.querySelector('.bottom-content');
const bcH4 = bottomContent.getElementsByTagName("h4");
const bcP = bottomContent.getElementsByTagName('p');

bcH4[0].textContent = siteContent["main-content"]["services-h4"]
bcP[0].textContent = siteContent["main-content"]["services-content"]
bcH4[1].textContent = siteContent["main-content"]["product-h4"]
bcP[1].textContent = siteContent["main-content"]["product-content"]
bcH4[2].textContent = siteContent["main-content"]["vision-h4"]
bcP[2].textContent = siteContent["main-content"]["vision-content"]

//contact
const contact = document.querySelector('.contact');
const conH4 = contact.getElementsByTagName("h4");
const conP = contact.getElementsByTagName("p");

conH4[0].textContent = siteContent["contact"]["contact-h4"]
conP[0].textContent = siteContent["contact"]["address"]
conP[1].textContent = siteContent["contact"]["phone"]
conP[2].textContent = siteContent['contact']["email"]

//footer
const footer = document.querySelector("footer");
const footerP = footer.getElementsByTagName("p")
footerP[0].textContent = siteContent['footer']['copyright']
