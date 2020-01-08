import config from './config.js'
import fake from './fake.js'

console.log(config)

class UseCases {
  getAPIUrl () {
    return 'https://jsonplaceholder.typicode.com/todos/1'
  }

  getAllData () {
    const url = this.getAPIUrl()
    const options = {
      headers: new Headers({
        'User-agent': 'Mozilla/4.0 Custom User Agent',
        'Content-Type': 'application/json'
      }),
      method: 'GET'
    }
    
    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        return { ...fake, ...config }
      })
  }
}

export default new UseCases
