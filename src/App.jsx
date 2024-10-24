import UpdateTimeButton from './components/UpdateTimeButton'
import ToggleButton from './components/ToggleButton'
import { useSelector } from 'react-redux'
import getFormattedValue from './utils/getFormattedValue'

export default function App() {

  const chronoValues = useSelector(state => state.chrono)

  return (
    <div className='min-h-screen bg-slate-700 text-slate-100'>
      <div className="max-w-xl mx-auto border border-slate-500  rounded p-10">
        <h1 className='text-center text-2xl border px-2 py-3 rounded mb-8'>Pomodoro App</h1>

        <div className="flex justify-center mb-5">

          {/* Session block */}
          <div className="mr-4">
            <p className="text-center text-xl mb-3">Sessions</p>
            <div className="flex">
              <UpdateTimeButton type={"session"} sign={"-"} />
              <p className=" mx-4 text-xl">{chronoValues.session.value / 60}</p>
              <UpdateTimeButton type={"session"} sign={"+"} />
            </div>
          </div>

          {/* Pause block */}
          <div className="">
            <p className="text-center text-xl mb-3">Pause</p>
            <div className="flex">
            <UpdateTimeButton type={"pause"} sign={"-"} />

              <p className=" mx-4 text-xl">{chronoValues.pause.value / 60}</p>
            <UpdateTimeButton type={"pause"} sign={"+"} />
            </div>
          </div>
        </div>

        <p className="text-center text-xl mb-1 font-semibold">{chronoValues.displayedValue.heading}</p>

        <p className="flex items-center justify-center mb-1">
          <span className="bg-slate-300 px-4 py-3 text-slate-900 text-4xl rounded">{getFormattedValue(chronoValues.displayedValue.value)}</span>
        </p>

        <p className="text-center mb-7">Passed cycles: {chronoValues.cycles}</p>



        <ToggleButton />
        
      </div>
    </div>
  )
}
