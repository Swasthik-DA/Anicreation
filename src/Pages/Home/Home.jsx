import Button from '../../Component/Button/Button'
import './Home.css'
const Home = () => {
  return (
  <>
   <div className="Home">
    <div className="HomeContent">
      <h1>Your innerself is yourfullest Version</h1>
      <Button BtnText={"Details"}/>
    </div>
   </div>
   <div className="Classes container">
    <div className="row justify-content-center ">
        <div className="col-sm-5">
           <img src="/assets/i2.jpg" className='img-fluid' alt="" />
        </div>
        <div className="col-sam-6">
          <h1>Naruto</h1>
          <p>
          “Hard work is worthless for those that don’t believe in themselves.” – Naruto Uzumaki
          </p>
          <h1>Sauske</h1>
          <p>
          “Having Too Many Bonds Causes One To Lose Focus, Weakening Their Strongest Wish, Their Greatest Desire.”-Sauske Uchiha
          </p>
        </div>
    </div>
    <div className="row justify-content-center ">
    <div className="col-sam-6">
          <h1>Naruto</h1>
          <p>
          “Hard work is worthless for those that don’t believe in themselves.” – Naruto Uzumaki
          </p>
          <h1>Sauske</h1>
          <p>
          “Having Too Many Bonds Causes One To Lose Focus, Weakening Their Strongest Wish, Their Greatest Desire.”-Sauske Uchiha
          </p>
        </div>
        <div className="col-sm-5">
           <img src="/assets/i3.jpg" className='img-fluid' alt="" />
        </div>
        
    </div>
   </div>
  </>
  )
}

export default Home