function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <>
      <div className='form-group'>
        <h1>Message</h1>
        <div>
          <input
            className='form-control'
            id='checkbox3'
            name='checkbox3'
            type='checkbox'
            placeholder='Enter checkbox3'
            value={props.checkbox3}
            onChange={props.handleChange}
          />
          <label>I want to add this option</label>
        </div>
        <div>
          <input
            className='form-control'
            id='checkbox4'
            name='checkbox4'
            type='checkbox'
            placeholder='Enter checkbox4'
            value={props.checkbox4}
            onChange={props.handleChange}
          />
          <label>The number one choice</label>
        </div>
      </div>
      <button className='btn btn-success btn-block'>Sign up</button>
    </>
  );
}
export default Step3;
