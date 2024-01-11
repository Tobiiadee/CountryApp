/** @format */
import { Fragment } from "react";
import { ActiveContextHandler } from "./Store/Context/state-context";
import BodyMain from "../src/Components/Main/Body/BodyMain";

function App() {
  return (
    <div>
      <Fragment>
        <div className='relative'>
          <ActiveContextHandler>
            <BodyMain/>       
          </ActiveContextHandler>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
