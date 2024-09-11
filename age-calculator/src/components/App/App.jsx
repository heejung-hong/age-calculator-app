import { useState } from 'react'
import './App.css'
import arrow from '../../assets/arrow.svg'


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
    } else if (!isNaN(dateObj) === false || dateInput === `${year}/4/31` || dateInput === `${year}/6/31` || dateInput === `${year}/9/31` || dateInput === `${year}/11/31` || dateInput === `${year}/2/30` || dateInput === `${year}/2/31`) {
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
      <div className='bg-white w-[840px] h-[680px] p-[56px] rounded-t-[40px] rounded-bl-[40px] rounded-br-[200px]'>
        <div className='flex flex-row'>
          <div className='w-[160px] h-[130px] mr-[32px]'>
            <div className='font-semibold text-s text-zinc-500 text-left'>DAY</div>
            <input
              id='day'
              name='day'
              type='text'
              placeholder='DD'
              value={day}
              onChange={e => setDay(+e.target.value)}
              className='w-[160px] h-[72px] border border-zinc-500 rounded-md my-[10px] pl-[20px] font-bold text-3xl align-middle'
            />
            <div className='text-s italic text-rose-500 text-left'><InvalidDay/></div>
            <div className='text-s italic text-rose-500 text-left'><ErrorWhole/></div>
          </div>
          <div className='w-[160px] h-[130px] mr-[32px]'>
            <div className='font-semibold text-s text-zinc-500 text-left'>MONTH</div>
            <input
              id='month'
              name='month'
              type='text'
              placeholder='MM'
              value={month}
              onInput={e => setMonth(+e.target.value)}
              className='w-[160px] h-[72px] border border-zinc-500 rounded-md my-[10px] pl-[20px] font-bold text-3xl align-middle'
            />
            <div className='text-s italic text-rose-500 text-left'><InvalidMonth/></div>
          </div>
          <div className='w-[160px] h-[130px]'>
            <div className='font-semibold text-s text-zinc-500 text-left'>Year</div>
            <input
              id='year'
              name='year'
              type='text'
              placeholder='YYYY'
              value={year}
              onInput={e => setYear(+e.target.value)}
              className='w-[160px] h-[72px] border border-zinc-500 rounded-md my-[10px] pl-[20px] font-bold text-3xl align-middle'
            />
            <div className='text-s italic text-rose-500 text-left'><InvalidYear/></div>
          </div>
        </div>
        <div className='flex flex-row w-[728px] h-[96px] items-center'>
          <div className='w-[632px] h-[1px] border border-zinc-300'></div>
          <button 
            onClick={calBirth}
            className='bg-black w-[96px] h-[96px] rounded-full'
          >
            <img 
              src={arrow}
              className='m-auto'
            ></img>
          </button>
        </div>
        <div className='w-[728px] h-[342px]'>
          <div className='flex flex-row w-[728px] h-[114px] content-center'>
            <div 
              value={years} 
              className='w-[138px] h-[114px] text-8xl font-bold text-violet-600 italic text-left'>{years}
            </div>
            <div className='w-[413px] h-[114px] text-8xl font-bold text-black italic text-left'>&nbsp;years</div>
          </div>
          <div className='flex flex-row w-[728px] h-[114px]'>
            <div 
              value={months} 
              className='w-[138px] h-[114px] text-8xl font-bold text-violet-600 italic text-left'>{months}
            </div>
            <div className='w-[413px] h-[114px] text-8xl font-bold text-black italic text-left'>&nbsp;months</div>
          </div>
          <div className='flex flex-row w-[728px] h-[114px]'>
            <div 
              value={days} 
              className='w-[138px] h-[114px] text-8xl font-bold text-violet-600 italic text-left'>{days}
            </div>
            <div className='w-[413px] h-[114px] text-8xl font-bold text-black italic text-left'>&nbsp;days</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
