const header = document.getElementById('header')
const footer = document.getElementById('footer')

header.innerHTML=`
<div class="navbar">
    <<a href="index.html" class="navbarLogo"><img src="img/LogoKoi-invers.png" alt="KOI Massasje" width="212" height="113"></a>
    <div class='navbarLinks'>
        <a href="index.html#ourTreatments" class="navbarLink">What we offer</a>
        <a href="about_us.html" class="navbarLink">About us</a>
        <a href="contact_us.html" class="navbarLink">Contact us</a>
        <button class = "greenButton" onclick="location.href='book.html'">Book</button>
    </div>
</div>
`

footer.innerHTML=`
<div class="footer">
    <div id="contactInfoFooter" class="footerElement">
        <h3>Contact us</h3>
        <p>phone: +4790909090</p>
        <p>email: contact@koi.no</p>
    </div>
    <div id="socialMedia" class="footerElement">
        <h3>Social Media</h3>
        <div id="socialMediaList">
        </div> 
    </div>
    <div id="webDesign" class="footerElement">
        <h3>Web design</h3>
        <p>Celine Borge Byrkjeland</p>
        <p>Daniel Fremming</p>
        <p>Khai Sigve Nguyen Litleskare</p>
        <p>Ida Marie Mauseth</p>
        <p>Celine Hogenstand Nilsen</p>
    </div>
    <div id="visitUsFooter" class="footerElement"></div>
</div>`
