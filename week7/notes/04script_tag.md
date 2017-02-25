# script tag

up until now we have been running code using node, but you can also run code in
the browser. to run your code in the browser you can link a JS file to an html
page with the script tag.

`<script src="app.js"></script>`

you will see script tags located in a few places on html pages. in the head tags
and at the bottom of the body tags. the location of your script tags is
important, especially if you have more than one(we will talk about this in more
detail later). for now I would recommend that your script tag goes at the bottom of your body tag.

    <body>
      <p>some stuff</p>
      <script src="app.js"></script>
    </body>

any JS files will be automatically run by the browser when it reaches
the script tag when you load an html page.
