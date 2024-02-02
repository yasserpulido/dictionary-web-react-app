import { Navigation, TextField } from "./components";

function App() {
  return (
    <div className="container mx-auto pt-16 px-80 h-full">
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <Navigation />
        <TextField />
      </div>
    </div>
  );
}

export default App;
