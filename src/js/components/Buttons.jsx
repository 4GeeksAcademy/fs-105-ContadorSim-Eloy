import React from 'react';
const Buttons = ({ onStop, onReset, onSetAlert }) => {
  const [alertTime, setAlertTime] = React.useState('');
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={onStop} style={{ margin: '0 5px', padding: '5px 10px' }}>
        Pausar
      </button>
      <button onClick={onReset} style={{ margin: '0 5px', padding: '5px 10px' }}>
        Reiniciar
      </button>
      <div style={{ marginTop: '10px' }}>
        <input
          type="number"
          value={alertTime}
          onChange={(e) => setAlertTime(e.target.value)}
          placeholder="Segundos para alerta"
          style={{ padding: '5px' }}
        />
        <button
          onClick={() => onSetAlert(Number(alertTime))}
          style={{ marginLeft: '5px', padding: '5px 10px' }}
        >
          Establecer
        </button>
      </div>
    </div>
  );
};
export default Buttons;
