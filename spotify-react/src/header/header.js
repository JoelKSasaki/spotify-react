import React from "react"
import './header.css'
import smallRight from '../assets/icons/small-right.png'
import smallLeft from '../assets/icons/small-left.png'
import search from '../assets/icons/search.png'

const Header = () => {
    return (
        <nav className="header-navegacao">
            <div className="navegacao">
                <button className="esquerda">
                    <img src={smallLeft} alt=""/>
                </button>
                <button className="direita">
                    <img src={smallRight} alt=""/>
                </button>
            </div>

            <div className="header-search">
                <img src={search} alt=""/>
                <input type="text" id="search-input" maxlength="500" placeholder="Encontre sua música" spellCheck = "false"/>
            </div>

            <div className="header-login">
                <button className="inscricao">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;