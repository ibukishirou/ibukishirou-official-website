import { Helmet } from 'react-helmet-async'

export default function Calendar() {
  return (
    <>
      <Helmet>
        <title>Calendar - 伊吹しろう Official Website</title>
        <meta name="description" content="伊吹しろうの配信スケジュール" />
      </Helmet>
      <section style={{ paddingTop: '2rem' }}>
        <h2 className="section-title">Calendar</h2>
        <p>Calendar page coming soon...</p>
      </section>
    </>
  )
}
