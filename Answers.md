1.  Explain the differences between `client-side routing` and `server-side routing`.

In server side Routig, the server handles the routing. The adjustment of a URL in server-side routing can make a lot of things happen. This will happen regularly by clicking on a link, which in turn will request a new page from the server. A whole new document is served to the user.A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether. Server side routing only provides what is needed by the user unlike client side which downloads the whole page 

While Client side routing is handled internally by the Javascript loaded within the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. the whole page won’t refresh when using client-side routing. There are just some elements inside the application that will change. routing is generally more faster on client side since all the whole components of the page have been downloaded during initial loading. Search engine crawling is less optimised with client side routing.


1.  What does HTTP stand for?

HyperText Transfer Protocol


1.  What does CRUD stand for?

Create, Read, Update, Delete


1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create - POST
Read - GET
Update - PUT
Delete - DELETE


1.  Mention three tools we can use to make AJAX requests

Fetch Api
Axios Library
Jquery