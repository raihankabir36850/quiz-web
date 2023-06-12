import photography from "../Images/photography.jpg";
import artificial from "../Images/artificial.jpg";
import cooking from "../Images/cooking.jpg";
import travel from "../Images/travel.jpg";
import fitness from "../Images/fitness.jpg";
import development from "../Images/development.jpg";
const topics = [
  {
    id: "nature",
    image: `${photography}`,
    title: "Nature Photography",
    path: "/quiz/nature-photography",
  },
  {
    id: "artificial",
    image: `${artificial}`,
    title: "Artificial Intelligence",
    path: "/quiz/artificial-intelligence",
  },
  {
    id: "cooking",
    image: `${cooking}`,
    title: "Healthy Cooking",
    path: "/quiz/Healthy-Cooking",
  },
  {
    id: "travel",
    image: `${travel}`,
    title: "Travel Destinations",
    path: "/quiz/travel-Destinations",
  },
  {
    id: "development",
    image: `${fitness}`,
    title: "Web Development",
    path: "/quiz/Web-Development",
  },
  {
    id: "fitness",
    image: `${development}`,
    title: "Fitness and Exercise",
    path: "/quiz/Fitness-Exercise",
  },
];

export default topics;
