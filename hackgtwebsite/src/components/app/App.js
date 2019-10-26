import React from 'react';
import logo from '../../assets/images/logo.svg';
import { createWorker } from 'tesseract.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function runOcr() {
    const worker = createWorker({
        logger: m => console.log(m),
    });
    const doOCR = async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize('tile.png');
        setOcr(text);
    };
    const [ocr, setOcr] = useState('Recognizing...');
    useEffect(() => {
        doOCR();
    });
    return (
        <div className="App">
            <p>{ocr}</p>
        </div>
    );
}

export default App;
