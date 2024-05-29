'use strict'

const mongoose = require('mongoose')
const _SECONDS = 5800
const os = require('os')
const process = require('process')

// count connect
const countConnect = () => {
  const numConnection = mongoose.connections.length
  console.log(`Number of connections: ${numConnection}`)
}

// check over load
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length
    const numCores = os.cpus.length
    const memoryUsage = process.memoryUsage().rss

    // example meximum number of connection based on number osf cors
    const maxConnections = numCores * 5

    console.log(`Active connections: ${numConnection}`)
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`)

    if (numConnection > maxConnections) {
      console.log(`Connection overload detected`)
    }
  }, _SECONDS) // Monitor every 5 seconds
}

module.exports = {
  countConnect,
  checkOverload
}
