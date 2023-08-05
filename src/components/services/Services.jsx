import React from 'react'
import { FaCheck } from 'react-icons/fa'
import './services.css'

function Services() {
  return (
    <section id="services">
      <h5>What I Offer ?</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
      <div className="service__head">
        <h3>Website Buliding</h3>
      </div>
      <ul className='service__list'>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>Front-End Development</p>
        </li>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>Back-End Development</p>
        </li>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>API Integration</p>
        </li>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>Full-Stack Development</p>
        </li>
                <li>
          <FaCheck  className='service__list-icon'/>
          <p>Web Application Development</p>
        </li>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>Website Optimization</p>
        </li>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>Testing and Debugging</p>
        </li>
      </ul>
      </article>
      {/* End of web developement */}

      <article className='service'>
      <div className="service__head">
        <h3>Advance excel</h3>
      </div>
      <ul className='service__list'>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>Advanced Formulas</p>
        </li>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>Data Visualization</p>
        </li>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>PivotTables and PivotCharts</p>
        </li>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>Data Cleaning and Formatting</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>Data Validation</p>
        </li>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>Conditional Formatting</p>
        </li>
        <li>
          <FaCheck  className='service__list-icon'/>
          <p>Excel Dashboards</p>
        </li>
      </ul>
      </article>
      {/* End of excel */}
      </div>
    </section>
  )
}

export default Services