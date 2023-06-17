import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Quiz from "../Pages/Quiz/Quiz";
import topics from "../../Asset/Data/Topics";
import NotFound from "../Pages/404/NotFound";

function AllRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      {topics.map(({ id, path, title }) => {
        return (
          <Route
            path={path}
            element={<Quiz quizType={title} categoryID={id} />}
            key={id}
          />
        );
      })}
    </Routes>
  );
}

export default AllRoutes;
