import React, { useState } from 'react';

const FlamesApp = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');
  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  
  const handleSecondNameChange = (event) => {
    setSecondName(event.target.value);
  }
  
  const calculateRelationship = () => {
    if (firstName === '' || secondName === '') {
      setRelationshipStatus('Please Enter valid input');
      return;
    }
    
    const remainingFirst = removeCommonLetters(firstName, secondName);
    const remainingSecond = removeCommonLetters(secondName, firstName);
    
    const sumLength = (remainingFirst.length + remainingSecond.length) % 6;
    
    switch (sumLength) {
      case 1:
        setRelationshipStatus('Friends');
        break;
      case 2:
        setRelationshipStatus('Love');
        break;
      case 3:
        setRelationshipStatus('Affection');
        break;
      case 4:
        setRelationshipStatus('Marriage');
        break;
      case 5:
        setRelationshipStatus('Enemy');
        break;
      case 0:
        setRelationshipStatus('Siblings');
        break;
      default:
        setRelationshipStatus('');
    }
  }
  
  const removeCommonLetters = (str1, str2) => {
    const str1Array = str1.split('');
    const str2Array = str2.split('');
    
    const remaining = str1Array.filter(char => !str2Array.includes(char));
    
    return remaining.join('');
  }
  
  const clearInputs = () => {
    setFirstName('');
    setSecondName('');
    setRelationshipStatus('');
  }
  
  return (
    <div className="flames-container">
      <h2>FLAMES App</h2>
      <div>
        <label htmlFor="input1">First Name:</label>
        <input
          id="input1"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          data-testid="input1"
        />
      </div>
      <div>
        <label htmlFor="input2">Second Name:</label>
        <input
          id="input2"
          type="text"
          value={secondName}
          onChange={handleSecondNameChange}
          data-testid="input2"
        />
      </div>
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <h3 data-testid="answer">{relationshipStatus}</h3>
      <button onClick={clearInputs} data-testid="clear">
        Clear
      </button>
    </div>
  );
}

export default FlamesApp;
