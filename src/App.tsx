import { FiberContainer } from "./FiberContainer";
import { Leva } from "leva";
import { isBrowser } from "react-device-detect";

function App() {
  if (isBrowser) {
    return (
      <div className="w-full h-full">
        <div className="">
          <FiberContainer />
        </div>
        <div>
          <Leva collapsed={true} />
        </div>
      </div>
    );
  } else {
    return (
      <p className=' text-lg font-bold flex flex-row min-h-screen justify-center items-center'>Site built for desktop only</p>
    );
  }
}

export default App;
