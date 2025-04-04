/* eslint-disable no-unused-vars */
import React from 'react'

// eslint-disable-next-line react/prop-types
function Card({username = "SR ",post ="software",url ="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=600"}) {
  return (
    // <div>
    //  <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    //   <h1 classNameName='text-2xl bg-green-500 p-3 rounded'>A card of photos</h1>
    //   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste nam dolores architecto deleniti qui autem quo ipsum magni,
    //      et ut enim aliquam aspernatur mollitia, ea hic totam id nulla. Expedita ad minus eum magnam.</p>
    // </div>
    <div>

      <figure className="md:flex bg-slate-100 rounded-xl  p-8 md:p-0 dark:bg-slate-800">
        
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
        src={url} alt="" 
        width="384" height="512" />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, facilis.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
              {username}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {post}
              </div>
            </figcaption>
          </div>
      </figure>


    </div>
  )
}


export default Card
