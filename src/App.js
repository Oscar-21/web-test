import React, { Component } from 'react';
import toolsWhite from './images/tools2.png';
import key1 from './images/key1.png';
import keysWhite from './images/key2.png';
import icon1 from './images/icon1.png';
import iconWhite from './images/iconWhite.png';
import './css/main.css';
import './css/small.css';
import './css/medium.css';
import './css/large.css';
import './css/extra-large.css';

class App extends Component {
    state = {
        toolsHover: false,
        keysHover: false,
        iconHover: false,
        logo: false,
        tools: false,
    };
    componentDidMount() {
        this.check_webp_feature("lossy",
            (feature, result) => {
                if (result) {
                    import('./images/logo_color.webp')
                        .then(logo => {
                            this.setState({ logo })
                        });
                    import('./images/tools.webp')
                        .then(tools => {
                            this.setState({ tools })
                        })
                } else {
                    import('./images/logo_color.png')
                        .then(tools => {
                            this.setState({ tools })
                        });
                    import('./images/tools.png')
                        .then(tools => {
                            this.setState({ tools })
                        })
                }
            });
    };
    check_webp_feature = (feature, callback) => {
        const kTestImages = {
            lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
            animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        };
        let img = new Image();
        img.onload = function () {
            const result = (img.width > 0) && (img.height > 0);
            callback(feature, result);
        };
        img.onerror = function () {
            callback(feature, false);
        };
        img.src = "data:image/webp;base64," + kTestImages[feature];
    };
    render() {

        const {
            toolsHover,
            iconHover,
            keysHover,
            logo,
            tools,
        } = this.state;

        return (
            <div className="App">
                <header>
                    {logo &&
                        <div className="logo-home">
                            <img src={logo} />
                        </div>
                    }
                    <ul className="nav-home-top skew">
                        <li> <a href="">Employer </a>                         </li>
                        <li> <a href=""> Member </a> </li>
                        <li> <a href=""> Broker </a> </li>
                        <li> <a href=""> Provider </a> </li>
                    </ul>
                    <ul className="nav-home-skewed">
                        <li> <a>HOME</a> </li>
                        <li> <a>ABOUT US</a> </li>
                        <li> <a>OUR &nbsp; SOLUTIONS</a> </li>
                        <li> <a>CONTACT US</a>  </li>
                    </ul>
                </header>


                <section className="banner-hm">
                    <div className="skew banner-container-hm">
                        <section className="banner-grey-background-hm">
                            <h1 className="banner-txt-hm">
                                Quisque laoreet
                                <br />
                                <span> EFFICITUR </span>
                            </h1>
                            <p className="unskew banner-pg-hm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis maximus urna. Duis tempor pretium massa, ut placerat
                                mauris commodo id proin nec libero sempe.
                            </p>
                            <h2>
                                Ipsum sagittis facilisis.
                            </h2>
                        </section>
                        <section className="banner-white-background-hm">
                            <h3 className="unskew banner-txt-btm-hm">
                                Proin Malesuada Arcu <br />
                                <span className="unskew">
                                    CONDIMENTUM
                                </span>
                            </h3>
                        </section>
                    </div>
                </section>

                <section className="branding-home">
                    <section className="branding-copy">
                        <h2>
                            Mauris suscipit pharetra
                            <br />
                            <span className="tagline-hm">
                                Cras,ELEIFEND & LIBERO
                            </span>
                            <br />
                        </h2>
                        <h3 className="call-to-action-hm">
                            usce laoreet ullamcorper lacus, ut condimentum risus egestas quis. LIBERO
                        </h3>
                    </section>
                </section>

                <section className="row">
                    <div className="grid">
                        <section
                            className={toolsHover ? "teaser col-1-3 btn-hvr-hm" : "teaser col-1-3"}
                            onMouseEnter={() => { this.setState({ toolsHover: true }) }}
                            onMouseLeave={() => { this.setState({ toolsHover: false }) }}
                        >
                            <img
                                src={toolsHover ? toolsWhite : tools}
                                alt="lorem"
                                className="btn-img-hm"
                            />
                            <h5>cras</h5>
                        </section>

                        <section
                            className={keysHover ? "teaser col-1-3 btn-hvr-hm middle" : "teaser col-1-3 middle"}
                            onMouseEnter={() => { this.setState({ keysHover: true }) }}
                            onMouseLeave={() => { this.setState({ keysHover: false }) }}
                        >
                            <img
                                src={keysHover ? keysWhite : key1}
                                alt=""
                                className="btn-img-hm"
                            />
                            <h5>elefiend</h5>
                        </section>

                        <section className="teaser col-1-3"
                            className={iconHover ? "teaser col-1-3 btn-hvr-hm" : "teaser col-1-3"}
                            onMouseEnter={() => { this.setState({ iconHover: true }) }}
                            onMouseLeave={() => { this.setState({ iconHover: false }) }}
                        >
                            <img
                                src={iconHover ? iconWhite : icon1}
                                alt=""
                                className="btn-img-hm"
                            />
                            <h5>libero</h5>
                        </section>
                    </div>
                </section>

                <section className="bottom-ipsum-hm">
                    <div className="lorem-txt-hm">
                        <h3> Praesent metus </h3>
                        <p> Pellentesque faucibus fermentum tellus, ut vulputate sapien blandit et. <br /> Nullam posuere magna massa, sit amet maximus neque facilisis quis. Donec dictum, orci condimentum sollicitudin suscipit, dui ipsum posuere.</p>
                    </div>

                    <div className="skew ipsum-txt-hm">
                        <h3 className="unskew">
                            Duis vulputate
                        </h3>
                        <h3 className="unskew">
                            mauris sit amet
                            </h3>
                        <h3 className="unskew">
                            rhoncus, maurs
                        </h3>
                    </div>
                </section>

                <section className="tablet-hm" style={{
                    height: 300,
                    width: '100%',
                    //                    margin: '0 auto',
                }}>
                    <div style={{
                        display: 'inline-block',
                        width: '12%',
                        height: '100%',
                    }} />
                    <p
                        style={{
                            color: 'white',
                            display: 'inline-block',
                            width: '70%',
                            position: 'relative',
                            bottom: 120,
                            marginLeft: 60,
                            fontStyle: 'italic',
                            fontWeight: 800,
                            // textAlign: 'center',
                            fontSize: 24,
                            lineHeight: 1.3,
                            // width: '40%',
                            ///   paddingBottom: 100
                        }}
                    >
                        Fusce laoreet ullamcorper lacus, ut condimentum risus egestas quis. Proin aliquet sapien interdum feugiat facilisis. Cras commodo sapien in arcu.

                    </p>
                    <div style={{
                        display: 'inline-block',
                        width: '12%',
                        height: '100%',
                        float: 'right',
                    }} />
                </section>
                <footer>
                    <section className="footer-hm-top">
                        <div
                            style={{

                            }}
                            className="col-1-3">
                            <h5>contact us</h5>
                        </div>

                        <section className="col-1-3">
                            <h5>careers</h5>
                        </section>

                        <section className="col-1-3">
                            <h5>Lipsum.com</h5>
                        </section>
                    </section>

                    <section className="footer-hm-btm">
                        <section className="col-1-3">
                            <h5>contact us</h5>
                        </section>

                        <section className="col-1-3">
                            <h5>careers</h5>
                        </section>

                        <section className="col-1-3">
                            <h5>Lipsum.com</h5>
                        </section>
                    </section>
                </footer>
            </div>
        );
    }
}

export default App;
