import './Button.css';



function Button({onClick}){
    return (
      <button type="button" onClick={onClick} >Submit</button>
    )
}


export default Button