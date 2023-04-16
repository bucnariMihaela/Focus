import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./pages/NavigationBar";
import Games from "./pages/Games";
import MathGame from "./pages/MathGame";
import LetterGame from "./pages/LetterGame";
import FigureGame from "./pages/FigureGame";
import MatchingGame from "./pages/MatchingGame";
import Error from "./pages/Error";
import Authentication from "./pages/Authentication";

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
      imgL1: "/GamesCategoryImages/MathGame/plusMinus.png",
      imgL2: "/GamesCategoryImages/MathGame/multiplication.png",
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
      imgL1: "/GamesCategoryImages/LetterGame/farmAnimals.png",
      imgL2: "/GamesCategoryImages/LetterGame/facesfigures.png",
    },
    {
      id: "game3",
      name: "EMOȚII",
      image: "/GamesCategoryImages/faces.jpg",
      levels: 2,
      about: `După cum spune și denumirea, în acest joc trebuie să ne jucăm cu emoțiile! Jocul este împărțit în două nivele, primul nivel fiind alcătuit dintr-o imagine sugestivă cu o emoție. Pe baza acestei imagini, trebuie să se ghicească starea persoanei, cu ajutorul celor trei opțiuni. Aceste trei opțiuni constituie stări/emoții, doar una dintre cele trei fiind cea corectă. Pentru cel de al doilea nivel, se va afișa imaginea urmată de cuvântul corect, însă acest cuvânt este rearanjat, trebuind ca utilizatorul să aranjeze cuvântul pentru a afla forma corectă!`,
      howToPlay: `Pentru primul nivel se dă o imagine, iar utilizatorul are la dispoziție trei butoane cu trei stări. Se alege starea corespunzătoare imaginii apărute pe ecran. Dacă opțiunea aleasă este greșită, butonul își va schimba culoarea în roșu. Dacă opțiunea aleasă este corectă, butonul își va schimba culoarea în verde, celelalte opțiuni vor dispărea, și pe ecran se va afișa mesajul ”Ai ghicit corect!”. Pentru a trece la următoarea emoție se va apăsa butonul "URMĂTORUL". 
      Pentru cel de al doilea nivel, se dă o imagine, și starea aferentă imaginii, însă cuvântul este amestecat, utilizatorul fiind nevoit să rearanjeze literele, formând cuvântul corect. În spațiul destinat scrierii, se introduce cuvântul aranjat, dacă acesta este greșit nu se va întampla nimic, utilizatorul va fi nevoit să șteargă literele de la tastatură și să încerce din nou. Dacă cuvântul este corect, veți observa că spațiul unde este scris cuvântul se va dezactiva. Pentru a trece la următoarea emoție și la următorul cuvânt, se va apăsa butonul "URMĂTORUL". `,
      infos: `Categorie: Jocuri cu emoții      
      Vârstă: 6 ani+
      Limbi: Română, Engleză
      Preț: Gratuit`,
      url: "/figure",
      imgL1:"/GamesCategoryImages/FigureGame/facesEmotions.png",
      imgL2:"/GamesCategoryImages/FigureGame/facesEmotions.png",
    
    },
    {
      id: "game4",
      name: "PERECHI",
      image: "/GamesCategoryImages/matching.jpg",
      levels: 2,
      about: "După cum spune și denumirea, în acest joc trebuie ne jucăm cu numerele! Trebuie să introduci în căsuță cifra pentru a forma ecuația ecorectă! Jocul este împărțit în două nivele, pentru primul nivel este necesară cunoașterea și stăpânirea operațiilor de ordinul I (adunarea și scăderea), iar pentru cel de al doilea nivel este necesara cunoașterea și stăpânirea uneia dintre operațiile de ordinul II (înmulțirea).  ",
      howToPlay: `Se alege nivelul dorit, iar în funcție de operația primită, se rezolvă ecuația. Se introduce cifra în căsuța destinată, având la dispoziție 5 încercări. După cele 5 încercări sunteți nevoiți să treceți la următoarea ecuație. Dacă cifra pe care ați introdus-o nu este cea corectă va fi nevoie să o o ștergeți de la tastatura dumneavoastră, utilizând butonul necesar. Dacă cifra pe care are ați introdus-o este cea corectă, se va apăsa butonul "OK", iar pe ecran se va afișa mesajul "Felicitări, ați ghicit corect!", urmând ca apoi să apăsați butonul "URMĂTORUL" pentru a trece la următoare ecuație.`,
      infos: `Categorie: Jocuri Gaseste Perechea     
      Vârstă: 6 ani+
      Limbi: Română, Engleză
      Preț: Gratuit`,
      url: "/matching",
      imgL1: "/GamesCategoryImages/MatchingGame/fruits.png",
      imgL2: "/GamesCategoryImages/MatchingGame/vegetables.png",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />} errorElement={<Error></Error>}    >
          <Route
            index //default route 
            element={<Games games={gamesCategories}></Games>}
          ></Route>
          <Route path="/math/:level" element={<MathGame></MathGame>}></Route>
          <Route
            path="/letter/:level"
            element={<LetterGame></LetterGame>}
          ></Route>
          <Route path="/figure/:level" element={<FigureGame></FigureGame>}></Route>
          <Route path="/auth" element={<Authentication></Authentication>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
