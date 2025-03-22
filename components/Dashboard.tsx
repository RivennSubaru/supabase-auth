import React from 'react'
import { ModeToggle } from './ModeToggle'

const Dashboard = () => {
  return (
    <section className='py-5 px-10'>
      <header className='flex justify-end'>
       <ModeToggle/>
      </header>
    </section>
  )
}

export default Dashboard