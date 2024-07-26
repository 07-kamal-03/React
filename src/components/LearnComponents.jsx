import React from 'react';
import Proptypes from 'prop-types';

 const LearnComponents = (props) => {
  const {handleclick}=props;
  return (
    <div>
        First components???
        <button onClick={handleclick}>Click me!</button>
    </div>
  )
}
LearnComponents.Proptypes={
   handleclick:Proptypes.func.isRequired,
};
export default LearnComponents;