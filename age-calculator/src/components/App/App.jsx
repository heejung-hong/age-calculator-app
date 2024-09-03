import { useState } from 'react'
import './App.css'



function App() {
  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  // const [totalYears, setTotalYears] = useState(0)
  const [days, setDays] = useState()
  const [months, setMonths] = useState()
  const [years, setYears] = useState()

  const d = new Date();
  const currentYear = d.getFullYear();
  // console.log(currentYear)
  const currentMonth = d.getMonth() + 1;
  // console.log(currentMonth)
  const currentDay = d.getDate();
  // console.log(currentDay)

  const totalDaysCurrent = (currentYear * 365) + (currentMonth * 31) + currentDay;
  // console.log(totalDaysCurrent)

  const totalYears = day + (month * 31) + (year * 365)
  // console.log(totalYears)

  // function calTotal() {
  //   setTotalYears(day + (month * 31) + (year * 365))
  // }
  // console.log(totalYears)

  function calBirth() {
    setYears(Math.floor((totalDaysCurrent - totalYears) / 365))
    setMonths(Math.floor(((totalDaysCurrent - totalYears) % 365) / 31))
    setDays(Math.floor(((totalDaysCurrent - totalYears) % 365) % 31))
  }

  // const years = Math.floor((totalDaysCurrent - totalYears) / 365)
  // console.log(years)
  // const months = Math.floor(((totalDaysCurrent - totalYears) % 365) / 31)
  // console.log(months)
  // const days = Math.floor(((totalDaysCurrent - totalYears) % 365) % 31)
  // console.log(days)

  const dateInput = `${year}/${month}/${day}`;
  console.log(dateInput)
  const dateObj = new Date(dateInput)
  console.log(dateObj)
  

  return (
    <> 
      <button onClick={calBirth}>Add</button>
      <div>
      <div>
        <label>DAY</label>
        <input
          id='day'
          name='day'
          type='text'
          placeholder='DD'
          value={day}
          onInput={e => setDay(+e.target.value)}
          className='block w-full rounded-md border-0 px3.5'
        />
        <div>{0 < day < 32 ? '' : 'Must be a valid day'}</div>
      </div>
      <div>
        <label>MONTH</label>
        <input
          id='month'
          name='month'
          type='text'
          placeholder='MM'
          value={month}
          onInput={e => setMonth(+e.target.value)}
          className='block w-full rounded-md border-0 px3.5'
        />
        <div>{0 < month < 13 ? '' : 'Must be a valid month'}</div>
      </div>
      <div>
        <label>Year</label>
        <input
          id='year'
          name='year'
          type='text'
          placeholder='YYYY'
          value={year}
          onInput={e => setYear(+e.target.value)}
          className='block w-full rounded-md border-0 px3.5'
        />
        <div>{dateObj > d ? 'Must be in the past' : ''}</div>
        <div>{isNaN(dateObj) ? 'Must be a valid date' : ''}</div>
      </div>
      
      </div>
      <div value={years} className='block w-full rounded-md border-0 px3.5'>{years} years</div>
      <div value={months} className='block w-full rounded-md border-0 px3.5'>{months} months</div>
      <div value={days} className='block w-full rounded-md border-0 px3.5'>{days} days</div>
    </>
  )
}

export default App
