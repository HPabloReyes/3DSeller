import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser} from "../../redux/DSellerActions";
import perfilIcon from "./perfil-icon_default.png"
import Image from 'next/image'

export default function LogButton({ handleLogin }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line
  }, [dispatch]);
  return (
    <>
        <div onClick={handleLogin} className="nav-icons nav-icons_logIn">
          <Image
          src={perfilIcon} 
          alt="perfil" 
          className='btn-logIn'
          id='bell-icon'/>
        </div>
    </>
  )
}
