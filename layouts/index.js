import Head from 'next/head'

import stylesheet from 'styles/index.scss'

export default ({ children }) => (
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    { children }
  </div>
)
