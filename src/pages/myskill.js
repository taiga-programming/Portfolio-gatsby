import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding-Skill'


import pic11 from '../assets/images/pic11.jpg'

const Myskill = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>
        <BannerLanding />

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                   
                  
                </div>
            </section>
        </div>

    </Layout>
)

export default Myskill