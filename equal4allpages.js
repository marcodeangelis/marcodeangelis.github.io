document.getElementById("myFooter").innerHTML =
'<a href="mailto:marco.de-angelis@liverpool.ac.uk"><i class="fa fa-envelope" style="font-size:48px; color:slategray"></i></a>' 
+' &nbsp'
+'<a href="https://scholar.google.co.uk/citations?user=3SlJpucAAAAJ&hl=en"><i class="ai ai-google-scholar" style="font-size:48px; color:slategray"></i></a> '
+' &nbsp'
+'<a href="https://twitter.com/linusdea"><i class="fa fa-twitter-square" style="font-size:48px;color:slategray"></i></a>'
+' &nbsp' 
//'<a href="skype:mepyskda?call"><i class="fa fa-skype" style="font-size:48px;color:slategray"></i></a>'
//' &nbsp'
+'<a href="https://www.researchgate.net/profile/Marco_De_Angelis6"><i class="ai ai-researchgate" style="font-size:48px; color:slategray"></i></a>'
+' &nbsp'
+'<a href="https://orcid.org/0000-0001-8851-023X"><i class="ai ai-orcid" style="font-size:48px; color:slategray"></i></a>' 
+' &nbsp'
//'<a href="https://gangarone.slack.com/"><i class="fa fa-slack" style="font-size:48px;color:slategray"></i></a>'
+'<a href="https://github.com/marcodeangelis"><i class="fa fa-github" style="font-size:48px;color:slategray"></i></a>'
+' &nbsp'
+'<a href="https://gitlab.com/marcodeangelis/"><i class="fa fa-gitlab" style="font-size:48px;color:slategray"></i></a>'
+' &nbsp'
+'<a href="https://www.linkedin.com/in/marco-de-angelis-186a2b3b/"><i class="fa fa-linkedin-square" style="font-size:48px; color:slategray"></i></a>'
+' &nbsp'
//'<a href="https://liverpool.academia.edu/MAngelis"><i class="ai ai-academia" style="font-size:48px; color:slategray"></i></a>&nbsp' 
+'<br>'
+'<p><font face="courier", size="2">Email: marco[&darr;]de-angelis[&yen;]liverpool[&darr;]ac[&darr;]uk</font></p>'
//<!--<p style=""><a>https://marcodeangelis.github.io</a></p>-->
+'<p style="font-size: 8pt;">Copyright 2019 &copy Marco de Angelis </p>';

// "<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " You. All"
// + " rights reserved.</p>"
// + "<p id='credits'>Layout by You</p>"
// + "<p id='contact'><a href='mailto:you@you.com'>Contact Us</a> / "
// + "<a href='mailto:you@you.com'>Report a problem.</a></p>";




document.getElementById("myNavbar").innerHTML =
'<nav class="navbar navbar-default">'
+'<div class="container-fluid">'
//<!-- Brand and toggle get grouped for better mobile display -->
+'<div class="navbar-header">'
+'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="true">'
+'<span class="sr-only">Toggle navigation</span>'
+'<span class="icon-bar"></span>'
+'<span class="icon-bar"></span>'
+'<span class="icon-bar"></span>'
+'</button>'
+'</div>'
//<!-- Collect the nav links, forms, and other content for toggling -->
+'<div class="collapse navbar-collapse" id="navbar">'
+'<a class="home" href="index.html">About</a>'
+'<a class="research" href="biblio_flask_2019.html">Research</a>'
+'<a class="talks" href="talks.html">Talks</a>'
+'<a class="service" href="service.html">Service</a>'
+'<a class="apps" href="apps.html">Apps</a>'
+'<a class="contact" href="contact.html">Contact</a>'
+'<a class="oppo" href="opportunities.html">Opportunities</a>'
+'</div>'//<!-- /.navbar-collapse -->
+'</div>'//<!-- /.container-fluid -->
+'</nav>';


// Add active class to the current button (highlight it)
// var header = document.getElementById("navbar");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }


window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// $(document).ready(function() {
//     $( ".btn" ).bind( "click", function(event) {
//         event.preventDefault();
//         var clickedItem = $( this );
//         $( ".btn" ).each( function() {
//             $( this ).removeClass( "active" );
//         });
//         clickedItem.addClass( "active" );
//     });
// });