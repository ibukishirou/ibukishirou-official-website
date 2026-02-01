import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - 伊吹しろう Official Website</title>
        <meta name="description" content="VTuber 伊吹しろうの公式サイト。プロフィール、配信スケジュール、グッズ情報などを掲載。" />
      </Helmet>
      <section style={{ paddingTop: '2rem' }}>
        <h1>伊吹しろう Official Website</h1>
        <p>Coming soon...</p>
      </section>
    </>
  )
}
