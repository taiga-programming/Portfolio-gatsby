import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding-Other'


import pic11 from '../assets/images/pic11.jpg'

const Other = (props) => (
    <Layout>
        <Helmet>
            <title></title>
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

export default Other