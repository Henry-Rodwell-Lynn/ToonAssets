import { FiberContainer } from "./FiberContainer";
import { Leva } from "leva";

function App() {
  return (
    <div className="w-full h-full ">
      {/* <p className="absolute z-30 m-2 text-xl text-white">Cartoon Shader v1
      </p> */}
      <FiberContainer />
      <Leva collapsed={true} />
    </div>
  );
}

export default App;
