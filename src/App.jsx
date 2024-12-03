import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';
 export default function App() {
  const [bookmark,setBookmark] = useState([]);
  const handleBookMark = blog =>
      {
          const newBookMark = [...bookmark,blog]
          setBookmark(newBookMark)
      }
  return (
    <>
        <Header></Header>
        <main className='md:flex mx-auto max-w-6xl mt-8'>
            <Blogs handleBookMark={handleBookMark} ></Blogs>
            <Bookmarks bookmark={bookmark}></Bookmarks>
        </main>
    </>
  )
}

