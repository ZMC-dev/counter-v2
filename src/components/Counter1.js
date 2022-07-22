
const Counter1 = ({counter1, setCounter1}) => {
  
  
  return (
<div classname="counter"> 
    <div>
      <h1>Counter</h1>
      <button disabled={counter1 <= 0 ? true : false}
          onClick={() => {
            setCounter1(counter1 - 1);
          }}> - </button>

    <p>{counter1}</p>  
    
    <button disabled={counter1 >= 10 ? true : false}
          onClick={() => {
            setCounter1(counter1 + 1);
          }}> + </button>

    <button onClick={() => {
          setCounter1(0);
        }}> Reset </button>

</div>
    </div>
  
  );

};

export default Counter1;