import { React, useState, useEffect } from "react";
import classes from "./App.module.css";
import ValueInputs from "./components/ui/inputs/ValueInputs";
import CardMethod from "./components/ui/card/CardMethod";

function App() {
	const [numA, setNumA] = useState();
	const [numB, setNumB] = useState();

  const [dichotomyValue, setValueDichotomy] = useState(0);
  const [goldenValue, setValueGolden] = useState(0);
  const [middleValue, setValueMiddle] = useState(0);
  const [easeValue, setValueEasy] = useState(0);
  const [khordValue, setValueKhord] = useState(0);
  const [newtonValue, setValueNewton] = useState(0);

  const [dichotomyCount, setDichotomy] = useState(0);
  const [goldenCount, setGolden] = useState(0);
  const [middleCount, setMiddle] = useState(0);
  const [easyCount, setEasy] = useState(0);
  const [khordCount, setKhord] = useState(0);
  const [newtonCount, setNewton] = useState(0);

	const [Epsilon, setEpsilon] = useState(0.0001);

	const [cards, setCards] = useState([
		{ 
      id: 1,
      name: "Дихотомия",
      title: "дихотомии",
      calling: "Dichotomy",
      value: dichotomyValue, 
      valueSeter: setValueDichotomy,
      count: dichotomyCount,
      countSeter: setDichotomy,
    },
		{ 
      id: 2,
      name: "Золотое сечение",
      title: "золотого сечения",
      calling: "GoldenCut",
      value: goldenValue, 
      valueSeter: setValueGolden,
      count: goldenCount,
      countSeter: setGolden,
    },
		{ 
      id: 3,
      name: "Средняя точка",
      title: "средней точки",
      calling: "MiddlePoint",
      value: middleValue, 
      valueSeter: setValueMiddle,
      count: middleCount,
      countSeter: setMiddle,
    },
		{ 
      id: 4,
      name: "Простые итерации",
      title: "простых итерации",
      calling: "EaseItterations",
      value: easeValue, 
      valueSeter: setValueEasy,
      count: easyCount,
      countSeter: setEasy,
    },
    { 
      id: 5,
      name: "Хорд",
      title: "хорд",
      calling: "Khord",
      value: khordValue, 
      valueSeter: setValueKhord,
      count: khordCount,
      countSeter: setKhord,
    },
    { 
      id: 6,
      name: "Метод Ньютона",
      title: "Ньютона",
      calling: "Newton",
      value: newtonValue, 
      valueSeter: setValueNewton,
      count: newtonCount,
      countSeter: setNewton,
    },
	]);

  useEffect(() => {
    setCards(prevCards => prevCards.map(card => {
      
      if (card.calling === "Dichotomy") {
        return { ...card, value: dichotomyValue, count: dichotomyCount };
      }

      if (card.calling === "GoldenCut") {
        return { ...card, value: goldenValue, count: goldenCount };
      }

      if (card.calling === "MiddlePoint") {
        return { ...card, value: middleValue, count: middleCount };
      }

      if (card.calling === "EaseItterations") {
        return { ...card, value: easeValue, count: easyCount };
      }

      if (card.calling === "Khord") {
        return { ...card, value: khordValue, count: khordCount };
      }

      if (card.calling === "Newton") {
        return { ...card, value: newtonValue, count: newtonCount };
      }
      
      return card;
    }));
  }, [
      dichotomyValue, dichotomyCount, 
      goldenValue, goldenCount, 
      middleValue, middleCount, 
      easeValue, easyCount,
      khordValue, khordCount,
      newtonValue, newtonCount
    ]);

	return (
		<div className={classes.App}>
			<h1 style={{textAlign: 'center'}}>Внесите данные и выберите метод:</h1>
      <div className={classes.inputBox}>
        <ValueInputs 
          onChange={e => setNumA(+e.target.value)} 
          placeholder="Введите значение A"
        />
        <ValueInputs 
          onChange={e => setNumB(+e.target.value)} 
          placeholder="Введите значение B"
        />
        <ValueInputs 
          onChange={e => setEpsilon(e.target.value)} 
          placeholder="Введите значение Epsilon"
          value={Epsilon}
        />
      </div>
      <div className={classes.cardBox}>
        {cards.map((card) => 
          <CardMethod 
            numA={numA} 
            numB={numB} 
            value={card.value}
            Epsilon={Epsilon}
            count={card.count}
            setValue={card.valueSeter}
            setCount={card.countSeter}
            card={card} 
            key={card.id}
          />
        )}
      </div>
		</div>
	);
}

export default App;