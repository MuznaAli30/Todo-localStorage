
import React from 'react';
import Items from './Items';

export default function Box(props) {
  const work = props.data.map((singleData, index) => {
    return (
      <Items
        removeHandler={props.removeHandler}
        editHandler={props.editHandler} // Pass the editHandler function
        key={index}
        id={index}
        item={singleData.item}
        time={singleData.time}
      />
    );
  });

  return <div className="p-3">{work}</div>;
}
