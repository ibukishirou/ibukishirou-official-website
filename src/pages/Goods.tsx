import { Helmet } from 'react-helmet-async'

export default function Goods() {
  return (
    <>
      <Helmet>
        <title>Goods - 伊吹しろう Official Website</title>
        <meta name="description" content="伊吹しろうの公式グッズ" />
      </Helmet>
      <section style={{ paddingTop: '2rem' }}>
        <h2 className="section-title">Goods</h2>
        <p>Goods page coming soon...</p>
      </section>
    </>
  )
}
