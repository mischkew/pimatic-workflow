const AlfredNode = require('alfred-workflow-nodejs')
const actionHandler = AlfredNode.actionHandler
const workflow = AlfredNode.workflow
const Item = AlfredNode.Item
const listDevices = require('./scripts/list-devices')
const toggleDevice = require('./scripts/toggle-device')


function main() {
  actionHandler.onAction('list-devices', function(query) {
    listDevices().then((devices) => {
      devices.forEach((device) => workflow.addItem(new Item(device)))
      workflow.feedback()
    })
  })

  actionHandler.onAction('toggle-device', function(query) {
    toggleDevice(JSON.parse(query))
      .then((message) => process.stdout.write(message))
  })

  AlfredNode.run()
}

main()
