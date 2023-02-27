import { useState, useRef, useEffect} from "react";

const Layout = () => {

    const [inputA, setInputA] = useState('');
    const [inputB, setInputB] = useState('');
    const [result, setResult] = useState('');
    const [opr, setOperation] = useState('');

    const sumaRef = useRef();
    const restaRef = useRef();
    const multRef = useRef();
    const divRef = useRef();

    const inputAHandler = (event) => {
        setInputA(event.target.value);
    }

    const inputBHandler = (event) => {
        setInputB(event.target.value);
    }

    const operationHandler = (operation) => {

        var a = parseInt(inputA);
        var b = parseInt(inputB);

        console.log(opr);

        if(opr=='suma'){
            console.log(opr);
            sumaRef.current.className = "btn btn-outline-primary"
        }else if(opr=='resta'){
            console.log(opr);
            restaRef.current.className = "btn btn-outline-primary"
        }else if(opr=='multiplicacion'){
            console.log(opr);
            multRef.current.className = "btn btn-outline-primary"
        }else if(opr=='division'){
            console.log(opr);
            divRef.current.className = "btn btn-outline-primary"
        }

        switch(operation){
            case 0: setResult(a+b); setOperation('suma'); sumaRef.current.className = "btn btn-outline-primary active" ; break;
            case 1: setResult(a-b); setOperation('resta'); restaRef.current.className = "btn btn-outline-primary active"; break;
            case 2: setResult(a*b); setOperation('multiplicacion'); multRef.current.className = "btn btn-outline-primary active"; break;
            case 3: setResult(a/b); setOperation('division'); divRef.current.className = "btn btn-outline-primary active"; break;
            default: setResult(a+b); setOperation('suma'); break;
        }
    }

    return(
            <div className="justifycontent-center">
                <form>
                    <div class="container-fluid row">
                        <div class="col-md-6 text-center bg-light">
                            <span class="input-group-text m-4">
                                <p class="h3">A: </p><input  onChange={inputAHandler} type='number' value={inputA} 
                                placeholder="Introduce first number" class="form-control w-50 m-4 h-5"/>
                            </span>
                        </div>
                        <div class="col-md-6 text-center bg-light">
                            <span class="input-group-text m-4">
                                <p class="h3">B: </p> <input onChange={inputBHandler} type='number' value={inputB} 
                                placeholder="Introduce second number" class="form-control w-50 m-4 h-5"/>
                            </span>
                        </div>
                    </div>
                </form>

                <div class="container-fluid row mt-5">
                    <div class="col-md-3 text-center bg-light">
                        <button type='submit' ref={sumaRef} class="btn btn-outline-primary" onClick={() => {
                            operationHandler(0);
                        }}>+</button>
                    </div>
                    <div class="col-md-3 text-center bg-light">
                        <button type='submit' ref={restaRef} class="btn btn-outline-primary" onClick={() => {
                            operationHandler(1);
                        }}>-</button>
                    </div>
                    <div class="col-md-3 text-center bg-light">
                    <button type='submit' ref={multRef} class="btn btn-outline-primary" onClick={() => {
                            operationHandler(2);
                        }}>x</button>
                    </div>
                    <div class="col-md-3 text-center bg-light">
                    <button type='submit' ref={divRef} class="btn btn-outline-primary" onClick={() => {
                            operationHandler(3);
                        }}>/</button>
                    </div>
                </div>
                
                <div class="card-body text-center bg-light mt-5 row">
                    <div class="card-title w-50 h3">Result: </div>
                    <div class="card-title w-50 h4">{result}</div>
                </div>
            </div>
    )
}

export default Layout;