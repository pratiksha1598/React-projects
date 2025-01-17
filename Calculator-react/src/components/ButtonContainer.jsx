import css from '../App.module.css';


const ButtonContainer = ({onButtonClick}) => {

  const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '0', '=','.'];

  return (
    <div className={css.buttoncontainer}>
      {buttons.map((buttonName) => (
         <button className={css.button} onClick={()=> onButtonClick(buttonName)}>{buttonName}</button>
        ))}
    </div> 
      
  )
}

export default ButtonContainer;