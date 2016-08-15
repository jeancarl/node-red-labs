# Tracking Temperature with Intel Edison and Grove Sensors

Learn how to use a simulated temperature sensor connected to a Node-RED application in IBM Bluemix, send tweet and Twilio text messages when high temperatures occur, and store temperature events in a Cloudant NoSQL database.

Learn how to install Node-RED on an Intel Edison board, use a Grove temperature sensor to get a real temperature reading, display the temperature on a Grove LCD screen, trigger an LED light when high temperature is read, and connect the application to the Watson Internet of Things Platform service.

## Getting Started

Download and follow the lab found in [lab-temperature-sensor-with-intel-edison.pdf](https://github.com/jeancarl/node-red-labs/blob/master/lab-temperature-sensor-with-intel-edison/lab-temperature-sensor-with-intel-edison.pdf).

## Code Snippets

JSON code of Node-RED flows created in this lab is provided for your convenience in the following files:

* [1-twitter-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-temperature-sensor-with-intel-edison/code/1-twitter-flow.json) Node-RED flow to send a tweet via an authenticated Twitter account.
* [2-twilio-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-temperature-sensor-with-intel-edison/code/2-twilio-flow.json) Node-RED flow to send a text message via the Twilio service.
* [3-temperature-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-temperature-sensor-with-intel-edison/code/3-temperature-flow.json) Node-RED flow to read a value from the Grove Temperature sensor connected to an Intel Edison and display it on an LCD screen.
* [4-led-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-temperature-sensor-with-intel-edison/code/4-led-flow.json) Node-RED flow to turn on a Grove LED light if the temperature reaches a specified threshold.
* [5-weather-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-temperature-sensor-with-intel-edison/code/5-weather-flow.json) Node-RED flow to retrieve weather conditions from the Weather Company Data for IBM Bluemix service and display it on the Grove LCD screen connected to the Intel Edison.
* [6-iot-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-temperature-sensor-with-intel-edison/code/6-iot-flow.json) Node-RED flow to send temperature from Grove Temperature sensor connected to Intel Edison to the Watson Internet of Things Platform.
* [7-save-temp-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-temperature-sensor-with-intel-edison/code/7-save-temp-flow.json) Node-RED flow to store temperature sensor data in a cloud-based Cloudant NoSQL database.
* [8-retrieve-temps-flow.json](https://github.com/jeancarl/node-red-labs/tree/master/lab-temperature-sensor-with-intel-edison/code/8-retrieve-temps-flow.json) Node-RED flow to retrieve historical temperature sensor data for use in analytical tools. 

## License

This code is licensed under Apache 2.0. Full license text is available in [LICENSE](https://github.com/jeancarl/node-red-labs/tree/master/lab-temperature-sensor-with-intel-edison/LICENSE).
