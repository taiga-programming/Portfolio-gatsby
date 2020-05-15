import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding-Portfolio'


import { Link } from 'gatsby'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/pic11.jpg'

const Portfolio = (props) => (
    <Layout>
      <Helmet>
          <title></title>
          <meta name="description" content="Generic Page" />
      </Helmet>
        <BannerLanding />

       <section id="two" className="spotlights">
        <section>
            <Link to="/portfolio" className="image">
                <img src={pic08} alt="" />
            </Link>
            <div className="content">
                <div className="inner">
                    <header className="major">
                        <h3>NATOURS</h3>
                    </header>
                    <p>This is Nouturs that I made on Udemy .Material was only css and html without Javascript . when i finsihed this site that's moment amazing for me .I only have done coding</p>
                    <ul className="actions">
                        <li><a href="https://sharp-carson-01ebf6.netlify.app/" className="button next"/></li>  
                    </ul>
                </div>
            </div>
        </section>
        <section>
          <Link to="/portfolio" className="image">
              <img src={pic09} alt="" />
          </Link>
          <div className="content">
              <div className="inner">
                  <header className="major">
                      <h3>Chat-APP</h3>
                  </header>
                 <p>This is chat-app that i learned on YouTube and made it, I used Node.js and Socket and React and Express and html and css</p>
                  <ul className="actions">
                    <li><a href="https://5e99eb144f0e6701720e49da--elastic-noyce-9929b7.netlify.app/" className="button next"/></li>  
                  </ul>
              </div>
          </div>
        </section>
        <section>
            <Link to="/portfolio" className="image">
                <img src={pic10} alt="" />
            </Link>
            <div className="content">
                <div className="inner">
                    <header className="major">
                        <h3>Material-UI</h3>
                    </header>
                    <p>This site is composed by Material-UI and React Everythng I learned on Udemy</p>
                    <ul className="actions">
                      <li><a href="https://material-ui-appppp.herokuapp.com/revolution " className="button next"/></li>  
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <Link to="/portfolio" className="image">
                <img src={pic11} alt="" />
            </Link>
            <div className="content">
                <div className="inner">
                    <header className="major">
                        <h3>Company of development</h3>
                    </header>
                    <p>I did this project during intern. i used Pug(html) and Scss and Webpack and illustraor and Photoshop </p>
                    <ul className="actions">
                      <li><a href="http://u.taiga-blog-life.com/" className="button next"/></li>  
                    </ul>
                </div>
            </div>
        </section>
      </section>
    </Layout>
)

export default Portfolio