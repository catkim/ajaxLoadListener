var ajaxMessage = document.getElementById('ajaxRes'),
msgCounter = 1;

(function() {
    const send = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() {
        this.addEventListener('load', function() {
          ajaxMessage.innerHTML = counter + ' Ajax load event(s) fired. <br>';
        })
      return send.apply(this, arguments)
    }
})();
