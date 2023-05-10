import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/Main.jsx";
const App = () => {
  //redux boilerplate
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Add</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Remove</button>
      {count}
      <Main />
    </>
  );
};

export default App;
