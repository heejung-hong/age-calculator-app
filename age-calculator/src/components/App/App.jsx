import { useState } from "react";
import "./App.css";
import arrow from "../../assets/arrow.svg";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  // const [totalYears, setTotalYears] = useState(0)
  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");

  const d = new Date();
  const currentYear = d.getFullYear();
  // console.log(currentYear)
  const currentMonth = d.getMonth() + 1;
  // console.log(currentMonth)
  const currentDay = d.getDate();
  // console.log(currentDay)

  const totalDaysCurrent = currentYear * 365 + currentMonth * 31 + currentDay;
  // console.log(totalDaysCurrent)
  const totalYears = day + month * 31 + year * 365;
  // console.log(totalYears)

  const dateInput = `${year}/${month}/${day}`;
  console.log(dateInput);
  const dateObj = new Date(dateInput);
  console.log(dateObj);
  console.log(!isNaN(dateObj));

  function ErrorWhole() {
    if (day === "" || month === "" || year === "") {
      return "";
    } else if (
      !isNaN(dateObj) === false ||
      dateInput === `${year}/4/31` ||
      dateInput === `${year}/6/31` ||
      dateInput === `${year}/9/31` ||
      dateInput === `${year}/11/31` ||
      dateInput === `${year}/2/30` ||
      dateInput === `${year}/2/31`
    ) {
      return "Must be a valid date";
    }
  }

  function InvalidDay() {
    if (day === "") {
      return "";
    } else if (!day) {
      return "This field is required";
    } else if (!(0 < day && day < 32)) {
      return "Must be a valid day";
    }
  }

  function InvalidMonth() {
    if (month === "") {
      return "";
    } else if (!month) {
      return "This field is required";
    } else if (!(0 < month && month < 13)) {
      return "Must be a valid month";
    }
  }

  function InvalidYear() {
    if (year === "") {
      return "";
    } else if (!year) {
      return "This field is required";
    } else if (year > currentYear) {
      return "Must be in the past";
    }
  }

  function calBirth() {
    if (isNaN(dateObj) || dateObj > d) {
      return null;
    } else {
      setYears(Math.floor((totalDaysCurrent - totalYears) / 365));
      setMonths(Math.floor(((totalDaysCurrent - totalYears) % 365) / 31));
      setDays(Math.floor(((totalDaysCurrent - totalYears) % 365) % 31));
    }
  }

  return (
    <>
      <div className="bg-white w-[343px] h-[486px] lg:w-[840px] lg:h-[680px] p-[25px] lg:p-[56px] rounded-t-[25px] lg:rounded-t-[40px] rounded-bl-[25px] lg:rounded-bl-[40px] rounded-br-[100px] lg:rounded-br-[200px]">
        <div className="flex flex-row mt-[20px] mb-[25px] lg:mt-0 lg:mb-[10px]">
          <div className="w-[88px] h-[88px] lg:w-[160px] lg:h-[130px] mr-[15px] lg:mr-[32px]">
            <div className="font-semibold text-s text-left">
              {InvalidDay() || ErrorWhole() ? (
                <span className=" text-rose-500">DAY</span>
              ) : (
                <span className=" text-zinc-500 ">DAY</span>
              )}
            </div>
            <input
              id="day"
              name="day"
              type="text"
              placeholder="DD"
              value={day}
              onChange={(e) => setDay(+e.target.value)}
              className="w-[88px] h-[54px] lg:w-[160px] lg:h-[72px] border border-zinc-500 focus:border-purple-600 rounded-md my-[10px] pl-[10px] lg:pl-[20px] font-bold text-2xl lg:text-3xl  align-middle marker"
            />
            <div className="text-xs lg:text-sm italic text-rose-500 text-left">
              {InvalidDay() ? <InvalidDay /> : <ErrorWhole />}
            </div>
          </div>
          <div className="w-[88px] h-[88px] lg:w-[160px] lg:h-[130px] mr-[15px] lg:mr-[32px]">
            <div className="font-semibold text-s text-left">
              {InvalidMonth() || ErrorWhole() ? (
                <span className=" text-rose-500">MONTH</span>
              ) : (
                <span className=" text-zinc-500 ">MONTH</span>
              )}
            </div>
            <input
              id="month"
              name="month"
              type="text"
              placeholder="MM"
              value={month}
              onInput={(e) => setMonth(+e.target.value)}
              className="w-[88px] h-[54px] lg:w-[160px] lg:h-[72px] border border-zinc-500 rounded-md my-[10px] pl-[10px] lg:pl-[20px] font-bold text-2xl lg:text-3xl align-middle"
            />
            <div className="text-xs lg:text-sm italic text-rose-500 text-left">
              <InvalidMonth />
            </div>
          </div>
          <div className="w-[88px] h-[88px] lg:w-[160px] lg:h-[130px] mr-[15px] lg:mr-[32px]">
            <div className="font-semibold text-s text-left">
              {InvalidYear() || ErrorWhole() ? (
                <span className=" text-rose-500">YEAR</span>
              ) : (
                <span className=" text-zinc-500 ">YEAR</span>
              )}
            </div>
            <input
              id="year"
              name="year"
              type="text"
              placeholder="YYYY"
              value={year}
              onInput={(e) => setYear(+e.target.value)}
              className="w-[88px] h-[54px] lg:w-[160px] lg:h-[72px] border border-zinc-500 rounded-md my-[10px] pl-[10px] lg:pl-[20px] font-bold text-2xl lg:text-3xl align-middle"
            />
            <div className="text-xs lg:text-sm italic text-rose-500 text-left">
              <InvalidYear />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[295px] h-[64px] lg:w-[728px] lg:h-[96px] my-[32px] lg:my-0 items-center relative lg:static">
          <div className="w-[295px] lg:w-[632px] h-[1px] border border-zinc-300 relative lg:static"></div>
          <button
            onClick={calBirth}
            className="bg-purple-600 hover:bg-black w-[64px] h-[64px] lg:w-[96px] lg:h-[96px] z-10 lg:z-0 absolute lg:static top-[3%] left-[40%] rounded-full border-none"
          >
            <img src={arrow} className="m-auto"></img>
          </button>
        </div>
        <div className="w-[295px] h-[186px] lg:w-[728px] lg:h-[342px]">
          <div className="w-[295px] h-[62px] lg:w-[728px] lg:h-[114px] content-center">
            <div className="flex flex-row">
              <span
                value={years}
                className="flex flex-col h-[62px] lg:h-[114px] text-5xl lg:text-8xl font-bold text-violet-600 italic text-left"
              >
                {years}
              </span>
              <span className="w-[100px] h-[62px] lg:w-[413px] lg:h-[114px] text-5xl lg:text-8xl font-bold text-black italic text-left">
                &nbsp;years
              </span>
            </div>
          </div>
          <div className="w-[295px] h-[62px] lg:w-[728px] lg:h-[114px] content-center">
            <div className="flex flex-row">
              <span
                value={months}
                className="flex flex-col h-[62px] lg:h-[114px] text-5xl lg:text-8xl font-bold text-violet-600 italic text-left"
              >
                {months}
              </span>
              <span className="w-[100px] h-[62px] lg:w-[413px] lg:h-[114px] text-5xl lg:text-8xl font-bold text-black italic text-left">
                &nbsp;months
              </span>
            </div>
          </div>
          <div className="w-[295px] h-[62px] lg:w-[728px] lg:h-[114px] content-center">
            <div className="flex flex-row">
              <span
                value={days}
                className="flex flex-col h-[62px] lg:h-[114px] text-5xl lg:text-8xl font-bold text-violet-600 italic text-left"
              >
                {days}
              </span>
              <span className="w-[100px] h-[62px] lg:w-[413px] lg:h-[114px] text-5xl lg:text-8xl font-bold text-black italic text-left">
                &nbsp;days
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
