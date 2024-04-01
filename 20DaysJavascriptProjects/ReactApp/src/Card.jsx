import PropTypes from 'prop-types'
import pic from './assets/IMG_0972.JPG'
import React, {useState} from 'react'


function Card(props){
    let str = "flex content-center bg-green-600 border-none rounded-lg p-[10px] w-max h-[30px] text-center items-center";
    let [title, setTitle] = useState(props.title);
    let [description, setDes] = useState(props.description);
    let displayTitle = (event)=>{
        let x = prompt("Please enter your desired title: ");
        setTitle(x);
    }
    let displayDes = (event)=>{
        let x = prompt("Please enter your desired description: ");
        setDes(x);
    }
    return(
        <div className="flex flex-col text-center shadow-2xl bg-gray-300 rounded-md w-max h-max md:w-80 md:h-max px-[20px] py-[10px] justify-center items-center m-[15px] hover:transform hover:md:scale-110 hover:scale-105 transition duration-500 hover:cursor-pointer gap-[10px]">
            <img className="rounded-full text-center w-[120px] h-[120px]" src={pic} alt="" />
            <h1 className="font-bold text-3xl">{title}</h1>
            <p className="w-[200px] text-wrap:wrap">{description}</p>
            <button className={str} onClick={displayTitle}>Change Title</button>
            <button className={str} onClick={displayDes}>Change Description</button>
        </div>
    );
}
Card.propsType = {
    title: PropTypes.string,
    description: PropTypes.string,
    isValid: PropTypes.bool,
}
Card.defaultProps = {
    title: "Default Title",
    description: "This is the description for the default class using props",
    isValid: false,
}
export default Card