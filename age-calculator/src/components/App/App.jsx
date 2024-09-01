import { useState } from 'react'
import './App.css'



function App() {
  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [totalYears, setTotalYears] = useState(0)

  const d = new Date();
  const currentYear = d.getFullYear();
  // console.log(currentYear)
  const currentMonth = d.getMonth() + 1;
  // console.log(currentMonth)
  const currentDay = d.getDate();
  // console.log(currentDay)

  const totalDaysCurrent = (currentYear * 365) + (currentMonth * 31) + currentDay;
  console.log(totalDaysCurrent)

  function calTotal() {
    setTotalYears(day + (month * 31) + (year * 365))
  }
  console.log(totalYears)
  const years = Math.floor((totalDaysCurrent - totalYears)/365)
  console.log(years)

  return (
    <> 
      <button onClick={calTotal}>Add</button>
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
      </div>
      <div className='block w-full rounded-md border-0 px3.5'>{years} years</div>
      <div className='block w-full rounded-md border-0 px3.5'>{month} months</div>
      <div className='block w-full rounded-md border-0 px3.5'>{day} days</div>
    </>
  )
}

export default App
