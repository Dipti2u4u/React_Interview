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
import Validation from "./Components/FormValidation/Validation";
import Reducerhook from "./Components/Reducer/Reducerhook";
import { MessageProvider } from "./Components/NewContext/Context";
import Consumer_One from "./Components/NewContext/Consumer_One";

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
      {/* <ParentComp /> */}
      {/* <UseRefhook /> */}
      {/* <Validation /> */}
      {/* <Reducerhook /> */}
      <MessageProvider>
        <Consumer_One />
      </MessageProvider>
    </div>
  );
};

export default App;
