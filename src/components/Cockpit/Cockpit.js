import React from 'react';

const cockpit = (props) => {
  const style = {
    backgroundColor: 'green',
    color: 'white',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  }
  let classes = [];
  if (props.persons.length <= 2) {
    classes.push('red');
  }
  if (props.persons.length <= 1) {
    classes.push('bold');
  }
  return (
    <div className="Cockpit">
      <h1>Hi! I am a React App</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
    </div>
  );
}


export default cockpit;

