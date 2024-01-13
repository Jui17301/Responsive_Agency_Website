import React from 'react'
import pana from '../assets/pana.png'
import Logo1 from "../assets/Logo1.png"
import Logo2 from "../assets/Logo2.png"
import Logo3 from "../assets/Logo3.png"
import Logo4 from "../assets/Logo4.png"
import Logo5 from "../assets/Logo5.png"
import Right from "../assets/Right.png"
import Symbol from "../assets/Symbol.png"

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
        
           <img src={Symbol} alt="" 
            className='w-9/12 h-8/12'/>
          </div>
          {/* stats */}
        <div className='md:w-2/3 mx-auto'>
          <div>
            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, molestiae aperiam. Repellendus amet quod sint ad, et impedit accusantium, provident, magni deserunt eum corrupti rerum?</p>
            <h5 className="text-brandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
            <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
            <div>
         <div className='flex items-center gap-8 flex-wrap'>
         <img src={Logo1} alt=""  className='cursor-pointer'/>
          <img src={Logo2} alt=""  className='cursor-pointer'/>
          <img src={Logo3} alt=""  className='cursor-pointer'/>
          <img src={Logo4} alt=""  className='cursor-pointer'/>
          <img src={Logo5} alt=""  className='cursor-pointer'/>
          <div className='flex items-center gap-8'>
            <a href="/" className='font-bold text-brandPrimary hover:text-netral-700'>Meet all customers
            <img src={Right} alt="" className='inline-block ml-2 w-10 h-10'/></a>
          </div>
         </div>

            </div>
          </div>


        </div>
         
        </div>

      </div>
     
    </div>
  )
}

export default Products
