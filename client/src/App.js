import { Context } from "./Components/Contextreducer.js";
import EffectController from "./Controllers/EffectController.jsx";
import RoutesLayout from "./Controllers/RoutesLayout.jsx";

import "./App.css";

function App() {
  return (
    <Context>
      <EffectController>
        <RoutesLayout />
      </EffectController>
    </Context>
  );
}

export default App;
