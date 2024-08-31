import { useState } from 'react'
import './App.css'



function App() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const d = new Date();
  const currentYear = d.getFullYear() - 1;
  console.log(currentYear)
  const currentMonth = d.getMonth() + 1;
  console.log(currentMonth)

  return (
    <> 
      <div>
        <label>DAY</label>
        <input
          id='day'
          name='day'
          type='text'
          placeholder='DD'
          onChange={e => setDay(e.target.value)}
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
          onChange={e => setMonth(e.target.value - currentMonth)}
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
          onChange={e => setYear(currentYear - e.target.value)}
          className='block w-full rounded-md border-0 px3.5'
        />
      </div>
      <div className='block w-full rounded-md border-0 px3.5'>{year} years</div>
      <div className='block w-full rounded-md border-0 px3.5'>{month} months</div>
      <div className='block w-full rounded-md border-0 px3.5'>{day} days</div>
    </>
  )
}

export default App
