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
        <p2>phone: +4790909090</p2>
        <p2>email: contact@koi.no</p2>
    </div>
    <div id="socialMedia" class="footerElement">
        <h3>Social Media</h3>
        <div id="socialMediaList">
            <img src="img/instagram.png" alt="instagram" class="socialMediaIcon">
            <img src="img/instagram.png" alt="Facebook" class="socialMediaIcon">
            <img src="img/instagram.png" alt="LinkedIn" class="socialMediaIcon">
        </div> 
    </div>
    <div id="webDesign" class="footerElement">
        <h3>Web design</h3>
        <p2>Celine Borge Byrkjeland</p2>
        <p2>Daniel Fremming</p2>
        <p2>Khai Sigve Nguyen Litleskare</p2>
        <p2>Ida Marie Mauseth</p2>
        <p2>Celine Hogenstand Nilsen</p2>
    </div>
    <div id="visitUsFooter" class="footerElement">
        <h3>Visit us</h3>
        <p2>Address:</p2>
        <p2>Bassenbakken 4,</p2>
        <p2>Trondheim</p2>
    </div>
    <div id="footerMap" class="footerElement">
        <h3>Her kommer et kart</h3> 
    </div> 

</div>`
