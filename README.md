# Bookmarklet for Google Cloud Print

An attempt to inject a Google Cloud Print button into an existing page using a bookmarklet.
Theoretically it will allow you to print a web page from a mobile or tablet [such as an iPhone/iPad] to printer set up as a Google Cloud Printer. 

Anyway without further ado this is what I have [so far](javascript:(function(){var script=document.createElement('SCRIPT');script.src='http://petercamfield.github.com/gcpbookmarklet/gcpbookmarklet.js';script.type='text/javascript';document.body.appendChild(script);})())