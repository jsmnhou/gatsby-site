import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm the goat.</p>
      <StaticImage
        alt="Choncc"
        src="../images/Choncc_Lifeguard_Tier_1.png"
        // src="https://static.wikia.nocookie.net/leagueoflegends/images/f/f0/Featherknight_Pengu_Render.png/revision/latest?cb=20191220210852://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage