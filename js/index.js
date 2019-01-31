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
let logo = document.querySelector('#logo-img');
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerlogo = document.querySelector('#cta-img');
console.log(headerlogo);
headerlogo.setAttribute('src', siteContent["cta"]["img-src"])

//let headerDOMText = document.querySelector('.cta-text');
//headerDOMText.setAttribute('lop', siteContent["cta"]["h1"])
//console.log(headerDOMText);
let domText = document.querySelector('h1');
console.log(domText);
domText.textContent = siteContent["cta"]["h1"]

//let ctatext = document.querySelector('.cta-text');
//console.log(ctatext);


document.querySelector('a').textContent = siteContent["nav"]["nav-item-1"]
let product = document.querySelectorAll('a')[1];
console.log(product)
product.textContent = siteContent["nav"]["nav-item-2"]
document.querySelectorAll('a')[2].textContent = siteContent["nav"]["nav-item-3"]
document.querySelectorAll('a')[3].textContent = siteContent["nav"]["nav-item-4"]
document.querySelectorAll('a')[4].textContent = siteContent["nav"]["nav-item-5"]
document.querySelectorAll('a')[5].textContent = siteContent["nav"]["nav-item-6"]

//document.querySelector('a').textContent = siteContent["nav"]["nav-item-1"]
document.querySelector('button').textContent = siteContent["cta"]["button"]

//features
document.querySelector('h4').textContent = siteContent["main-content"]["features-h4"]
document.querySelector('p').textContent = siteContent["main-content"]["features-content"]
//about
document.querySelectorAll('h4')[1].textContent = siteContent["main-content"]["about-h4"]
document.querySelectorAll('p')[1].textContent = siteContent["main-content"]["about-content"]

//features
document.querySelector('h4').textContent = siteContent["main-content"]["features-h4"]
document.querySelectorAll('h4').textContent = siteContent["main-content"]["features-h4"]

//MIDDLE IMG header
document.querySelector('#middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Services
document.querySelectorAll('h4')[2].textContent = siteContent["main-content"]["services-h4"]
document.querySelectorAll('p')[2].textContent = siteContent["main-content"]["services-content"]

//product
document.querySelectorAll('h4')[3].textContent = siteContent["main-content"]["product-h4"]
document.querySelectorAll('p')[3].textContent = siteContent["main-content"]["product-content"]

//Vision
document.querySelectorAll('h4')[4].textContent = siteContent["main-content"]["vision-h4"]
document.querySelectorAll('p')[4].textContent = siteContent["main-content"]["vision-content"]

//Contact
document.querySelectorAll('h4')[5].textContent = siteContent["contact"]["contact-h4"]
document.querySelectorAll('p')[5].textContent = siteContent["contact"]["address"]
document.querySelectorAll('p')[6].textContent = siteContent["contact"]["phone"]
document.querySelectorAll('p')[7].textContent = siteContent["contact"]["email"]

//footer
document.querySelectorAll('p')[8].textContent = siteContent["footer"]["copyright"]

//green text
document.querySelector('header nav a').style.color = 'green';

document.querySelectorAll('header nav a')[1].style.color = 'green';


document.querySelectorAll('header nav a')[2].style.color = 'green';

document.querySelectorAll('header nav a')[3].style.color = 'green';
document.querySelectorAll('header nav a')[4].style.color = 'green';
document.querySelectorAll('header nav a')[5].style.color = 'green';
document.querySelectorAll('header nav a')[6].appendChild('test')


//let navItem1 = document.querySelector('a');
//navItem1.setAttribute('src', siteContent["nav"]["img-src"])


//document.querySelectorAll('a').textContent = 'INSET';



//const middleImg = document.querySelector('.middle-img');
//middleImg.setAttribute('src', siteContent)

//middleImg.setAttribute('src', 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350')
//middleImg.alt = "This is a picture of a kitty";
