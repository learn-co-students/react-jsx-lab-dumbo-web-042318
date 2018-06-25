import React from 'react';
class RegistrationForm extends React.Component {
  render() {
    return (
      <form id="form1">
        <input type="text"></input>
        <input type="password"></input>
        <button type="submit" form="form1" value="Submit">Submit</button>
      </form>
    )
  }
};

export default RegistrationForm;
