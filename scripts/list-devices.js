const Promise = require('bluebird')

function listDevices() {
  return new Promise((resolve, reject) => {
    const devices = [
      {
        uid: 'socket-wall-board',
        title: 'Board Lamp',
        subtitle: 'Currently turned off',
        icon: 'icon.png',
        arg: JSON.stringify({ id: 'socket-wall-board', name: 'Board Lamp' }),
        valid: true
      },
      {
        uid: 'socket-table',
        title: 'Desk Lamp',
        subtitle: 'Currently turned off',
        icon: 'icon.png',
        arg: JSON.stringify({ id: 'socket-table', name: 'Desk Lamp' }),
        valid: true
      },
      {
        uid: 'socket-wall-ceiling',
        title: 'Ceiling Lamp',
        subtitle: 'Currently turned off',
        icon: 'icon.png',
        arg: JSON.stringify({ id: 'socket-wall-ceiling', name: 'Ceiling Lamp' }),
        valid: true
      }
    ]

    resolve(devices)
  })
}


module.exports = listDevices
