import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";


// Page links

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

// social media links

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

// services data
export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Saving Money",
    text: "At Greeny, we understand the importance of saving money while making eco-friendly choices. We offer you a unique opportunity to embark on unforgettable travel experiences that not only prioritize adventure and exploration but also help you save money in the long run.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Hiking",
    text: "At Greeny, we believe that hiking is more than just an outdoor activity, its a transformative experience that reconnects us with the natural world. ",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Experience the perfect blend of eco-consciousness and comfort at Greeny, where every detail of our accommodations is carefully crafted to ensure a cozy and environmentally-friendly stay.",
  },
];

//tours data

export const tours = [
  {
    id: 1,
    image: { tour1 },
    date: "august 23th, 2023",
    title: "4 Days Masai Mara Packages",
    info: "Experience the awe-inspiring Maasai Mara ecosystem, home to The Big Five and the Mighty Maasai Warriors. Let us plan your unforgettable 4-Day safari adventure, where you'll witness stunning African vistas, encounter majestic wildlife, and immerse yourself in the rich culture of the Maasai Mara.",
    location: "Kenya",
    duration: 4,
    cost: 35143,
  },
  {
    id: 2,
    image: { tour2 },
    date: "November 23th, 2023",
    title: "10 Days Seychelles",
    info: "Embark on a 10-day journey to the tropical paradise of Seychelles, where pristine beaches, turquoise waters, and lush landscapes await",
    location: "seychelles",
    duration: 10,
    cost: 37143,
  },

  {
    id: 3,
    image: { tour3 },
    date: "October 25th, 2023",
    title: "4 Diani Packages",
    info: "Immerse yourself in the tropical paradise of Kenya's coastline, where pristine white-sand beaches meet crystal-clear turquoise waters",
    location: "Kenya",
    duration: 5,
    cost: 40143,
  },

  {
    id: 4,
    image: { tour4 },
    date: "December 23th, 2023",
    title: " Mt Kenya Packages",
    info: "Immerse yourself in the awe-inspiring beauty of Africa's second highest peak, where snow-capped peaks, lush valleys, and diverse flora and fauna await. ",
    location: "Kenya",
    duration: 8,
    cost: 80143,
  },
];
