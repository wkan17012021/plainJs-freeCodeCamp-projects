const data = [
  {
    id: 1,
    title: "Grand Canyon",
    category: "Americas",
    price: 1000,
    img: "https://images.unsplash.com/photo-1535044243240-144dc3ae56a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    desc: `Explore the Grand Canyon at several vista points. Hiking and trekking as well as rock climbing for amazing views. We will also do some kayaking.`,
  },
  {
    id: 2,
    title: "Bali",
    category: "SE Asia",
    price: 500,
    img: "https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    desc: `Travel to exotic Bali, Indonesia for sunrise photos atop Batuur and walking amongst the rice terraces in Ubud`,
  },
  {
    id: 3,
    title: "Hong Kong",
    category: "SE Asia",
    price: 750,
    img: "https://images.unsplash.com/photo-1619187269972-267d2b78a423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    desc: `A shoppers mecca for designers goods and a foodies paradise. We will also tour some of Hong Kong's city viewpoints and go island hopping in the eastern New Territories.`,
  },
  {
    id: 4,
    title: "Mont Saint Michel",
    category: "Europe",
    price: 300,
    img: "https://images.unsplash.com/photo-1599921880418-56222de8b71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    desc: `We will tour around Normandy's rich green plains savouring the local cuisine and customs. The highlight of the trip will be the visit to the tidal island its gothic style abbey and commune.`,
  },
  {
    id: 5,
    title: "Montreal",
    category: "Americas",
    price: 800,
    img: "https://images.unsplash.com/photo-1519178251-5390a0fb6a3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    desc: `Montreal is an eclectic mix of cultures and customs, vibrant with style and music but also cultured and laid-back activities. There is something to please all types of travellers.`,
  },
  {
    id: 6,
    title: "Dubai",
    category: "Middle East",
    price: 600,
    img: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    desc: `Dubai is certainly larger than life. With futuristic glass and steel buildings that pierce the sky, to flashy sportscars traversing the labyrinth of tarmac. We will tour the Burj Khalifa, sample some of the local cuisine and  head to the desert for some incredible views of the city within a hot air balloon.`,
  },
  {
    id: 7,
    title: "Barcelona",
    category: "Europe",
    price: 200,
    img: "https://images.unsplash.com/photo-1597032868256-1f659aeb0d49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    desc: `Savouring tapas and red wines, taking in the city sights as well as the main attraction which is the tour of the Sagrada Familia cathedral.`,
  },
  {
    id: 8,
    title: "Okinawa",
    category: "SE Asia",
    price: 850,
    img: "https://images.unsplash.com/photo-1506918357967-b358ad447c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    desc: `If chilling on the beach and watersports are more of your holiday choice, Okinawa is sure to impress. The locals are extremely friendly and welcoming to tourists. You will enjoy the beach town vibes as well as the calming coastal views.`,
  },
  {
    id: 9,
    title: "Iceland",
    category: "Europe",
    price: 300,
    img: "https://images.unsplash.com/photo-1503104538136-7491acef4d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    desc: `Take in the majesty of Iceland's waterfalls and glaciers. Explore the capital city. Capture the panoramic scenes as you drive along the infamous golden circle road.`,
  },
];

const articleWrapper = document.querySelector(".section-center");
const btnWrapper = document.querySelector('.btn-container');
const allBtn = document.querySelector('[data-id=all]');
const americaBtn = document.querySelector('[data-id=Americas]');


// render all items on page load

const allItems = data.map((location) => {
  let article = document.createElement("article");
  let img = document.createElement("img");
  let contentDiv = document.createElement("div");
  let hdrTag = document.createElement("header");
  let title = document.createElement("h4");
  let price = document.createElement("h4");
  let desc = document.createElement("p");

  // add classnames, attrs and textContent
  article.classList.add("menu-item");
  article.setAttribute("location", `${location.category}`);
  img.src = location.img;
  img.alt = "menu item";
  img.classList.add("photo");
  contentDiv.classList.add("item-info");

  title.textContent = location.title;
  price.textContent = `$${location.price}`;
  price.classList.add("price");
  desc.textContent = location.desc;
  desc.classList.add("item-text");

  // append to the DOM
  contentDiv.appendChild(hdrTag);
  hdrTag.appendChild(title);
  hdrTag.appendChild(price);

  contentDiv.appendChild(desc);

  article.appendChild(img);
  article.appendChild(contentDiv);

  articleWrapper.appendChild(article);
  return article;
});


const getAmData = () => {
// console.log(allItems);
// console.log(allItems[0].attributes.location.value);
const result = allItems.filter((place) => place.attributes.location.value === 'Americas');
console.log(result);
return result;
}

allBtn.addEventListener('click', allItems);

americaBtn.addEventListener('click', getAmData);