# Mobile Device Movement/Accelerometer Sensor Lab

Demonstrates how to deploy the iot-html5-phone (https://github.com/ibm-messaging/iot-html5-phone) application and listen to accelerometer values in Node-RED.

# Resources
* [PDF copy of Lab](lab-mobile-accelerometer-sensor.pdf)
* [iot-html5-phone GitHub repo](https://github.com/ibm-messaging/iot-html5-phone)
* [Node-RED JSON flow](node-red-flow.json)

# Deploy via Toolchain

If the Deploy Stage in the Delivery Pipeline fails on the first deployment, it may be caused by the hostname, iot-phone, is already taken. Open the Delivery Pipeline and click on the configure button for the Deploy Stage. Modify the cf push command to include the --hostname option with a unique host as shown below.

```
#!/bin/bash
cf create-service cloudantNoSQLDB Lite iot-phone-cloudant-cloudantNoSQLDB
cf create-service iotf-service iotf-service-free iot-phone-iotf-service

cf push "${CF_APP}" --hostname phone-iot-sensor
# View logs
# cf logs "${CF_APP}" --recent
```

Run the Deploy Stage again.

# Caution!

This lab is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. A portion or all of this lab may become outdated or unavailable at any time.
