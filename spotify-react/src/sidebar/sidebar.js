import './sidebar.css';
import Spotify from '../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faHome, faSearch, faGlobe } from '@fontawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div class="sidebar">

            <nav class="sidebar__navigation">
                <div class="logo">
                    <a href="">
                        <img src={Spotify} alt="Logo" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faHome} /></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faSearch} /></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="library">
                <div class="library-content">
                    <button class="library-button">
                        <span class="fa fas fa-book"></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <span class="fa fa-plus"></span>
                </div>
                <section class="section-playlist">
                    <div class="section-playlist-content">
                        <span class="text title">Crie sua primeira playlist</span>
                        <span class="text subtitle">É fácil! vamos te ajudar.</span>
                        <button class="section-playlist-button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <div class="cookies">
                    <a href="">Cookies</a>
                </div>
                <div class="languages">
                    <button class="languages-button">
                        <span><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>   
    )
};

export default Sidebar