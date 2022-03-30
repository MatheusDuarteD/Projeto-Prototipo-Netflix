import Layout from './components/layout'
import SeriesCarousel from './components/series-carousel'
import SeriesPreview from './components/series-preview'

function App() {
  return (
    <>
      <Layout>
        <SeriesPreview></SeriesPreview>
        <SeriesCarousel></SeriesCarousel>
      </Layout>
    </>
  )
}

export default App
