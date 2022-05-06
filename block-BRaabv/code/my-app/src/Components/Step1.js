function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className='form-group'>
      <h1>Signup</h1>
      <label htmlFor='firstname'>First name</label>
      <input
        className='form-control'
        id='text'
        name='firstname'
        type='text'
        placeholder='Enter firstname'
        value={props.firstname}
        onChange={props.handleChange}
      />
      <label htmlFor='lastname'>First name</label>
      <input
        className='form-control'
        id='text'
        name='lastname'
        type='text'
        placeholder='Enter lastname'
        value={props.lastname}
        onChange={props.handleChange}
      />
      <label htmlFor='date'>Date of Birth</label>
      <input
        type='date'
        value={props.date}
        name='date'
        onChange={props.handleChange}
      />
      <label htmlFor='email'>Email address</label>
      <input
        className='form-control'
        id='email'
        name='email'
        type='text'
        placeholder='Enter email'
        value={props.email}
        onChange={props.handleChange}
      />
      <label htmlFor='address'>Address</label>
      <input
        type='text'
        value={props.address}
        name='address'
        onChange={props.handleChange}
      />
    </div>
  );
}
export default Step1;
