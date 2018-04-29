import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import emotionNormalize from 'emotion-normalize'
import { injectGlobal } from 'emotion'

injectGlobal`
${emotionNormalize}

*, *::after, *::before {
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
}
...
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Makethink.com' },
        { name: 'keywords', content: 'make, think' },
      ]}
    />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
