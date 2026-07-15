export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
}

export const toursData: Tour[] = [
  {
    id: "1",
    slug: "naran-kaghan",
    title: "Naran Kaghan Valley Tour",
    description: "See the breathtaking Saif-ul-Muluk lake, giant green mountains, and enjoy the cold, freezing river water.",
    image: "/toursImage/naran-kaghan.jpg",
    price: "Rs. 25,000",
    duration: "3 Days / 2 Nights"
  },
  {
    id: "2",
    slug: "murree-hills",
    title: "Murree & Nathia Gali Hills",
    description: "Walk on the famous Mall Road, ride the chairlift, and enjoy the beautiful foggy pine trees and cold weather.",
    image: "/toursImage/murreeHills.jpg",
    price: "Rs. 15,000",
    duration: "2 Days / 1 Night"
  },
  {
    id: "3",
    slug: "hunza-valley",
    title: "Magical Hunza Valley",
    description: "Explore ancient forts, see Attabad Lake's bright blue water, and view the massive Rakaposhi mountain peak.",
    image: "/toursImage/hunzaValley.jpg",
    price: "Rs. 45,000",
    duration: "5 Days / 4 Nights"
  },
  {
    id: "4",
    slug: "skardu-valley",
    title: "Skardu & Shangrila Resort",
    description: "Visit the cold desert, Upper Kachura Lake, and the famous red-roofed Shangrila Resort surrounded by giant rocks.",
    image: "/toursImage/skarduValley.jpg",
    price: "Rs. 55,000",
    duration: "6 Days / 5 Nights"
  },
  {
    id: "5",
    slug: "swat-valley",
    title: "Swat Valley & Malam Jabba",
    description: "Visit the Switzerland of Pakistan! Play in the snow at Malam Jabba ski resort and see Kalam's beautiful rivers.",
    image: "/toursImage/swatValley.jpg",
    price: "Rs. 22,000",
    duration: "3 Days / 2 Nights"
  },
  {
    id: "6",
    slug: "kumrat-valley",
    title: "Kumrat Valley Pine Forest",
    description: "Camp inside massive, tall foggy pine trees and see the majestic Jahaz Banda meadows and waterfalls.",
    image: "toursImage/kumratValley.jpg",
    price: "Rs. 28,000",
    duration: "4 Days / 3 Nights"
  },
  {
    id: "7",
    slug: "fairytale-meadows",
    title: "Fairy Meadows & Nanga Parbat",
    description: "Hike to the lush green meadows at the base of the killer mountain, Nanga Parbat, and sleep under a sky full of stars.",
    image: "/toursImage/fairytaleMeadows.jpg",
    price: "Rs. 35,000",
    duration: "5 Days / 4 Nights"
  },
  {
    id: "8",
    slug: "neelum-valley",
    title: "Neelum Valley Azad Kashmir",
    description: "Explore the paradise on earth! See the lush green hills of Sharda, Kel, and the rushing blue water of Neelum River.",
    image: "/toursImage/neelumValley.jpg",
    price: "Rs. 24,000",
    duration: "3 Days / 2 Nights"
  },
  {
    id: "9",
    slug: "chitral-kalash",
    title: "Chitral & Kalash Valley",
    description: "Meet the unique and colorful Kalash culture, see their traditional dances, and explore the beautiful Chitral Fort.",
    image: "/toursImage/chitralKalash.jpg",
    price: "Rs. 38,000",
    duration: "4 Days / 3 Nights"
  },
  {
    id: "10",
    slug: "gwadar-beach",
    title: "Gwadar & Hammerhead Beach",
    description: "Drive on the beautiful Makran Coastal Highway and see the golden desert meeting the deep blue Arabian Sea.",
    image: "/toursImage/gwadarBeach.jpg",
    price: "Rs. 32,000",
    duration: "3 Days / 2 Nights"
  }
];