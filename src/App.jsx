import './App.css'
import 'tailwindcss/tailwind.css';
import GameContainer from "./components/GameContainer.jsx";
import CardContextProvider from "./contexts/CardContextProvider.jsx";

function App() {

  return (
    <>
        {/*<CardContextProvider>*/}
            <GameContainer />
        {/*</CardContextProvider>*/}
    </>
  )
}

export default App
