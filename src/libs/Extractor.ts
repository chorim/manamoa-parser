import cheerio from "cheerio"

interface Post {
  name: string
  thumb: string
  origin: string // origin url
}

interface Posts extends Array<Post> {}

export const extractor = (htmlString: string): Posts => {
  const $ = cheerio.load(htmlString)
  const rawPosts = $('.post-row')

  const posts: Posts = []

  rawPosts.each((index: number, element: CheerioElement) => {
    const post: Post = {
      name: $(element).find('.post-subject a').clone().children().remove().end().text().trim(),
      thumb: $(element).find('img').attr('src'),
      origin: $(element).find('a').attr('href')
    }
    posts.push(post)
  })
  return posts
}