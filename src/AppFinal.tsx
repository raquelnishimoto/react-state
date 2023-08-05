import React, { useState } from 'react';
import './App.css';

/*
// 1. Display `WOW! {name}'s speed is {speed} km/h!`
// 2. Display `The plane speed is {speed} km/h!`
*/

const sleep = (speed: number) => {
  const done = Date.now() + speed;

  while (done > Date.now()) {
    console.log('Sorry, still processing...');
  }
};

const PlaneName = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <label htmlFor="name">Plane Name: </label>
      <input
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
    </div>
  );
};

const Speed = ({
  speed,
  onTimeChange,
}: {
  onTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  speed: number;
}) => {
  // ⚠️ Uncomment next line before exercise 2
  sleep(speed);

  return (
    <div>
      <label htmlFor="speed">Plane speed: </label>
      <input
        id="speed"
        type="number"
        value={speed}
        onChange={onTimeChange}
      ></input>
    </div>
  );
};

const Display = ({ speed }: { speed: number }) => {
  return <div>{`The plane speed is ${speed} km/h!`}</div>;
};

// ⚠️ Uncomment next line before exercise 1
// const Display = ({ name, speed }: { name: string; speed: number }) => {
//   return <div>{`WOW! ${name}'s speed is ${speed} km/h!`}</div>;
// };

function App() {
  const [speed, setSpeed] = useState(200);

  return (
    <form>
      <PlaneName />
      <Display speed={speed} />
      <Speed
        speed={speed}
        onTimeChange={(e) => setSpeed(Number(e.target.value))}
      />
    </form>
  );
}

export default App;
