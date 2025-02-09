import './main.css';
import React from 'react';

import Playlists1 from '../../src/assets/playlist/1.jpeg';
import Playlists2 from '../../src/assets/playlist/2.png';
import Playlists3 from '../../src/assets/playlist/3.jpeg';
import Playlists4 from '../../src/assets/playlist/4.jpeg';
import Playlists5 from '../../src/assets/playlist/5.jpeg';
import Playlists6 from '../../src/assets/playlist/6.jpeg';
import Playlists7 from '../../src/assets/playlist/7.jpeg';
import Playlists8 from '../../src/assets/playlist/8.jpeg';
import Playlists9 from '../../src/assets/playlist/9.jpeg';
import Playlists10 from '../../src/assets/playlist/10.jpeg';
import Playlists11 from '../../src/assets/playlist/11.jpeg';
import Playlists12 from '../../src/assets/playlist/12.jpeg';
import Playlists13 from '../../src/assets/playlist/13.jpeg';
import Playlists14 from '../../src/assets/playlist/14.jpeg';
import Playlists15 from '../../src/assets/playlist/15.jpeg';

const Main = () => {
    return (
        <div className="main">
            <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>

                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            
                            <section className="offer__list-item">

                                <a href="" className="cards">
                                    <div className="cards card1">
                                        <img src={Playlists1} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card2">
                                        <img src={Playlists2} alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card3">
                                        <img src={Playlists3} alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card4">
                                        <img src={Playlists4} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card5">
                                        <img src={Playlists5} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card6">
                                        <img src={Playlists6} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card7">
                                        <img src={Playlists7} alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card8">
                                        <img src={Playlists8} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card9">
                                        <img src={Playlists9} alt="" />
                                        <span>Funk</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card10">
                                        <img src={Playlists10} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card11">
                                        <img src={Playlists11} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card12">
                                        <img src={Playlists12} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card13">
                                        <img src={Playlists13} alt="" />
                                        <span>Indie</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card14">
                                        <img src={Playlists14} alt="" />
                                        <span>Relax</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card15">
                                        <img src={Playlists15} alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                                
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result-artist" className="hidden">
                    <div className="grid-container">
                        <div className="artist-card" id="">

                            <div className="card-img">
                                <img id="artist-img" className="artist-img"/>
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>

                            <div className="card-text">
                                <a title="Foo Fighters" className="vst" href=""></a>
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista=</span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;