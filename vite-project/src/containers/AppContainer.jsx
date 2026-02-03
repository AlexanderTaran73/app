import { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import Button from '../components/Button/Button'

function AppContainer() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Компонент смонтирован')

    return () => {
      console.log('Компонент размонтирован')
    }
  }, [])

  useEffect(() => {
    console.log('Компонент обновлён')
  }, [count])

  const handleClick = () => {
    setCount(prev => prev + 1)
  }

  return (
    <>
      <Header title="Моё React-приложение" />

      <p>Счётчик: {count}</p>
      <Button onClick={handleClick} />

      <Card name="React" description="Библиотека UI" />
    </>
  )
}

export default AppContainer
