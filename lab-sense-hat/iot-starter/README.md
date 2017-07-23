# Create a Node-RED application to subscribe to Watson IoT Events

Learn how to use a simulated temperature sensor connected to a Node-RED application in IBM Bluemix, send tweet and Twilio text messages when high temperatures occur, store temperature events in a Cloudant NoSQL database, and use a Raspberry Pi with a Sense HAT to bring in real-time environment sensor data.

## Getting Started

Download and follow the lab found in [lab-temperature-sensor-with-iot-starter.pdf](https://github.com/jeancarl/node-red-labs/blob/master/lab-sense-hat/iot-starter/lab-sense-hat-iot-starter.pdf).

## Code Snippets

JSON code of Node-RED flows created in this lab is provided for your convenience in the following files:

* [1-twitter-flow.json](https://github.com/jeancarl/node-red-labs/blob/master/lab-sense-hat/iot-starter/code/1-twitter-flow.json) Node-RED flow to send a tweet via an authenticated Twitter account.
* [2-twilio-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-sense-hat/iot-starter/code/2-twilio-flow.json) Node-RED flow to send a text message via the Twilio service.
* [3-publish-temperature-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-sense-hat/iot-starter/code/3-publish-temperature-flow.json) Node-RED flow to publish IoT data to Watson IoT Platform
* [4-save-temp-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-sense-hat/iot-starter/code/4-save-temp-flow.json) Node-RED flow to store temperature sensor data in a cloud-based Cloudant NoSQL database.
* [5-retrieve-temps-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-sense-hat/iot-starter/code/5-retrieve-temps-flow.json) Node-RED flow to retrieve historical temperature sensor data for use in analytical tools.

## License

This code is licensed under Apache 2.0. Full license text is available in [LICENSE](https://github.com/jeancarl/node-red-labs/tree/master/lab-sense-hat/LICENSE).
