import { fetch } from "./libs/Request"
import { extractor } from "./libs/Extractor"
(async () => {
  const res = await fetch("https://manamoa6.net/bbs/board.php?bo_table=manga")
  const posts = extractor(res.html)
  console.log(posts)
})()