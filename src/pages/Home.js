import { Link } from 'react-router-dom'

export default function Home() {
  
  //Moves the user to near the top of the page when clicking the "Learn More" buttons
  function focus() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  
  return (
    <div className="home container">
      <div className='home-section'>
        <div className='home-title-container'>
          <h1 className='home-title'>Sean Cruickshank</h1>
          </div>
          <h2 className='home-subtitle'>Web Developer</h2>
        
        <p>Hey there!</p>
        <p>I'm Sean, and I am a IT graduate and junior web developer based in Auckland, New Zealand</p>
        <p>I am looking to meet new people and build my skills in front-end and back-end web design</p>
      </div>

      <div className='home-section'>
        <h1>A bit about me</h1>
        <p>I am a 27 year old developer from New Zealand looking for web development jobs</p>
        <p>I began to persue web development as a career in 2018 and gained my bachelor's degree in IT in 2021</p>
        <p>I'm excited to improve upon my current knowledge and to learn new skills in an ever-changing industry</p>
        
        <div
          className='button-learnmore'
          title='About Page'>
            <Link
              className='button-linktext'
              onClick={focus}
              to='/about/'>
                Learn More
            </Link>
        </div>
      </div>
      
      <div className='home-section'>
        <h1>My portfolio</h1>
        <p>I am currently building out a series of projects to showcase my abilities and learn new skills</p>
        <p>These projects are available to view here!</p>
        <p>This includes screenshots and some documentation, as well as downloads to all my projects</p>

        <div
          className='button-learnmore'
          title='Portfolio Page'>
            <Link
              className='button-linktext'
              onClick={focus}
              to='/portfolio'>
                Learn More
            </Link>
        </div>
      </div>
      
      <div className='home-section'>
        <h1>Getting in contact</h1>
        <p>If you think I would make a greate addition to your team, feel free to reach out!</p>
        <p>I am available by email, and on social media</p>
        <p>Feel free to send me any questions you have and I will try to respond as soon as possible!</p>
        <div
          className='button-learnmore'
          title='Contact Page'>
            <Link
              className='button-linktext'
              onClick={focus}
              to='/contact'>
                Learn More
            </Link>
        </div>
      </div>
    </div>
      
    
  )
}