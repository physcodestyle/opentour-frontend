import './Radio.css'

export const RadioInput = () => {
  return (
    <div>
      <input type='radio' id='huey' name='drone' value='huey' checked />
      <label htmlFor='huey'>Huey</label>
    </div>
  )
}
