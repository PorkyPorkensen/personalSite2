import burgerImg from "./images/BBpng.png";
import tcgImg from "./images/tt.png";
import SSImg from "./images/SS.png";
import lorImg from "./images/LOR.png";
import morecoinImg from "./images/mc.png";
import cqImg from "./images/cq.png";
import sportPic from "./images/ss1.png";

export const projects = [
    {
    id: 0,
    name: "SportSync",
    image: sportPic, // Replace with actual project image
    short: "Web App for Sports enthusiasts to check current NFL games, player stats, news and playoff bracket creation",
    details: "My first venture into AWS and my first Solo PostgreSQL project. A full-stack web app for sports enthusiasts to check current NFL games, player stats, news and playoff bracket creation. Features include live game updates, team statistics, news articles, and a leaderboard for user-generated playoff brackets.",
    stack: ["AWS", "PostgreSQL", "React", "TailwindCSS","Node.js", "Express", "Firebase", "CSS", "Python",],
    url: "https://www.sportsync.cc/",
  },
  {
    id: 1,
    name: "TCGTracker",
    image: tcgImg, // Replace with actual project image
    short: "Full-stack Web App for Pokémon TCG collectors to get info on cards and manage collections",
    details: "A full-stack website for Pokémon TCG collectors to get info on cards and manage collections. Features include card sale searching using both eBay and PokemonTCG API, collection management, and user authentication.",
    stack: ["Typescript", "React", "Node.js", "Express", "Firebase", "CSS", "eBay API", "PokemonTCG API",],
    url: "https://www.tcgtracker.ca/",
  },
{
    id: 2,
    name: "BurgerBros Restaurant",
    image: burgerImg, // Replace with actual project image
    short: "Full-stack website for a burger restaurant.",
    details: "A full-stack website for a burger restaurant, featuring a dynamic menu, online ordering, and admin dashboard for managing orders and menu items.",
    stack: ["JavaScript", "React", "Node.js", "Express", "Firebase", "CSS"],
    url: 'https://burgerbros-site.vercel.app/',
  },
  {
    id: 3,
    name: "SOLScanner",
    image: SSImg, // Replace with actual project image
    short: "Wallet Lookup and Memecoin Viewer for the Solana Blockchain",
    details: "Simple web app for looking up Solana wallets and viewing memecoins. Features include wallet address input and portfolio display.",
    stack: ["JavaScript", "React", "Node.js", "Express", "RESTful API", "CSS", "Helius API", ],
    url: 'https://sl-frontend-psi.vercel.app/',

  },
  {
    id: 4,
    name: "League of Random",
    image: lorImg, // Replace with actual project image
    short: "Random Champion and Build Generator for League of Legends",
    details: "Simple web app for generating random League of Legends champions and builds. Features include champion selection and build randomization with user input.",
    stack: ["Typescript", "React", "Express", "RESTful API", "CSS", "LOL API", ],
    url: 'https://leagueofrandom-dusky.vercel.app/',
  },
  {
    id: 5,
    name: "MoreCoin",
    image: morecoinImg, // Replace with actual project image
    short: "MoreCoin - A Fictional Memecoin Landing Page",
    details: "A fictional memecoin landing page for MoreCoin, featuring a modern design, responsive layout, and sections for features, roadmap, and team.",
    stack: ["JavaScript", "React", "CSS", "Animate On Scroll" ],
    url: 'https://more-coin.vercel.app/', 
  },
    {
    id: 6,
    name: "Crossing Quizzes",
    image: cqImg, // Replace with actual project image
    short: "Crossing Quizzes - A Quiz App for Animal Crossing Fans",
    details: "A quiz app for Animal Crossing fans, featuring questions about characters, using the Nookipedia API, and a scoring system.",
    stack: ["JavaScript", "React", "CSS", "RESTful API", "Nookipedia API" ],
    url: 'https://ac-quiz.vercel.app/',
    },
  // Add more projects here
];