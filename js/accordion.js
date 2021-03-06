// W3C's JS Code
var acc = document.getElementsByClassName("accordion");
var i;

// Add onclick listener to every accordion element
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        // For toggling purposes detect if the clicked section is already "active"
        var isActive = this.classList.contains("active");

        // Close all accordions
        var allAccordions = document.getElementsByClassName("accordion");
        for (j = 0; j < allAccordions.length; j++) {
            // Remove active class from section header
            allAccordions[j].classList.remove("active");

            // Remove the max-height class from the panel to close it
            var panel = allAccordions[j].nextElementSibling;
            var maxHeightValue = getStyle(panel, "maxHeight");

            if (maxHeightValue !== "0px") {
                panel.style.maxHeight = null;
            }
        }

        // Toggle the clicked section
        isActive ? this.classList.remove("active") : this.classList.add("active");

        // Toggle the panel element
        var panel = this.nextElementSibling;
        var maxHeightValue = getStyle(panel, "maxHeight");

        if (maxHeightValue !== "0px") {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };
}
  
// Cross-browser way to get the height of an element. From @CMS on StackOverflow (http://stackoverflow.com/a/2531934/7926565)
function getStyle(el, styleProp) {
var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard:
    if (defaultView && defaultView.getComputedStyle) {
        // in CSS notation
        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE

        // camelCase standard
        styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
            return letter.toUpperCase();
        });
        value = el.currentStyle[styleProp];
    
        // convert to pixels for IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
            return (function(value) {
                var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
                el.runtimeStyle.left = el.currentStyle.left;
                el.style.left = value || 0;
                value = el.style.pixelLeft + "px";
                el.style.left = oldLeft;
                el.runtimeStyle.left = oldRsLeft;
                return value;
            })(value);
        }
    return value;
  }
}