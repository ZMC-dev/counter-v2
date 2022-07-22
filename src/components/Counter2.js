
const Counter2 = ({counter2, setCounter2}) => {

  
  return (
<div classname="counter"> 
    <div>
      <h1>Counter</h1>
      <button disabled={counter2 <= 0 ? true : false}
          onClick={() => {
            setCounter2(counter2 - 1);
          }}> - </button>

    <p>{counter2}</p>  
    
    <button disabled={counter2 >= 10 ? true : false}
          onClick={() => {
            setCounter2(counter2 + 1);
          }}> + </button>

    <button onClick={() => {
          setCounter2(0);
        }}> Reset </button>

</div>
    </div>
    

  );

};

export default Counter2;