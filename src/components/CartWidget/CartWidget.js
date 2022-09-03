import './style.css'
import studio from './studio.jpg'

const CartWidget = () => {
  return (
    <div>
        <img src={studio} alt='logo' className='cartwidget'/>
    </div>
  )
}

export default CartWidget