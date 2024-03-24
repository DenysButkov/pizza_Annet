import { Link } from 'react-router-dom';

import CartEmptyImg from '../assets/img/empty-cart.png'

export const CartEmpty = () => {
  return (
    <>
    <div class="cart cart--empty">
    <h2>The shopping cart is empty <icon>😕</icon></h2>
    <p>
      Most likely, you haven't ordered a pizza yet.<br />
      To order a pizza, go to the main page.
    </p>
    <img src= {CartEmptyImg} alt="Empty cart" />
    <Link to="/" class="button button--black">
      <span>Go back</span>
    </ Link>
  </div>
  </>
  )
}

export default CartEmpty;