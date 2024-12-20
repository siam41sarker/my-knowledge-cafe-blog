import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
const Blogs = ({handleBookMark,handleSpentTime}) => {
    const [blogs,setBlog] = useState([]);
    useEffect(()=>
        {
            fetch('blog.json')
            .then(res=>res.json())
            .then(data=>setBlog(data))
            .catch()
        },[])
    return (
        <div className="md:w-2/3">
            {blogs.map(blog=><Blog key={blog.id}handleSpentTime={handleSpentTime} handleBookMark={handleBookMark} blog={blog}></Blog>)}
        </div>
    );
};
Blogs.propTypes = {
    handleBookMark: PropTypes.func.isRequired,
    handleSpentTime: PropTypes.func.isRequired
}
export default Blogs;