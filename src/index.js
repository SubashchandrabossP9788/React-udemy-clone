import ReactDOM from "react-dom/client"
import "./style.css"
import one from "./assets/images/1.jpg"
import two from "./assets/images/c1.jpg"
import three from "./assets/images/c2.jpg"
import four from "./assets/images/c3.jpg"
import five from "./assets/images/download.jpg"

const root = ReactDOM.createRoot(document.getElementById("root"))
//compond
function Navbar()
{
    return(<div class="navbar">
    <div class="navbar__s1">
        <h1 class="navbar__s1__title">Udemy</h1>
    </div>
    <div class="navbar__s2">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search any things Product,business.."></input>
    </div>
    <div class="navbar__s3">
        <p>Cources</p>
        <p>My Learnig</p>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-user"></i>
    </div>
</div>)
}
function Categories(){
return(
   
    <div class="categories">
        <p>Development</p>
        <p>Business</p>
        <p>IT & Software</p>
        <p>Marketing</p>
        <p>Persional Development</p>
        <p>Design</p>
    </div>

)}
function Slide(){
    return(
        <div class="scale_img">
            <img src={one} alt="" srcset="" />
        </div>
    )
}
function Recomentation()
{
    return(
        <div class="recommended">
            <h1 class="recommended__title">Recommended for you</h1>
            <p>Pick The best fit</p>
            <div class="recommended__container">
                <div class="course-card">
                    <img src={two} alt=""/>
                    <p>2023 python Date Visulization New Edition</p>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>470<del>2999</del></p>
                </div>
                <div class="course-card">
                    <img src={three} alt=""/>
                    <p>Dot Net New Edition 2024</p>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>550 <del>2999</del></p>
                </div>
                <div class="course-card">
                    <img src={four} height="165px" alt=""/>
                    <p>RDBMS </p>
                    <p>Col Steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>370 <del>2999</del></p>
                </div>
                <div class="course-card">
                    <img src={five} alt=""/>
                    <p>Unix</p>
                    <p>Col Steele</p>
                    <p>2.9 ⭐⭐</p>
                    <p>450 <del>2999</del></p>
                </div>
    
            </div>
        </div>
    )
}

function Topics()
{
    return(
    <div class="topics">
        <h1 class="topics__titles">Topics Recommended for you</h1>
        <div class="topics__container">
            <p>Website</p>
            <p>JavaScript</p>
            <p>CSS</p>
            <p>Mongo DB</p>
            <p>Azure</p>
            <p>Docker</p>
            <p>GitHub</p>
            <p>React JS</p>
            <p>React JS</p>
            <p>React JS</p>
        </div>
    </div>
    )
}
function Most()
{
    return(
        <div class="popular">
        <h1 class="popular_titlt">MOst Popular</h1>
        <p class="popular_subtitle">Pick the Best</p>
        <div class="popular_container">
            <div class="course-card">
                <img src={two} alt=""/>
                <p>2023 python Date Visulization New Edition</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>450 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={three} alt=""/>
                <p>Dot Net New Edition 2024</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>550 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={four} height="175px" alt=""/>
                <p>RDBMS </p>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>350 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={five} alt=""/>
                <p>Unix</p>
                <p>Col Steele</p>
                <p>2.9 ⭐⭐</p>
                <p>450 <del>2999</del></p>
            </div>

        </div>
    </div>
    )
}
function Footer()
{
    return(
        <div class="footer">
            <div class="footer_one">
                <div class="footer_one__sec1">
                    <p>Udemy Business</p>
                    <p>Teach on Udemy</p>
                    <p>Get the App</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                <div class="footer-one__sec2">
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Help and Support</p>
                    <p>Affiliate</p>
                    <p>Investor</p>
                </div>
            </div>
            <div class="footer_two">
                <h1>Udemy</h1>
                <p>@copy;Udemy, Inc</p>
            </div>
        </div>
    )
}
root.render(<div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Slide></Slide>
    <Recomentation></Recomentation>
    <Topics></Topics>
    <Most></Most>
    <Footer></Footer>
    </div>)
