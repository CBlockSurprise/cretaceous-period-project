
var useCookies = false;

function doCookies(b) {
  useCookies = b;
  removeElement("cookieAlert");
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
