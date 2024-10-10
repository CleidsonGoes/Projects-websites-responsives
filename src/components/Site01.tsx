import './Site01.css'
import img01 from '../assets/img01.jpg'
import salad from '../assets/salad.jpg'

function SiteOne() {
  return(
    <body>
      <header>
        <a href="#" className="logo">Food<span>.</span></a>
        <ul className="navigation">
            <li><a href="#banner">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#expert">Expert</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      <section className="banner" id="banner">
        <div className="content">
            <h2>Always Choose Good</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel, iusto perspiciatis consectetur necessitatibus doloribus labore expedita facilis repellendus hic dignissimos perferendis minima deleniti unde eligendi vero qui, excepturi eum?</p>
            <a href="#" className="btn">Our Menu</a>
        </div>
      </section>
      <section className='about' id='about'>
        <div className='row'>
          <div className='col50'>
            <h2 className='titleText'><span>A</span>bout Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni sunt, impedit distinctio ab dolorem quam a deleniti, quod sed pariatur debitis nemo laborum quo voluptatibus consequuntur dolore labore tenetur inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae dignissimos praesentium quos perferendis non repudiandae reiciendis unde! Harum deleniti architecto in amet iure fuga doloremque odio nam sequi maxime!<br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, labore obcaecati eius reiciendis dolores iure voluptatibus cupiditate officia minus adipisci. Fugiat nisi accusantium minus hic, consequuntur a doloremque veniam cum.</p>
          </div>
          <div className='imgBx'>
            <img src={img01} alt='imagem 01'/>
          </div>
        </div>
      </section>
      <section className='menu' id='menu'>
        <div className='title'>
          <h2 className='titleText'>Our <span>M</span>enu</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='content'>
          <div className='box'>
            <div className='imgBx'>
              <img src={salad} alt="" />
            </div>
            <div className='text'>
              <h3>Special Salads</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src="menu2.jpg" alt="" />
            </div>
            <div className='text'>
              <h3>Special Soup</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src="menu3.jpg" alt="" />
            </div>
            <div className='text'>
              <h3>Special Pasta</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src="menu4.jpg" alt="" />
            </div>
            <div className='text'>
              <h3>Special Salads</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src="menu5.jpg" alt="" />
            </div>
            <div className='text'>
              <h3>Special Soup</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src="menu6.jpg" alt="" />
            </div>
            <div className='text'>
              <h3>Special Pasta</h3>
            </div>
          </div>
        </div>
        <div className='title'>
          <h2 className='titleText'>Our <span>M</span>enu</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
      <script type="text/javascript">
        {window.addEventListener('scroll', function() {
          const header = document.querySelector('header');
          header.classList.toggle("sticky", window.scrollY > 0)
        })}
      </script>
    </body>
  )
}

export default SiteOne;