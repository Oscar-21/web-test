@import url('reset.css');
@import url('fonts.css');
@import url('icons.css');

img {
  max-width: 100%;
}
body {
  width: 100%;
  font-family: 'Aller-web', Arial, Sans-Serif;
}

/*
  ========================================
  Grid
  ========================================
*/

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
.container {
  padding-left: 8vw;
}

/*
  ========================================
  Clearfix
  ========================================
*/

 .group:before,
.group:after {
  content: "";
  display: table;
}
.group:after {
  clear: both;
}
.group {
  clear: both;
  *zoom: 1;
} 


/*
  ========================================
  Typography
  ========================================
*/


/*
  ========================================
  Links
  ========================================
*/

/*
  ========================================
  Primary header
  ========================================
*/

.primary-header {
  position:fixed ;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: 0 auto;
  height: 25vh; 
  box-shadow: 1px 4px 20px rgba(0,0,0,0.55)
}

header img {
  width: 16.8rem;
  height: 2.81rem;
  float: left; 
  position: relative;
  top: 3.75rem;
}

.light {
  font-family: 'Aller', Fantasy;
  font-weight: 300;
}

.primary-nav {
  font-size: .875rem;
  font-weight: 400;
  letter-spacing: .3rem;
  height: inherit;
  text-transform: uppercase;
  margin-right: 3.12rem;
  height: 100%;
}

.skewed-list {
  height: inherit;
  transform: skew(-20deg)
}

.skewed-list a {
  display:block;
  transform: skew(20deg)
}

.primary-nav li {
  padding-right: 1.87rem;
  border-right: 1px solid grey;
}

.regular {
  box-shadow: 1px 4px 20px rgba(0,0,0,0.55);
  background: grey;
}

.primary-nav li:last-child {
  border: none;
}

.secondary-nav {
  position: relative;
  transform: skew(-20deg);
  top: 3.12rem;
  font-size: .875px;
  font-weight: 400;
  letter-spacing: .031px;
  text-transform: uppercase;
  box-shadow: 1px 4px 20px rgba(0,0,0,0.55);
  margin-left: 50%;
  height: 5rem;
  margin-top: -1.56rem;
  padding-right: 10.63rem;
  background: white;
}

/*
  ========================================
  Primary footer
  ========================================
*/

/*
  ========================================
  Navigation
  ========================================
*/

.nav {
  text-align: right;
}
.nav li {
  display: inline-block;
  margin: 0 .625rem;
  vertical-align: top;
  padding: 3.125rem 1.562rem 1.437rem .75rem;
}
.nav li:last-child {
  margin-right: 0;
}

/*
  ========================================
  Home
  ========================================
*/