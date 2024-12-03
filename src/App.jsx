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
        <footer
        className="w-full grid grid-cols-1 py-[100px] pl-[50px] gap-14 md:grid-cols-2 lg:h-[446px] bg-[rgb(19,19,19)] lg:flex lg:justify-between lg:py-[100px] lg:px-[140px]">
        <div className="flex flex-col gap-3">
            <div className="flex gap-3">
                <div className="mt-3"><img src="assets/logo.webp" alt=""></img></div>
                <h1 className="text-white text-[32px] font-black">Knowledge Cafe</h1>
            </div>
            <h3 className="text-[rgba(255,255,255,0.9)] mt-3">Location: av. Washington 165, NY CA 54003</h3>
            <h3 className="text-[rgba(255,255,255,0.9)]">Phone:+31 85 964 47 25</h3>
            <h3 className="text-[rgba(255,255,255,0.9)]">Email:info@gmail.com</h3>
            <h3 className="text-[rgba(255,255,255,0.9)]">Openings hours: 9.00 AM - 5.00 PM</h3>
        </div>
        <div className="flex flex-col gap-3">
            <h2 className="text-[rgba(255,255,255,0.9)] text-[18px] font-bold mt-4">Useful Links</h2>
            <a className="text-[rgba(255,255,255,0.6)] mt-5" href="x">Home</a>
            <a className="text-[rgba(255,255,255,0.6)]" href="x">About Us</a>
            <a className="text-[rgba(255,255,255,0.6)]" href="x">Animals</a>
            <a className="text-[rgba(255,255,255,0.6)]" href="x">Foundation</a>
            <a className="text-[rgba(255,255,255,0.6)]" href="x">Contact</a>
        </div>
        <div className="flex flex-col gap-8">
            <h2 className="text-[rgba(255,255,255,0.9)] text-[18px] font-bold mt-4">Drop a Message</h2>
            <form>
                <div className="flex flex-col gap-4">
                    <input type="email" className='w-[240px] h-[49px] bg-[rgba(255,255,255,0.05)] rounded-xl pl-3 text-white' placeholder="Enter your email" />
                    <button
                        className="btn w-[240px] rounded-xl bg-[rgb(14,122,129)] text-white text-xl font-bold border border-solid border-[rgb(14,122,129)] hover:bg-blue-600 hover:border-blue-600">Subscribe</button>
                </div>
            </form>
        </div>
    </footer>
    </>
  )
}

