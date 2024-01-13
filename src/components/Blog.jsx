import React from 'react'

const Blog = () => {
  const blogs=[
    {
      id:1,
      title:"Creating Streamlined Safeguarding Process with OneRen",
      image:"/src/assets/Blog1.png"  ,
    },
    {
      id:2,
      title:"What are your safeguarding responsibilities and how can you manage them?",
      image: "/src/assets/Blog2.png"  ,
    },
    {
      id:3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: "/src/assets/Blog3.png"  ,
    }, 
  ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-12' id="faq">
      <div className='text-center md:w-1/2 mx-auto'>
      <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
    Caring is the new marketing
            </h2>
           <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit facere vitae quod incidunt. Ducimus culpa autem, provident ipsam.
           </p>
      </div>

      {/* All Blogs */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {
          blogs.map(blog=>(
            <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
              <img src={blog.image} alt=""  className='hover:scale-95 transition-all duration-300'/>
              <div className='text-center p-2 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute  left-0 right-0 -bottom-12'>
                <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                <div className='flex items-center justify-center gap-8'>
            <a href="/" className='font-bold text-brandPrimary hover:text-netral-700'>Read More
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M8.7139 6.40938L11.006 4.11729C11.2778 3.84546 11.2778 3.40473 11.006 3.1329L8.7139 0.84082M10.8021 3.6251L1.05713 3.6251"
                      stroke="#4CAF4F"
                    />
                  </svg>
                  </a>
          </div>
              </div>


              </div>))
        }
      </div>
    </div>
  )
}

export default Blog
