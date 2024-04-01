import React, {useState} from 'react'

function Practice(){
    let [name, setName] = useState("Guest");
    let [no, setNo] = useState(0);
    let [txt, setTxt] = useState();
    let [opt, setOpt] = useState("Select an option");
    let [rad, setRad] = useState("Pick Up");
    let [color, setColor] = useState("#fffff");
    let updateName = (event)=>{
        setName(event.target.value);
    }
    let updateNo = (event)=>{
        setNo(event.target.value);
    }
    let updateTxt = (event)=>{
        setTxt(event.target.value);
    }
    let updateOpt = (event)=>{
        setOpt(event.target.value);
    }
    let updateRad = (event)=>{
        setRad(event.target.value);
    }
    let updateColor = (event)=>{
        setColor(event.target.value);
    }
    return(
        <div className="flex flex-col md:flex-row rounded-lg p-[15px] bg-red-200 text-black w-max h-max gap-[20px]">
            <div>
                <input type="text" onChange={updateName} placeholder="Type in a Name" className="bg-blue-200"/>
                <p>Name: {name}</p>
                <input type="number" onChange={updateNo} placeholder="Type in a Number" className="bg-blue-20"/>
                <p>Number: {no}</p>
                <input type="textarea" onChange={updateTxt} placeholder="Type in a Text" className="bg-blue-20"/>
                <p>Text: {txt}</p>
                <select name="select"onChange={updateOpt} className="bg-blue-20 text-black">
                    <option className="bg-blue-20 text-black">Select an option</option>
                    <option className="text-black">Gift Card</option>
                    <option className="bg-blue-20 text-black">Credit Card</option>
                    <option className="bg-blue-20 text-black">Whatever</option>
                </select>
                <p>Option: {opt}</p>
                <div className="grid">
                    <label>
                        <input name="x-group" type="radio" value="Pick Up" checked={rad === "Pick Up"} onChange={updateRad}/>
                        Pick Up
                    </label>
                    <label>
                        <input  name="x-group" type="radio"value="Delivery" checked={rad === "Delivery"} onChange={updateRad}/>
                        Delivery
                    </label>
                </div>
                <p>Choice: {rad}</p>
            </div>
            <div className="bg-white rounded w-max h-max p-[15px] flex flex-col content-center items-center">
                <h1 className="font-bold">Color Picker</h1>
                <div className={`flex content-center items-center text-center w-[200px] h-[200px] p-[10px] text-2xl rounded-[20px] shadow-lg transition duration-1000 bg-[#ffffff]`} style={{backgroundColor: color}}>
                    <p className="font-bold"> Selected Color: <br/> {color}</p>
                </div>
                <div className="flex flex-col font-bold">
                    <h1 className="font-bold">Select a Color</h1>
                    <input type="color" name="color" onChange={updateColor} />
                </div>
            </div>
        </div>
    );
}
export default Practice