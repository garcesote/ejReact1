import { useState } from "react";

const Layout = () => {

    const [inputA, setInputA] = useState('');
    const [inputB, setInputB] = useState('');
    const [result, setResult] = useState('');

    const inputAHandler = (event) => {
        setInputA(event.target.value);
    }

    const inputBHandler = (event) => {
        setInputB(event.target.value);
    }

    const operationHandler = (operation) => {

        var a = parseInt(inputA);
        var b = parseInt(inputB);

        switch(operation){
            case 0: setResult(a+b); break;
            case 1: setResult(a-b); break;
            case 2: setResult(a*b); break;
            case 3: setResult(a/b); break;
            default: setResult(a+b); break;
        }
    }

    return(

        <div class="justifycontent-center">
            <form>
                <div class="container-fluid row">
                    <div class="col-md-6 border text-center bg-light">
                        <span class="input-group-text m-4">
                            <p class="h3">A: </p><input onChange={inputAHandler} type='number' value={inputA} 
                            placeholder="Introduce first number" class="form-control w-50 m-4 h-5"/>
                        </span>
                    </div>
                    <div class="col-md-6 border text-center bg-light">
                        <span class="input-group-text m-4">
                            <p class="h3">B: </p> <input onChange={inputBHandler} type='number' value={inputB} 
                            placeholder="Introduce second number" class="form-control w-50 m-4 h-5"/>
                        </span>
                    </div>
                </div>
            </form>

            <div class="container-fluid row mt-5">
                <div class="col-md-3 border text-center bg-light">
                    <button type='submit' class="btn btn-outline-primary" onClick={() => {
                        operationHandler(0);
                    }}>+</button>
                </div>
                <div class="col-md-3 border text-center bg-light">
                    <button type='submit' class="btn btn-outline-primary" onClick={() => {
                        operationHandler(1);
                    }}>-</button>
                </div>
                <div class="col-md-3 border text-center bg-light">
                <button type='submit' class="btn btn-outline-primary" onClick={() => {
                        operationHandler(2);
                    }}>x</button>
                </div>
                <div class="col-md-3 border text-center bg-light">
                <button type='submit' class="btn btn-outline-primary" onClick={() => {
                        operationHandler(3);
                    }}>/</button>
                </div>
            </div>
            
            <div class="card-body text-center mt-5 border row">
                    <div class="card-title border w-50 h3">Result: </div>
                   <div class="card-title border w-50 h4">{result}</div>
            </div>
        </div>
        
    )
}

export default Layout;