import { useState } from 'react'
import './App.css'



function App() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  // const [totalYears, setTotalYears] = useState(0)
  const [days, setDays] = useState('--')
  const [months, setMonths] = useState('--')
  const [years, setYears] = useState('--')

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

  const dateInput = `${year}/${month}/${day}`;
  console.log(dateInput)
  const dateObj = new Date(dateInput);
  console.log(dateObj)
  console.log(!isNaN(dateObj))
  

  function ErrorWhole() {
    if (day === '' || month === '' || year === '') {
      return ''
    } else if (!isNaN(dateObj) === false) {
      return 'Must be a valid date'
    }
  }

  function InvalidDay() {
    if (day === '') {
      return ''
    } else if (!day) {
      return 'This field is required'
    } else if (!(0 < day && day < 32)) {
      return 'Must be a valid day'
    } 
  }

  function InvalidMonth() {
    if (month === '') {
      return ''
    } else if (!month) {
      return 'This field is required'
    } else if (!(0 < month && month < 13)) {
      return 'Must be a valid month'
    }
  } 
  
  function InvalidYear() {
    if (year === '') {
      return ''
    } else if (!year) {
      return 'This field is required'
    } else if (dateObj > d) {
      return 'Must be in the past'
    } 
  }
  
  function calBirth() {
    if (isNaN(dateObj) || dateObj > d) {
      return null
    } else {
      setYears(Math.floor((totalDaysCurrent - totalYears) / 365))
      setMonths(Math.floor(((totalDaysCurrent - totalYears) % 365) / 31))
      setDays(Math.floor(((totalDaysCurrent - totalYears) % 365) % 31))
    }
  }

  return (
    <> 
      <div>
        <label>DAY</label>
        <input
          id='day'
          name='day'
          type='text'
          placeholder='DD'
          value={day}
          onChange={e => setDay(+e.target.value)}
          className='block w-full rounded-md border-0 px3.5'
        />
        <div><InvalidDay/></div>
        <div><ErrorWhole/></div>
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
        <div><InvalidMonth/></div>
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
        <div><InvalidYear/></div>
      </div>
      <button onClick={calBirth}>Add</button>
      <div value={years} className='block w-full rounded-md border-0 px3.5'>{years} years</div>
      <div value={months} className='block w-full rounded-md border-0 px3.5'>{months} months</div>
      <div value={days} className='block w-full rounded-md border-0 px3.5'>{days} days</div>
    </>
  )
}

export default App
