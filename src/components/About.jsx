import React from 'react'
import Frame from '../assets/Frame.png'
import Box1 from '../assets/Box1.png'
import Box2 from '../assets/Box2.png'
import Box3 from '../assets/Box3.png'
import Box4 from '../assets/Box4.png'

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={Frame} alt="" 
             className=''/>
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
             The unseen of spending 3 years 
            </h2>
           <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit facere vitae quod incidunt. Ducimus culpa autem, provident ipsam maiores vero hic voluptatibus aliquam odit at reprehenderit, corporis recusandae consectetur fugit.
           </p>
           <button className='btn-primary hover:bg-neutralDGrey  bg-brandPrimary px-7 py-2 text-white rounded  transition-all duration-300 hover:-translate-y-4'>Learn More</button>
          </div>
        </div>
      </div>
      {/*Company stats  */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/2'>
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
             Helping a local <br />
             <span className='text-brandPrimary'>business reinvent itself</span>  
            </h2>
           <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
            We reached here with our hard work and dedication
           </p>

          </div>
          {/* stats */}
          <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around'>
            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img src={Box1} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <img src={Box2} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">46,328</h4>
                  <p>Members</p>
                </div>
              </div>


            </div>


            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img src={Box3} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">2,456,341</h4>
                  <p>Event Bookings</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <img src={Box4} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                  <p>Payments</p>
                </div>
              </div>


            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About
