import React from 'react'
import Hero from './components/Hero/Hero'
import Payment from './components/PaymentClick4/Payment'
import ChartStable from './components/StableChart/ChartStable'
import Activation from './components/UserActivePassive/Activation'
import Value from './components/Values/Value'

const Home = () => {
  return (
    <div>
    <Hero/>
    <Activation/>
    <Value/>
    <ChartStable/>
    <Payment/>
    </div>
  )
}

export default Home