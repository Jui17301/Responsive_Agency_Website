import React from 'react'
import pana from '../assets/pana.png'

const Products = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={pana} alt="" 
             className=''/>
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
             How to design your site footer like we did 
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
          <div className='md:w-1/3'>
        

          </div>
          {/* stats */}
         
         
        </div>

      </div>
     
    </div>
  )
}

export default Products
