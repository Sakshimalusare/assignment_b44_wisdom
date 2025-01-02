import React from 'react'
import Card from "./Card"
import "./Services.css"


function Service () {
  return (
    <section id='service' className='service'>
        <h2>Our Servies</h2>
        <div className='service-container'>
            <Card title="Service 1" description="Description of Service 1"/>
            <Card title="Service 2" description="Description of Service 2"/>
            <Card title="Service 3" description="Description of Service 3"/>
        </div>
    </section>
  )
}

export default Service
