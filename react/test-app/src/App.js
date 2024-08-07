import JSX from "./components/JSX";
import Props from "./components/Props";
import SyntheticEvent from "./components/SyntheticEvent";
import State from "./components/State";
import DisplayCounter from "./components/ComponentLifecycle";

export default function App() {
  return (
    <>
      <JSX />
      <Props />
      <SyntheticEvent />
      <State />
      <DisplayCounter />
    </>
  );
}
