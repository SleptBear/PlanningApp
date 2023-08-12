import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { PlanningApp } from './services'
import './App.css'

function App() {
  // could create simple state object if data would only need to pass dowards in simple app
  // const [STATE, setSTATE] = useState({
  //   ui: {},
  //   plans: {},
  // })

  return (
    <>
      {/* <Nav props={STATE.ui.nextPlan}/> */}
      <div>Travel Application</div>
      {/* <PlanningApp /> */}
      {/* FlightTrackingApp */}
      {/* HotelBookingApp */}
      {/* MessagingApp */}
    </>
  )
}

export default App
