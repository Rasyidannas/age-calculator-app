import "./ResultCalculator.css";

const ResultCalculator = (props) => {
  return (
    <div className="result__warp">
      <h1 className="result__title"><span>{props.onResultCalculate.years}</span>years</h1>
      <h1 className="result__title"><span>{props.onResultCalculate.months}</span>months</h1>
      <h1 className="result__title"><span>{props.onResultCalculate.days}</span>days</h1>
    </div>
  );
};

export default ResultCalculator;
