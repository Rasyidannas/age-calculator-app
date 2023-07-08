import { useState } from "react";
import "./App.css";
import Card from "./components/UI/Card";
import FormCalculator from "./components/FormCalculator/FormCalculator";
import ResultCalculator from "./components/ResultCalculator/ResultCalculator";

function App() {
  const DUMMY__AGE = {
    days: "--",
    months: "--",
    years: "--",
  };

  const [isCalculate, isSetCalculate] = useState(DUMMY__AGE);

  // ageCalculateHadler
  const ageCalculateHandler = (enteredBirthday) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    //this limit each text field true
    if (
      parseInt(enteredBirthday.days) > 0 && parseInt(enteredBirthday.days) <= 31 &&
      parseInt(enteredBirthday.months) > 0 && parseInt(enteredBirthday.months) <= 12 &&
      parseInt(enteredBirthday.years) >= 1900 && parseInt(enteredBirthday.years) <= currentYear
    ) {
      // This is for user birth day
      // let userDate = new Date("1999-02-17");
      let userDate = new Date(
        `${enteredBirthday.years}-${enteredBirthday.months}-${enteredBirthday.days}`
      );
      const userYear = userDate.getFullYear();

      const ageUser = currentDate - userDate;
      const ageUserToDays = Math.floor(ageUser / (1000 * 60 * 60 * 24));

      const ageUserYear = Math.floor(ageUserToDays / 365);

      let leapYear = 0;
      //check for leap year/tahun kabisat
      for (let i = userYear; i <= currentYear; i++) {
        i % 4 == 0 ? leapYear++ : null;
      }

      const ageUserMonth = Math.floor(((ageUserToDays % 365) - leapYear) / 30);

      const ageUserDays = Math.floor(((ageUserToDays % 365) - leapYear) % 30);

      return isSetCalculate({
        days: ageUserDays,
        months: ageUserMonth,
        years: ageUserYear,
      });
    }

    // if this is for field empty
    return isSetCalculate(DUMMY__AGE);
  };

  return (
    <Card className="card__calculator">
      <div>
        <FormCalculator onCalculateData={ageCalculateHandler} />
      </div>

      <div className="line"></div>

      <div>
        <ResultCalculator onResultCalculate={isCalculate} />
      </div>
    </Card>
  );
}

export default App;
