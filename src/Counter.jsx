import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

export default function Counter() {
    const counter=useSelector(state=>state.counter);
    const dispatch=useDispatch();

    function handleIncrement(){
        dispatch(increment())
    }

    function handleDecrement(){
        dispatch(decrement())
    }

    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={()=>dispatch(increment(2))}>Increment +2</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={()=>dispatch(decrement(2))}>Decrement +2</button>
        </div>
    )
};
