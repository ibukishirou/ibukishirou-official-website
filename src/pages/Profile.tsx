import { Helmet } from 'react-helmet-async'

export default function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile - 伊吹しろう Official Website</title>
        <meta name="description" content="VTuber 伊吹しろうのプロフィール" />
      </Helmet>
      <section style={{ paddingTop: '2rem' }}>
        <h2 className="section-title">Profile</h2>
        <p>Profile page coming soon...</p>
      </section>
    </>
  )
}
