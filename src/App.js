import React, { Component } from 'react';
import tools from './images/tools.png';
import toolsWhite from './images/tools2.png';
import logo from './images/logo_color.png';
import key1 from './images/key1.png';
import keysWhite from './images/key2.png';
import icon1 from './images/icon1.png';
import iconWhite from './images/iconWhite.png';
import logoWhite from './images/logo_ko.png';
import linkedin from './images/logo_linkedin.png';
import './css/main.css';
import './css/small.css';
import './css/medium.css';
import './css/large.css';
import './css/extra-large.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            toolsHover: false,
            keysHover: false,
            iconHover: false,
            hideNav: false,
            one: false,
        };
        this.hideRefUpper = null
        this.hideRefLower = null;
        this.showRefUpper = null;
        this.showRefLower = null;
    };

    componentDidMount() {
        this.hideHeader();
        this.showHeader();
    };

    setHideRefUpper = ref => { this.hideRefUpper = ref };
    setHideRefLower = ref => { this.hideRefLower = ref };
    setShowRefUpper = ref => { this.showRefUpper = ref; };
    setShowRefLower = ref => { this.showRefLower = ref; };

    hideHeader = () => {
        let io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if ((entry.isIntersecting)) this.setState({ hideNav: true });
            });
        });
        io.observe(this.hideRefUpper);
        io.observe(this.hideRefLower);
    };
    showHeader = () => {
        let io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) this.setState({ hideNav: false })
            });
        });
        io.observe(this.showRefUpper);
        io.observe(this.showRefLower);
    };
    render() {
        const {
            toolsHover,
            iconHover,
            keysHover,
            hideNav,
        } = this.state;
        return (
            <div id="App">
                <header className={hideNav ? "trans-header" : "fixed-header"}>
                    <div className="logo-home">
                        <img src={hideNav ? "" : logo} alt="" />
                    </div>
                    <ul className={hideNav ? "nav-home-top-trans" : "nav-home-top skew"}>
                        <li> <a href="">Employer </a> </li>
                        <li> <a href=""> Member </a> </li>
                        <li> <a href=""> Broker </a> </li>
                        <li> <a href=""> Provider </a> </li>
                    </ul>
                    <ul className={hideNav ? "nav-home-skewed-trans" : "nav-home-skewed"}   >
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
                                <span ref={this.setShowRefUpper} className="unskew">
                                    CONDIMENTUM
                                </span>
                            </h3>
                        </section>
                    </div>
                </section>

                <section className="branding-home">
                    <section className="branding-copy">
                        <h2 ref={this.setShowRefLower}>
                            auris suscipit pharetra
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
                            <h5 ref={this.setHideRefUpper}>cras</h5>
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

                        <section //className="teaser col-1-3"
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
                        <h3 ref={this.setHideRefLower}> Praesent metus </h3>
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
                    <section
                        style={{
                            //   margin: '0 auto',
                            textAlign: 'center',
                            color: 'white',
                            height: 100,
                            textTransform: 'uppercase'
                            //                            borderBottom: '8px solid #fff',
                        }}
                        className="footer-hm-top">
                        <div
                            style={{

                            }}
                            className="col-1-5">
                            <h5 style={{
                            }}>contact us</h5>
                        </div>

                        <div className="col-1-5">
                            <h5>careers</h5>
                        </div>

                        <div className="col-1-5">
                            <h5>Lipsum.com</h5>
                        </div>
                    </section>
                    <hr style={{
                        color: 'white', background: 'white',
                        height: 1.1,
                        width: '70%',
                        margin: '0 0 5% 15%',
                    }} />
                    <section className="footer-hm-btm">
                        <img src={logoWhite} alt="logo" />
                        <img src={linkedin} alt="logo" />
                    </section>
                </footer>
            </div>
        );
    }
}

export default App;
