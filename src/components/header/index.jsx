import { useState } from "react";
import Cart from "../cart/index";
import * as Styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { handleLogin, handleLogout } from "../../redux/user/slice";
import { selectProductsCount } from "../../redux/cart/cart.selector";

function Header() {
  const { currentUser } = useSelector((rootReducer)=> rootReducer.userReducer)
  const dispatch = useDispatch()
  const [cartIsVisible, setCartIsVisible] = useState(false);




//não vou usar mais assim pq agora vou usar o useSelector, ideal para dados derivados
  // const productsCount = useMemo(()=>{
  //   return products.reduce((accumulate, current)=> accumulate + current.quantity, 0 )
  // },[products])
  const productsCount = useSelector(selectProductsCount)


  const handleLoginClick = ()=>{
    dispatch(handleLogin({name:"Lina"}))
  }

  const handleLogoutClick = ()=>{
    dispatch(handleLogout())
  }

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
      { currentUser ? (
        <div onClick={handleLogoutClick}>Sair</div>
        ) : (
        <div onClick={handleLoginClick}>Logar</div>
      ) }
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
