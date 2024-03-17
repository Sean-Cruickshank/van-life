import portrait from "../../images/photo.png"

export default function Personal() {
  return (
    <div className="about-personal">
      <h1>--- Personal ---</h1>

      <div className="about-personal-container">

        <p>I was born in Wellsford, a small town about an hour north of Auckland in 1997. I have spent my whole life growing up in New Zealand and have moved around a fair bit since then</p>

        <p>After graduating from Rodney College in 2014 I spent a few years attempting to get a degree in Statistics at the University of Canterbury, but eventually realised it wasn't the career path I wanted to follow</p>
      </div>

        <img className="about-personal-image" src={portrait} />
        
      <div className="about-personal-container">
        <p>I began working on online courses for Web Development in 2018, and in 2019 I moved to Invercargill to study and complete my Bachelor's degree in IT</p>

        <p>Growing up I spent a lot of time surrounded by tech and have always wanted to get more involved with learning about the hardware side of things. As of right now I do most of my work off my old notebook, but I would love to build my own computer someday!</p>
      </div>
      <p>Outside of IT my favourite hobbies are astronomy and video games. Before getting into web design, I actually wanted to try game design as a career. But I've found myself more drawn towards building websites and apps since leaving high school. I still love the idea of creating my own game at some point!</p>
    </div>
  )
}