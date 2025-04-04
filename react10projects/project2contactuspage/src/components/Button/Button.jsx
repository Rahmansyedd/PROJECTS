
import styles from './Button.module.css';
const Button = ({isOutline, icon, text ,...rest}) => {
  // const {isOutline, icon, text} = props we can write it like this as we  to do more distruct  see line 3
  return (
    
    <button {...rest} className={ isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
        
    </button>
  )
}

export default Button
