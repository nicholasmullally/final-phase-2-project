import React from 'react'
import Video from "../components/Video"
import List from "../components/List"
import Comments from "../components/Comments"

function Home() {
  return (
    <div>
        <Video />
        <List />
        <Comments />
    </div>
  )
}

export default Home