import "./drumContainer.css"
import Drums from "./Drums";

const DrumContainer = () => {
  return (
    <div className="drum-wrapper" id="drum-machine">
        <div id="display">

        </div>
        <Drums />

    </div>
  )
}

export default DrumContainer;