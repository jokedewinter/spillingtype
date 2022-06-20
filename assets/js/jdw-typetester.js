/*
JavaScript for Type Tester

Author: Joke De Winter Ltd
Author URI: https://www.jokedewinter.co.uk
Version: 1.0
*/



/* -------------------------------------------------------------
 * Choose weight
 * ------------------------------------------------------------- */
var selectWeight = document.getElementsByClassName("selectWeight");

for ( let i = 0; i < selectWeight.length; i++ ) {
    selectWeight[i].addEventListener("change", function() {
        
        var chosenWeight = selectWeight[i].value.split(', ');
        document.getElementsByClassName("tryString")[i].style.fontWeight = chosenWeight[0];
        document.getElementsByClassName("tryString")[i].style.fontStyle = chosenWeight[1];
        
    }, false);
}


/* -------------------------------------------------------------
 * Choose size
 * ------------------------------------------------------------- */
var selectSize = document.getElementsByClassName("selectSize");

for ( let i = 0; i < selectSize.length; i++ ) {
    selectSize[i].addEventListener("input", function() { 
        
        var chosenSize = selectSize[i].value;
        document.getElementsByClassName("tryString")[i].style.fontSize = chosenSize + "px";
        document.getElementsByClassName("sizeValue")[i].innerHTML = chosenSize + " px";
        
    }, false);
}


/* -------------------------------------------------------------
 * Choose leading
 * ------------------------------------------------------------- */
var selectLeading = document.getElementsByClassName("selectLeading");

for ( let i = 0; i < selectLeading.length; i++ ) {
    selectLeading[i].addEventListener("input", function() { 
        
        var chosenLeading = selectLeading[i].value;
        var newLeading = chosenLeading / 10;
        document.getElementsByClassName("tryString")[i].style.lineHeight = newLeading;
        document.getElementsByClassName("leadingValue")[i].innerHTML = newLeading;
        
    }, false);
}


/* -------------------------------------------------------------
 * Choose alignment
 * ------------------------------------------------------------- */
var selectAlignment = document.getElementsByClassName("selectAlignment");

for ( let i = 0; i < selectAlignment.length; i++ ) {

    var chosenAlignment = selectAlignment[i].getElementsByTagName("button");
    
    for ( let j = 0; j < chosenAlignment.length; j++ ) {
        
        
        chosenAlignment[j].onclick = function() {    

            // You need to have the correct set of buttons to fix the active class
            var buttons = selectAlignment[i].getElementsByTagName("button");
            
            // Remove active class from previous button
            for ( let k = 0; k < buttons.length; k++ ) {
                if ( buttons[k].classList.contains("active") ) {
                    buttons[k].classList.toggle("active");
                }  
            }
            
            this.classList.toggle("active");
            document.getElementsByClassName("tryString")[i].style.textAlign = this.name;
        }
    } 
} 


/* -------------------------------------------------------------
 * Choose theme
 * ------------------------------------------------------------- */
var selectFont = document.getElementsByClassName("try");

for ( let i = 0; i < selectFont.length; i++ ) {

    var reverseTheme = selectFont[i].getElementsByClassName("reverseTheme");
    for ( let j = 0; j < reverseTheme.length; j++ ) {
    
        reverseTheme[j].onclick = function() { 
           selectFont[i].classList.toggle("reverse");
        }

    }
}


/* -------------------------------------------------------------
 * Reset choices
 * ------------------------------------------------------------- */
var resetTry = document.getElementsByClassName("resetTry");

for ( let i = 0; i < resetTry.length; i++ ) {
    resetTry[i].onclick = function() { 

        var weight = 400;
        var style = "normal";
        var size = 32;
        var leading = 1.2;
        var alignment = "left";
        
        if ( window.screen.width > 768 ) { var size = 48; }
            

        // Reset specimen string values
        document.getElementsByClassName("tryString")[i].style.fontWeight = weight;
        document.getElementsByClassName("tryString")[i].style.fontStyle = style;
        document.getElementsByClassName("tryString")[i].style.fontSize = size + "px";
        document.getElementsByClassName("tryString")[i].style.lineHeight = leading;
        document.getElementsByClassName("tryString")[i].style.textAlign = alignment;

        // Reset option values
        document.getElementsByClassName("sizeValue")[i].innerHTML = size + " px";
        document.getElementsByClassName("leadingValue")[i].innerHTML = leading;

        // Reset active alignment button
        var buttons = document.getElementsByClassName("selectAlignment")[i].getElementsByTagName("button");
        for ( let j = 0; j < buttons.length; j++ ) {
            if ( buttons[j].classList.contains("active") ) {
                buttons[j].classList.toggle("active");
            }
            buttons[0].classList.toggle("active"); 
        } 

        // Reset background colour
        var selectFont = document.getElementsByClassName("try")[i];
        selectFont.classList.remove("reverse");
        
    }
}



