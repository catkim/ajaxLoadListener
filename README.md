# ajaxLoadListener
Use listener on XMLHttpRequest load event to invoke callback function outside of original XMLHttpRequest request.

Brad Schiff has tutorials and a json file to learn and practice javascript. I'm using his json file to pull the animal data.

https://www.youtube.com/user/LearnWebCode

https://github.com/LearnWebCode

I've added the ajax listener to practice getting access to an ajax callback outside the application code. This is helpful when working with third party code or adding analytics code.

Use case:
Installing tracking code. When user selects a payment method an ajax call is made and returns a message to the page with further instruction and information. The tracking code objective is to attach a variable corresponding to the selection user has made, for example, full payment, deposit or installments. Instead of just getting the DOM element click/selection you can watch for successful ajax response with corresponding message. This ensures that a server error hasn't occurred and provides more accurate data to the analytics reporting. To keep application code separate from tracking code you can use the XMLHttpRequest load event listener.
