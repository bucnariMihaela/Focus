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
      name: "NUMERE",
      image: "/GamesCategoryImages/math1.png",
      levels: 2,
      about: "După cum spune și denumirea, în acest joc trebuie ne jucăm cu numerele! Trebuie să introduci în căsuță cifra pentru a forma ecuația ecorectă! Jocul este împărțit în două nivele, pentru primul nivel este necesară cunoașterea și stăpânirea operațiilor de ordinul I (adunarea și scăderea), iar pentru cel de al doilea nivel este necesara cunoașterea și stăpânirea uneia dintre operațiile de ordinul II (înmulțirea).  ",
      howToPlay: `Se alege nivelul dorit, iar în funcție de operația primită, se rezolvă ecuația. Se introduce cifra în căsuța destinată, având la dispoziție 5 încercări. După cele 5 încercări sunteți nevoiți să treceți la următoarea ecuație. Dacă cifra pe care ați introdus-o nu este cea corectă va fi nevoie să o o ștergeți de la tastatura dumneavoastră, utilizând butonul necesar. Dacă cifra pe care are ați introdus-o este cea corectă, se va apăsa butonul "OK", iar pe ecran se va afișa mesajul "Felicitări, ați ghicit corect!", urmând ca apoi să apăsați butonul "URMĂTORUL" pentru a trece la următoare ecuație.`,
      infos: `Categorie: Jocuri Matematică       
      Vârstă: 6 ani+
      Limbi: Română, Engleză
      Preț: Gratuit`,
      url: "/math",
      imgL1: "/GamesCategoryImages/plusMinus.png",
      imgL2: "/GamesCategoryImages/multiplication.png",
    },
    {
      id: "game2",
      name: "LITERE",
      image: "/GamesCategoryImages/letters.jpg",
      levels: 2,
      about: `După cum spune și denumirea, în acest joc trebuie ne jucăm cu literele! Trebuie să ghicești și să completezi litera care lipsește din cuvântul dat, cu ajutorul unei imagini sugestive. 
               Jocul este împărțit în două nivele, primul nivel fiind alcătuit dintr-o serie de imagini cu animele domestice, iar cel de al doilea nivel conține o serie de imagini cu figuri geometrice.`,
      howToPlay: `Se alege nivelul dorit, iar în funcție de cuvântul primit, alături de imagine, se introduce litera lipsă, având la dispoziție 5 încercari. După cele 5 încercări sunteți nevoiți să treceți la următorul cuvânt.Dacă litera pe care ați introdus-o nu este cea corectă va fi nevoie să o ștergeți de la tastatura dumneavoastră, utilizând butonul necesar. Dacă ați ghicit și introdus litera corectă, pe ecran se va afișa un mesaj "Felicitări, ați ghicit corect!", urmând ca apoi să apăsați butonul "URMĂTORUL" pentru a trece la următorul cuvânt.`,
      infos: `Categorie: Jocuri Limba Română      
              Vârstă: 6 ani+
              Limbi: Română, Engleză
              Preț: Gratuit
              `,
      url: "/letter",
      imgL1: "/GamesCategoryImages/farmAnimals.png",
      imgL2: "/GamesCategoryImages/facesfigures.png",
    },
    {
      id: "game3",
      name: "EMOȚII",
      image: "/GamesCategoryImages/faces.jpg",
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
          <Route path="/math/:level" element={<MathGame></MathGame>}></Route>
          <Route
            path="/letter/:level"
            element={<LetterGame></LetterGame>}
          ></Route>
          <Route path="/figure" element={<FigureGame></FigureGame>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
