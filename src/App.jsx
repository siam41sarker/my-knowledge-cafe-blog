import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmarks/Bookmark'
import Header from './components/Header/Header'
 export default function App() {
  return (
    <>
        <Header></Header>
        <main className='md:flex mt-8'>
            <Blogs></Blogs>
            <Bookmark></Bookmark>
        </main>
    </>
  )
}

