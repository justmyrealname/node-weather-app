var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      if (typeof a == 'number' && typeof b == 'number') {
        resolve(a+b)
      } else {
        reject('Arguments must be numbers')
      }
    }, 1000)
  })
}

asyncAdd(5, 7)
  .then((result) => {
    console.log('Result:', result)
    return asyncAdd(result, 33)
  })
  .then((result) => {
    console.log('Should be 45:', result)
  })
  .catch((error) => {
    console.error(error)
  })

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hey, it worked!')
//     reject('Unable to keep promise')
//   }, 2500);
// })
//
// somePromise
//   .then((message) => {
//     console.log(message)
//   })
//   .catch((errorMessage) => {
//     console.error(errorMessage)
//   })
