import { useDispatch, useSelector } from 'react-redux'
import play from "../assets/play-button.svg"
import reset from "../assets/reset.svg"
import { resetChrono, startChrono } from '../features/chrono'
export default function ToggleButton() {

  const dispatch = useDispatch()
  const chronoValues = useSelector(state => state.chrono)

  function ToggleChrono(){
    if(!chronoValues.isPlaying){
      dispatch(startChrono())
    }
    else {
      dispatch(resetChrono())
    }
  }

  return (
    <button
    onClick={ToggleChrono}
    className='bg-slate-300 text-slate-900 px-4 py-3 rounded flex mx-auto'>
      <span className="text-lg mr-3">{chronoValues.isPlaying ? "Reset" : "Start"}</span>
      <img className='w-5' src={chronoValues.isPlaying ? reset : play} alt="" />
    </button>
  )
}
