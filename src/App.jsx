import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';
 export default function App() {
  const [bookmark,setBookmark] = useState([]);
  const [spentTime,setSpentTime] = useState(0);
  const handleSpentTime = blog =>
        {
            console.log("Blog:");
            console.log(blog);
            let newTime = spentTime+blog.reading_time;
            console.log(newTime);
            setSpentTime(newTime);
        }
  const handleBookMark = blog =>
      {
          const newBookMark = [...bookmark,blog]
          setBookmark(newBookMark)
      }
  return (
    <>
        <Header></Header>
        <main className='md:flex mx-auto max-w-6xl mt-8'>
            <Blogs handleSpentTime={handleSpentTime} handleBookMark={handleBookMark}></Blogs>
            <Bookmarks bookmark={bookmark} spentTime={spentTime}></Bookmarks>
        </main>
    </>
  )
}

