import React, { useState } from "react";
import CalculatorTitle from "./CalculatorTitle";
import OutputScreen from "./OutputScreen";
import OutputScreenRow from "./OutputScreenRow";
import "../index.css"
const Calculator = () => {
    const [display, setDisplay] = useState("");
    const [expression, setExpression] = useState([]);
    const handelClick = (val) => {
        if(val === "clear"){
            setDisplay("");
            setExpression([]);
        }
        else if(val === "delete"){
            if(expression.length >= 1){
                setDisplay(expression.pop() + " removed");
                setExpression(expression);
            }
        }
        else{
            setDisplay(val);
            setExpression([...expression, val]);
        }
      };      

    const handleResult = () => {
        const result = () =>{
            var ans = expression
                .join("")
                .split(/(\D)/g)
                .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
                .reduce((acc, value, index, array) => {
                    switch (value) {
                      case "+":
                        return (acc = acc + array[index + 1]);
                      case "-":
                        return (acc = acc - array[index + 1]);
                      case "x":
                        return (acc = acc * array[index + 1]);
                      case "÷":
                        return (acc = acc / array[index + 1]);
                      default:
                        return acc;
                    }
                  });
            return ans;
        }
        setDisplay(result);
        setExpression("");
    }
    return (
        <div className="frame">
            <CalculatorTitle value="OneCulator" />
            <div className="minCal">
                <OutputScreenRow className='display' value={display} />
                <OutputScreenRow className="expression" value={expression} />
                <div className="button-row">
                    <button onClick={()=>handelClick("clear")}>Clear</button>
                    <button onClick={()=>handelClick("delete")}>Delete</button>
                    <button onClick={()=>handelClick(".")}>.</button>
                    <button onClick={()=>handelClick("÷")}>÷</button>
                </div>
                <div className="button-row">
                    <button onClick={()=>handelClick("7")}>7</button>
                    <button onClick={()=>handelClick("8")}>8</button>
                    <button onClick={()=>handelClick("9")}>9</button>
                    <button onClick={()=>handelClick("x")}>x</button>
                </div>
                <div className="button-row">
                    <button onClick={()=>handelClick("4")}>4</button>
                    <button onClick={()=>handelClick("5")}>5</button>
                    <button onClick={()=>handelClick("6")}>6</button>
                    <button onClick={()=>handelClick("-")}>-</button>
                </div>
                <div className="button-row">
                    <button onClick={()=>handelClick("1")}>1</button>
                    <button onClick={()=>handelClick("2")}>2</button>
                    <button onClick={()=>handelClick("3")}>3</button>
                    <button onClick={()=>handelClick("+")}>+</button>
                </div>
                <div className="button-row">
                    <button onClick={()=>handelClick("0")}>0</button>
                    <button onClick={()=>handleResult()}>=</button>
                </div>
            </div>
        </div>
    )
};

export default Calculator;