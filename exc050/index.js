const getTodos = callback => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      callback(null, request.responseText)
      return
    }

    if (isRequestNotOk) {
      callback('Requisição mal sucedida.', null)
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  request.send()
}

getTodos((error, data) => {
  if(error){
    console.log(error)
    return
  }

  console.log(data)
})