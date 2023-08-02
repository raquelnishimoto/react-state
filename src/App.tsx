import React, { useState } from 'react';
import './App.css';

/*
// 1. Display `WOW! {name}'s speed is {time} km/h!`
// 2. Display `Current sprint name is {name}`
*/

const sleep = (time: number) => {
  const done = Date.now() + time;

  while (done > Date.now()) {
    console.log('Sorry, still processing...');
  }
};

const PlaneName = () => {
  return (
    <div>
      <label htmlFor="name">Plane Name: </label>
      <input id="name" onChange={(e) => e.target.value}></input>
    </div>
  );
};

const Speed = ({
  time,
  onTimeChange,
}: {
  onTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  time: number;
}) => {
  // ⚠️ Uncomment next line before exercise 2
  // sleep(time);

  return (
    <div>
      <label htmlFor="speed">Plane speed: </label>
      <input
        id="speed"
        type="number"
        value={time}
        onChange={onTimeChange}
      ></input>
    </div>
  );
};

// ⚠️ Uncomment next line before exercise 1
// const Display = ({ name, time }: { name: string; time: number }) => {
//   return <div>{`WOW! ${name}'s speed is ${time} km/h!`}</div>;
// };

const Display = ({ time }: { time: number }) => {
  return <div>{`The plane speed is ${time} km/h!`}</div>;
};

function App() {
  const [time, setTime] = useState(200);

  return (
    <form>
      <PlaneName />
      <Display time={time} />
      <Speed
        time={time}
        onTimeChange={(e) => setTime(Number(e.target.value))}
      />
    </form>
  );
}

export default App;
