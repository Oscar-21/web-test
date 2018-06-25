import React, { Component } from 'react';
import './css/main.css';
import './css/medium.css';
import './css/large.css';
import './css/extra-large.css';
import { icon, iconTrans, key, keysTrans, linkedin, logo, logoTrans, wrench, wrenchTrans } from './images';

class App extends Component {
    state = {
        wrenchHover: false,
        keysHover: false,
        iconHover: false,
        hideNav: false,
        mobileNavOpen: false,
    };

    componentDidMount() {
        this.hideHeader();
        this.showHeader();
    };

    /* hide navbar breakpoints */
    hideRefUpper = null
    hideRefLower = null;

    setHideRefUpper = ref => { this.hideRefUpper = ref };
    setHideRefLower = ref => { this.hideRefLower = ref };

    /* show navbar breakpoints */
    showRefUpper = null;
    showRefLower = null;

    /* lazyLoadImages */
    // lazyLoadRef = null
    // setLazyLoadRef = ref => { this.lazyLoadRef = ref };

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
            wrenchHover,
            iconHover,
            keysHover,
            hideNav,
            mobileNavOpen,
        } = this.state;
        return (
            <div id="App">
                <header className={hideNav ? "trans-header" : "fixed-header"}>
                    <div className="logo-home">
                        <img src={hideNav ? "" : logo} alt="" />
                    </div>
                    <nav>
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
                    </nav>
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
                            className={wrenchHover ? "teaser col-1-3 btn-hvr-hm" : "teaser col-1-3"}
                            onMouseEnter={() => { this.setState({ wrenchHover: true }) }}
                            onMouseLeave={() => { this.setState({ wrenchHover: false }) }}
                        >
                            <img
                                src={wrenchHover ? wrenchTrans : wrench}
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
                                src={keysHover ? keysTrans : key}
                                alt=""
                                className="btn-img-hm"
                            />
                            <h5>elefiend</h5>
                        </section>

                        <section
                            className={iconHover ? "teaser col-1-3 btn-hvr-hm" : "teaser col-1-3"}
                            onMouseEnter={() => { this.setState({ iconHover: true }) }}
                            onMouseLeave={() => { this.setState({ iconHover: false }) }}
                        >
                            <img
                                src={iconHover ? iconTrans : icon}
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

                <section className="tablet-hm">
                    <div className="buffer" />
                    <p className="tablet-hm-cpy">
                        Fusce laoreet ullamcorper lacus, ut condimentum risus egestas quis. Proin aliquet sapien interdum feugiat facilisis. Cras commodo sapien in arcu.
                    </p>
                    <div className="bufferRight" />
                </section>
                <footer>
                    <section className="footer-hm-top">
                        <div className="col-1-5">
                            <h5> contact us</h5>
                        </div>

                        <div className="col-1-5">
                            <h5>careers</h5>
                        </div>

                        <div className="col-1-5">
                            <h5>Lipsum.com</h5>
                        </div>
                    </section>
                    <hr className="horizontal" />
                    <section className="footer-hm-btm">
                        <img src={logoTrans} alt="logo" />
                        <img src={linkedin} alt="logo" />
                    </section>
                </footer>
            </div>
        );
    }
}

export default App;
