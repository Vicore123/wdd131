const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Tokyo Japan",
	  location: "Tokyo, Japan",
	  dedicated: "1980, October, 27",
	  area: 52970,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
	},
	{
	  templeName: "São Paulo Brazil",
	  location: "São Paulo, Brazil",
	  dedicated: "1978, October, 30",
	  area: 59246,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
	},
	{
	  templeName: "Johannesburg South Africa",
	  location: "Johannesburg, South Africa",
	  dedicated: "1985, August, 24",
	  area: 19430,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
	}
];

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home")

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

oldLink.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) < 1900 );
   createTempleCard(filteredTemples);
});
newLink.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) > 2000 );
   createTempleCard(filteredTemples);
})
largeLink.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => temple.area > 90000);
   createTempleCard(filteredTemples);
});
smallLink.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => temple.area < 10000);
   createTempleCard(filteredTemples);
})
homeLink.addEventListener("click", () => {
	createTempleCard(temples);
});

function createTempleCard(filteredTemples) {

	const collection = document.querySelector("#collection");
	collection.innerHTML = "";

	filteredTemples.forEach(temple => {
		let card = document.createElement("figure");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
		dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
		area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");
		img.setAttribute("width", "400")

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		collection.appendChild(card);
	});
}

createTempleCard(temples);

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;