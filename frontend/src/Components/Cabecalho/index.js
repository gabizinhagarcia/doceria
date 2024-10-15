import React from 'react'
import fotologo from '../Rodape/logodoce.png'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


export default function Cabecalho() {
  return (
    <div>
      <header>
      <div className="icon1">
        <CiSearch />
      </div>
      
        <div className='icon2'>
          <img src={fotologo} alt="logo" width="150" height="200" />
          <h1>doce magia</h1>
        </div>

        <div className='icon3'>
          <a href="https://web.facebook.com/?locale=pt_BR&_rdc=1&_rdr"><CiFacebook /></a>
          <a href="https://www.instagram.com/accounts/login/"><CiInstagram /></a>
          <a href="https://www.whatsapp.com/?lang=pt_BR"><FaWhatsapp /></a>
        </div>
      </header>
    </div>
  )
}