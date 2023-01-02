import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
