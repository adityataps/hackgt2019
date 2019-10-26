import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import { createWorker } from 'tesseract.js';
import './App.css';


export let ctx;
// alert(ctx.back); //list of the sliced img



// fileSelectedHandler = event => {
//     console.log(event);
// }

class App extends Component {
    fileSelectedHandler = event => {
        console.log(event);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        {/*Edit <code>src/App.js</code> and save to reload.*/}

                        yuh igor


                    </p>


                    <div className="FileUpload">

                        <input type="file" onChange = {this.fileSelectedHandler}/>

                    </div>


                </header>
            </div>
        );
    }

    // function

    runOcr() {
        const worker = createWorker();
        (async () => {
            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            for (const [img1] of ctx.entries()) {
                const {data: {text}} = await worker.recognize(img1);
                console.log(text);
                await worker.terminate();
            }
            //const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
            //console.log(text);
            //await worker.terminate();
        })();
    }
}


export default App;
