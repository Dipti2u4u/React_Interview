import React from "react";
import Usestatehook from "./Components/Usestatehook";
import Useeffecthook from "./Components/Useeffecthook";
import Parent from "./Components/Props/Parent";
import Jeje from "./Components/PropsDrilling/Jeje";
import { ThemeContextProvider } from "./Components/ContextProvider/ThemeContext";
import ThemeButton from "./Components/ContextConsumer/ThemeButton";
import ThemeContainer from "./Components/ThemeContainer";
import Memohook from "./Components/UseMemohook/memohook";
import ParentComp from "./Components/UseCallbackhook/ParentComp";
import UseRefhook from "./Components/UseRef hook/UseRefhook";


const App = () => {
  return (
    <div>
       {/* <Usestatehook /> */}
      {/* <Useeffecthook /> */}
      {/* <Parent />
      <Jeje />  */}
      {/* <ThemeContextProvider>
        <ThemeContainer />
        <ThemeButton />
      </ThemeContextProvider> */}
      {/* <Memohook /> */}
      <ParentComp />
      {/* <UseRefhook /> */}
    </div>
  );
};

export default App;
