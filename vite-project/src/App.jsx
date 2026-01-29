import Header from './components/Header'
import Card from './components/Card'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Header title="Моё первое React-приложение" />

      <Card
        name="React"
        description="Библиотека для создания интерфейсов"
      />

      <Card
        name="Vite"
        description="Быстрый сборщик проектов"
      />
    </Layout>
  )
}

export default App
