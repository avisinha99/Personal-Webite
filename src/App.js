
import './App.css';



function App() {
  
  return (
    <div className="App">
      

    <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#">Avi<span>Sinha</span></a></div>
          

            <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            
                <li><a href="#services">Skills</a></li>
                
            </ul>
  
           
        </div>
    </nav>
    <div class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Hello, this is</div>
                <div class="text-2">Avi Apratim Sinha</div>
                <div class="text-3">Final Year Student at<br></br><span> NIIT University</span></div>
            </div>
        </div>
    </div>
    <div className="about" id="about">
        <h2 className="About">About Me</h2>
        <div>
          <p className="para-about">
            I am a final Year student at NIIT Universiy currently pursuing bachelors in Computer Science Engineering.
            I aspire to become a software engineer. I have also done some projects on both App development and Web development which are available in my Github profile.
          </p>
        </div>
        <div className="button-div">
        <a href="https://docs.google.com/document/d/1kJ5RgqvEkV2Krl-SuNn42ZrQ6tlLEZGi/edit"><button className='about-button'>Resume</button></a>
        <a href="https://www.linkedin.com/in/avi-apratim-sinha-06baa7207/"><button className='about-button'>LinkedIn</button></a>
        <a href="https://github.com/avisinha99"><button className='about-button'>Github</button></a>

        </div>
    </div>
    <section class="services" id="services">
        <div class="max-width">
            <h2 class="title">Skills</h2>
            <div class="services-content">
              <div className="skills-container">
                <div className="web">
                  <h3>Web Development</h3>
                  <br></br>
                  <p>I specialize in front-end development, I have worked on various projects using React.js. Apart from React.js, I am also proficient in node.js and MongoDB</p>
                </div>
                <div className="data">
                  <h3>Data Analytics</h3>
                  <br></br>
                  <p>I have worked on some data sets using python. I am also efficient in applying various statistical concepts to draw better inference from data sets.</p>
                </div>
                <div className="app">
                  <h3>App Development</h3>
                  <br></br>
                  <p>I also like app development, I have learnt Flutter which is very helpful in deploying cross platform applications.To provide backend support for my app I generally use Firebase</p>
                </div>
              </div>
              
            </div>
        </div>
    </section>
    <footer class="footer">
        <span class="footer-span1">created by avi sinha</span>
        <br></br>
        <span class="footer-span">email:sinhaavi23@gmail.com</span>
    </footer>
    


    </div>
  );
}

export default App;
