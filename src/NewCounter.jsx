import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, plusTwo, minTwo, kataKataHariIni, updateChecked} from "./newCounterSlice"

export default function NewCounterSlicer(){
    const angka= useSelector((state)=>state.newCounter.angka);
    const kata=useSelector((state)=>state.newCounter.kata);
    const isChecked=useSelector((state)=>state.newCounter.isChecked);

    const dispatch=useDispatch();

    const handleChange=(e)=>{
        dispatch(kataKataHariIni(e.target.value));
    }

    const handleChangeChecked=(e)=>{
        dispatch(updateChecked(e.target.checked))
    }


    return(
        <div>
            <h1>Counter:{angka}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(plusTwo())}>Increment +2</button>
            <button onClick={()=>dispatch(minTwo())}>Decrement -2</button>
            <br />
            <input type="text" value={kata} onChange={handleChange}/>
            <h2>Kata kata hari ini:{kata}</h2>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleChangeChecked} />
                Centang Saya
            </label>
            <p>Status:{isChecked ? "Checked" : "Not Checked"}</p>
        </div>
    )
}