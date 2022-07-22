
const Counter = ({counter3, setCounter3}) => {
  
  return (
<div classname="counter"> 
    <div>
      <h1>Counter</h1>
      <button disabled={counter3 <= 0 ? true : false}
          onClick={() => {
            setCounter3(counter3 - 1);
          }}> - </button>

    <p>{counter3}</p>  
    
    <button disabled={counter3  >= 10 ? true : false}
          onClick={() => {
            setCounter3(counter3 + 1);
          }}> + </button>

    <button onClick={() => {
          setCounter3(0);
        }}> Reset </button>

</div>
    </div>
    

  );

};

export default Counter;