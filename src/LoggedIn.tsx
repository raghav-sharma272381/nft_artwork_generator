import { useState } from 'react';
import { uauth } from './config/unstoppableDomain';

import E1 from './E1.png';
import E2 from './E2.png';
import N1 from './N1.png';
import N2 from './N2.png';
import M1 from './M1.png';
import M2 from './M2.png';

import OOO from './000.png';
import OOI from './001.png';
import OII from './011.png';
import OIO from './010.png';
import IOI from './101.png';
import III from './111.png';
import IIO from './110.png';
import IOO from './100.png';

function App() {
  const [Eye, setEye] = useState(false);
  const [Nose, setNose] = useState(false);
  const [Mouth, setMouth] = useState(false);

  const logout = () => uauth.logout();

  return (
    <div className="App">
      <header className="App-header">
        <p>NFT artwork generator</p>
      </header>
      <div className="body">
        <p>Create NFT artwork</p>
        <p>Choose one opiton of each</p>
        <div className="form-row">
          <div className="form-column">
            <button onClick={() => setEye(false)}>
              <img className="options-image" src={E1} alt="E1" />
            </button>
          </div>
          <div className="form-column">
            <button onClick={() => setEye(true)}>
              <img className="options-image" src={E2} alt="E2" />
            </button>
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <button onClick={() => setNose(false)}>
              <img className="options-image" src={N1} alt="N1" />
            </button>
          </div>
          <div className="form-column">
            <button onClick={() => setNose(true)}>
              <img className="options-image" src={N2} alt="N2" />
            </button>
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <button onClick={() => setMouth(false)}>
              <img className="options-image" src={M1} alt="M1" />
            </button>
          </div>
          <div className="form-column">
            <button onClick={() => setMouth(true)}>
              <img className="options-image" src={M2} alt="M2" />
            </button>
          </div>
        </div>
        <button className="button bg-black text-white p-2 m-2 rounded" onClick={logout}>
          <p>Logout</p>
        </button>
        <div className="form-row">
          {Mouth === false && Eye === false && Nose === false ? (
            <div>
              <p> Default nft artwork</p>
              <img className="options-image" src={OOO} alt="OOO" />
            </div>
          ) : (
            <div />
          )}
          {Mouth === false && Eye === false && Nose === true ? (
            <div>
              <p> </p>
              <img className="options-image" src={OOI} alt="OOI" />
            </div>
          ) : (
            <div />
          )}
          {Mouth === false && Eye === true && Nose === true ? (
            <div>
              <p> </p>
              <img className="options-image" src={OII} alt="OII" />
            </div>
          ) : (
            <div />
          )}
          {Mouth === false && Eye === true && Nose === false ? (
            <div>
              <p> </p>
              <img className="options-image" src={OIO} alt="OIO" />
            </div>
          ) : (
            <div />
          )}
          {Mouth === true && Eye === false && Nose === true ? (
            <div>
              <p> </p>
              <img className="options-image" src={IOI} alt="IOI" />
            </div>
          ) : (
            <div />
          )}
          {Mouth === true && Eye === true && Nose === true ? (
            <div>
              <p> </p>
              <img className="options-image" src={III} alt="III" />
            </div>
          ) : (
            <div />
          )}
          {Mouth === true && Eye === true && Nose === false ? (
            <div>
              <p> </p>
              <img className="options-image" src={IIO} alt="IIO" />
            </div>
          ) : (
            <div />
          )}
          {Mouth === true && Eye === false && Nose === false ? (
            <div>
              <p> </p>
              <img className="options-image" src={IOO} alt="IOO" />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
