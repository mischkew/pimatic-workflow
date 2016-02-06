const fetch = require('isomorphic-fetch')
const ACTION_NAME = 'toggle'
const AUTHENTICATION_KEY = 'YWRtaW46MTIz'
const URL = 'http://raspberrypi'
const API = 'api/device'

function toMessage(device, json) {
  if (json.result && json.success) {
    return `${device.name} was successfully toggled.`
  }

  return `${device.name} could not be toggled.`
}

function toggleDevice(device) {
  const url = `${URL}/${API}/${device.id}/${ACTION_NAME}`
  return fetch(url, {
    headers: {
      'Authorization': `Basic ${AUTHENTICATION_KEY}`
    }
  })
    .then(response => response.json())
    .then(json => toMessage(device, json))
    .catch(error => console.log('failed', error))
}


module.exports = toggleDevice
