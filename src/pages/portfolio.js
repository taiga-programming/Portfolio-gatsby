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
          <title>Generic - Forty by HTML5 UP</title>
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
                    <p>This is Nouturs that I made on Udemy .Material was only css and html without Javascript . when i finsihed this site thatmoment was amazing for me .I only have done coding</p>
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
                      <h3>Rhoncus magna</h3>
                  </header>
                  <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                  <ul className="actions">
                    <li><a href="https://sharp-carson-01ebf6.netlify.app/" className="button next"/></li>  
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
                        <h3>Sed nunc ligula</h3>
                    </header>
                    <p>dnewndedn</p>
                    <ul className="actions">
                      <li><a href="https://sharp-carson-01ebf6.netlify.app/" className="button next"/></li>  
                    </ul>
                </div>
            </div>
        </section>
      </section>
    </Layout>
)

export default Portfolio