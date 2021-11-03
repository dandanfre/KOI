const header = document.getElementById('header')
const footer = document.getElementById('footer')

header.innerHTML=`
<div class="navbar">
    <!--<a href="index.html" class="navbarLogo"><img src="img/LogoKoi.png" alt="KOI Massasje"></a>-->
    <div class='navBarLinks'>
        <a href="index.html#ourTreatments" class="navbarLink">What we offer</a>
        <a href="about_us.html" class="navbarLink">About us</a>
        <a href="contact_us.html" class="navbarLink">Contact us</a>
        <button class = "greenButton" onclick="location.href='book.html'">Book</button>
    </div>
</div>
`

footer.innerHTML=``