import dichotomy from "../methods/Dichotomy";
import goldenCut from "../methods/GoldenCut";
import midPoint from "../methods/MiddlePoint";
import easeItterations from "../methods/EaseItterations";
import Khord from "../methods/Khord";
import Newton from "../methods/Newton";

import fun from "./fun";

export const handleCalculate = (currentExercise, numA, numB, Epsilon, count, setNumC, setCount) => {
    if (
        isNaN(numA) ||
        isNaN(numB) ||
        typeof numA !== "number" ||
        typeof numB !== "number"
    ) {
        console.log("Неверный формат");
    } else {
        switch (currentExercise) {
            case "Dichotomy":
                setNumC(
                    dichotomy(fun, numA, numB, Epsilon, count, setCount)
                );
                break;

            case "GoldenCut":
                setNumC(
                    goldenCut(fun, numA, numB, Epsilon, count, setCount)
                );
                break;

            case "MiddlePoint":
                setNumC(
                    midPoint(fun, numA, numB, Epsilon, count, setCount)
                );
                break;
            case "EaseItterations":
                setNumC(
                    easeItterations(fun, numA, numB, Epsilon, count, setCount)
                );
                break;
            case "Khord":
                setNumC(
                    Khord(fun, numA, numB, Epsilon, count, setCount)
                );
                break;    
            case "Newton":
                setNumC(
                    Newton(fun, numA, numB, Epsilon, count, setCount)
                );
                break;

            default:
                setNumC(0);
        }
    }
};