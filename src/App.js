/** @format */
import { Fragment } from "react";
import { ActiveContextHandler } from "./Store/Context/state-context";
import Body from "./Components/Main/Body/Body";

function App() {
  return (
    <div>
      <Fragment>
        <div className='relative'>
          <ActiveContextHandler>
            <Body />
          </ActiveContextHandler>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
