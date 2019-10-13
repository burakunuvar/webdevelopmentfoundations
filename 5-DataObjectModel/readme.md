
$ document.getElementsByTagName("h1")
$ document.getElementsByClassName("second")
$ document.getElementsByClassName("second")[0]
$ document.getElementByID("first")

$ document.querySelector("h1");
$ document.querySelectorAll("li");


$ document.querySelector("li").getAttribute("height");
$ document.querySelector("li").setAttribute("widthadded");

$ document.querySelector("h1").style.background = "yellow"

HTML => text & CSS =>style & JS => action

$ var h1 = document.querySelector("h1");


  h1.className = "coolTitle" //from styles.css file

$ document.querySelector("li").classList.add("classname1")
$ document.querySelector("li").classList.remove("classname1")
$ document.querySelector("li").classList.toggle("classname1")

$ document.querySelector("h1").innerHTML = "<strong>!!! </strong>"

$ document.querySelectorAll("li").parentElement.parentElement
$ document.querySelectorAll("li").parentElement.children
