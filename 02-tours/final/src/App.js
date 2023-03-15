import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
 
const url = 'https://gapi-staging.iceturtlestudios.com/levels.php?gameid=1'
const url2 = "https://gapi-staging.iceturtlestudios.com/games.php"
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const response2 = await fetch(url2)
      const tours2 = await response2.json()
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      // setTours(tours2)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  const fetchTours2 = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const response2 = await fetch(url2)
      const tours2 = await response2.json()
      const tours = await response.json()
      setLoading(false)
      // setTours(tours)
      setTours(tours2)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours2()}>
            refresh
          </button>
          
        </div>
      </main>
    )
  }
  return (
    <main>  <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
