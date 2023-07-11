import { useState } from "react";
import Cart from "../cart/index";
import * as Styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import UserActionTypes from '../../redux/user/action-types'

function Header() {
  const { currentUser } = useSelector((rootReducer)=> rootReducer.userReducer)
  const dispatch = useDispatch()
  const [cartIsVisible, setCartIsVisible] = useState(false);

  console.log(currentUser)

  const handleLoginClick = ()=>{
    dispatch({type: UserActionTypes , payload:{name:"Lina"}})
  }

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div onClick={handleLoginClick}>Login</div>
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
