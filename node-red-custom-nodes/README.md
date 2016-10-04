# Custom Nodes in Node-RED

Learn how to use IBM Bluemix DevOps services to deploy a Node-RED application, write your own custom sort node, install a community-contributed node, use the global context to store a list of names, and create a registration application that displays the attendee roster in a sorted PDF list.

## Getting Started

Download and follow the lab found in [node-red-custom-nodes.pdf](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/node-red-custom-nodes.pdf). Each section of the lab works through the components necessary for the example application created in the last section of this lab. The JSON for the completed flow can be found in the file  [9-complete-flow.js](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/code/9-complete-flow.js).

## Code Snippets

HTML and JSON code used in this Node-RED tutorial is provided for your convenience in the following files:

* [1-sort.js](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/code/1-sort.js) JavaScript for the custom sort node.
* [2-sort.html](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/code/2-sort.html) HTML for the custom sort node.
* [3-display-form.html](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/code/3-display-form.html) HTML to display the registration page.
* [4-add-attendee-to-list.js](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/code/4-add-attendee-to-list.js) JavaScript to append attendee name to the list.
* [5-display-confirmation.html](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/code/5-display-confirmation.html) HTML to display a confirmation webpage after registration.
* [6-get-attendee-list.js](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/code/6-get-attendee-list.js) JavaScript to get the attendee list from the global context.
* [7-generate-html-list.html](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/code/7-generate-html-list.html) HTML to generate a list of attendees for HTML PDF node.
* [8-set-headers.js](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/code/8-set-headers.js) JavaScript to set the correct HTTP response headers.
* [9-complete-flow.js](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/code/9-complete-flow.js) Import this JSON into Node-RED to build the completed flow.
* [10-complete-cloudant-flow.js](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/code/10-complete-cloudant-flow.js) Import this JSON into Node-RED to build the completed flow that uses Cloudant to store attendee list.

## Deploy Completed Application
For your convenience, the completed application that this lab walks through creating can be deployed to your IBM Bluemix account by clicking on the Deploy to Bluemix button below.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/application)

## License

This code is licensed under Apache 2.0. Full license text is available in [LICENSE](https://github.com/jeancarl/node-red-labs/tree/master/node-red-custom-nodes/LICENSE).
