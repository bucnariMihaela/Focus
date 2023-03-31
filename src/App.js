import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./pages/NavigationBar";
import Games from "./pages/Games";
import MathGame from "./pages/MathGame";
import LetterGame from "./pages/LetterGame";
import FigureGame from "./pages/FigureGame";

function App() {
  const gamesCategories = [
    {
      id: "game1",
      name: "Mathematics",
      image: "/GamesCategoryImages/math1.png",
      levels: 2,
      about: "This game require mathematic skills! This game has 3 levels!",
      howToPlay: "Add the missing number!",
      infos: "Age rating: 6+",
      url: "/math",
    },
    {
      id: "game2",
      name: "Letters",
      image: "/GamesCategoryImages/math1.png",
      levels: 2,
      about: "Find the missing letter and form the word!",
      howToPlay: "Add the missing letter!",
      infos: "Age rating: 6+",
      url: "/letter",
    },
    {
      id: "game3",
      name: "Game 3",
      image: "/GamesCategoryImages/math1.png",
      levels: 3,
      about: "Look over this figures and quess which one is the one you need!",
      howToPlay: "Select the one that fits the quest!",
      infos: "Age rating: 6+",
      url: "/figure",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route
            index
            element={<Games games={gamesCategories}></Games>}
          ></Route>
          <Route path="/math" element={<MathGame></MathGame>}></Route>
          <Route path="/letter/:level" element={<LetterGame></LetterGame>}></Route>
          <Route path="/figure" element={<FigureGame></FigureGame>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
