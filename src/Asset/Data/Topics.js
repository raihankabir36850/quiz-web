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
  },
  {
    id: "artificial",
    image: `${artificial}`,
    title: "Artificial Intelligence",
  },
  {
    id: "cooking",
    image: `${cooking}`,
    title: "Healthy Cooking",
  },
  {
    id: "travel",
    image: `${travel}`,
    title: "Travel Destinations",
  },
  {
    id: "development",
    image: `${fitness}`,
    title: "Web Development",
  },
  {
    id: "fitness",
    image: `${development}`,
    title: "Fitness and Exercise",
  },
];

export default topics;
