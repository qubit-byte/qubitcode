import React from 'react';

function Seperator(props: { horizontal: boolean; spot: boolean }) {
  return (
    <div
      style={{
        width: props.spot ? 6 : 3,
        height: '100%',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.spot ? (
        <div style={{ width: 2, height: 40, backgroundColor: 'gray', borderRadius: 1 }} />
      ) : null}
    </div>
  );
}

export default Seperator;
