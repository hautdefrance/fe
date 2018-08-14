import loadjs from 'loadjs'

export function asyncLoad (resources, name) {
  return new Promise((resolve, reject) => {
    if (loadjs.isDefined(name)) {
      resolve()
    } else {
      loadjs(resources, name, {
        success () {
          resolve()
        },
        error () {
          progress.done()
          reject(new Error('network error'))
        }
      })
    }
  })
}