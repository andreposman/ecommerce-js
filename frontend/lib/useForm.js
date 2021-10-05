import { useState } from 'react';

export default function useForm(initialState = {}) {
  // create state obj for inputs
  const [inputs, setInputs] = useState(initialState);

  function handleChange(event) {
    let { value, name, type } = event.target;

    if (type === 'number') value = parseInt(value);

    if (type === 'file') [value] = event.target.files; // get the first thing of the e.target.files array and send to value

    setInputs({
      // copy the exiting state
      ...inputs,
      // pass the value of the input to the correct input, by getting the name of it
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initialState);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );

    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return { inputs, handleChange, resetForm, clearForm };
}
