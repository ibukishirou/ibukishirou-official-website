import { Helmet } from 'react-helmet-async'

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ - 伊吹しろう Official Website</title>
        <meta name="description" content="よくある質問" />
      </Helmet>
      <section style={{ paddingTop: '2rem' }}>
        <h2 className="section-title">FAQ</h2>
        <p>FAQ page coming soon...</p>
      </section>
    </>
  )
}
