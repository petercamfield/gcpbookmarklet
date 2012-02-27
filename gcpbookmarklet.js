var script=document.createElement('SCRIPT');
script.src='http://www.google.com/cloudprint/client/cpgadget.js';
script.type='text/javascript';
document.body.appendChild(script);

var printDiv=document.createElement('DIV');
printDiv.id='bookmarklet_print_button_container';
document.body.appendChild(printDiv);

var addPrintButton = function() {
    var gadget = new cloudprint.Gadget();
	gadget.setPrintButton(cloudprint.Gadget.createDefaultPrintButton("bookmarklet_print_button_container"));
	gadget.setPrintDocument("url", document.title, document.URL);
};

window.setTimeout(addPrintButton, 200);