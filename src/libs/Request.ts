const cloudscraper = require('cloudscraper')

export const fetch = (uri: string) => new Promise<any>((resolve, reject) => {
  cloudscraper.get(uri, (error: any, response: any, body: any) => {
    error ? reject(error) : resolve({res: response, html: body})
  })
})