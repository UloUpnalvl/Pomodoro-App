import { useDispatch } from 'react-redux'
import { UpdateChronoValue } from '../features/chrono'




export default function UpdateTimeButton({type, sign}) {

  const dispatch = useDispatch()

  function handleUpdate(){
    dispatch(UpdateChronoValue({type, value: sign === "+" ? 60 : - 60}))
  }
  

  return (
    <button
    onClick={handleUpdate}
    className='size-8 bg-slate-300 text-slate-900 rounded p-2 flex justify-center items-center'>
      <span className=' text-4xl relative bottom-1 pointer-events-none'>{sign}</span>
    </button>
  )
}
