function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className='form-group'>
      <h1>Checkbox</h1>
      <label htmlFor='message'>message</label>
      <textarea
        className='form-control'
        id='message'
        name='message'
        type='text'
        placeholder='Enter message'
        value={props.message}
        onChange={props.handleChange}
      ></textarea>
      <article>
        <input
          className='form-control'
          id='checkbox1'
          name='checkbox1'
          type='checkbox'
          placeholder='Enter checkbox1'
          value={props.checkbox1}
          onChange={props.handleChange}
        />
        <label>The number one choice</label>
        <input
          className='form-control'
          id='checkbox2'
          name='checkbox2'
          type='checkbox'
          placeholder='Enter checkbox2'
          value={props.checkbox2}
          onChange={props.handleChange}
        />
        <label>The number two choice</label>
      </article>
    </div>
  );
}
export default Step2;
