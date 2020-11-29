import React from 'react'
import '../css/Dashboard.css'
import Cards from './Cards'
function Dashboard({users}) {
    return (
        <div className="dashboard">
           <section className="dashboard__wave">
      
            <svg xmlns="http://www.w3.org/2000/svg" className="dashboard__waveimg" viewBox="0 0 1440 320"><path fill="#E1CDEB" fill-opacity="1" d="M0,224L40,224C80,224,160,224,240,197.3C320,171,400,117,480,106.7C560,96,640,128,720,165.3C800,203,880,245,960,266.7C1040,288,1120,288,1200,277.3C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="dashboard__waveimg_cover" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L40,224C80,224,160,224,240,197.3C320,171,400,117,480,106.7C560,96,640,128,720,165.3C800,203,880,245,960,266.7C1040,288,1120,288,1200,277.3C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <div className="dashboard__card">
            < Cards users={users}/>
            </div>
           

               </section> 
        </div>
    )
}

export default Dashboard
