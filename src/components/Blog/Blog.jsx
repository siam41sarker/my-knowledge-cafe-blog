import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {cover,author_img,author,posted_date,reading_time,title,hashtags} = blog;
    return (
        <div className='w-11/12'>
                <img className='h-[450px] w-full rounded-lg' src={cover} alt={`this image is of ${title}`}/>
            
            <div className='flex justify-between mt-8'>
                <div className='flex gap-6'>
                        <div className='w-[60px] h-[60px]'>
                            <img src={author_img} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-[rgb(17,17,17)]'>{author}</h3>
                            <p className='text-[rgba(17,17,17,0.6)] text-base font-semibold'>{posted_date}</p>
                        </div>
                </div>
                <div>
                    <p className='text-[rgba(17,17,17,0.6)] text-xl font-medium'>{reading_time}</p>
                </div>
            </div>
            <div className='mt-4'>
                <p className='text-[40px] font-bold text-[rgb(17,17,17)]'>{title}</p>
            </div>
            <div className="mt-4">
                {hashtags.map((hash,index)=><span className='mr-4' key={index}><a className='text-[rgba(17,17,17,0.6)] text-xl font-medium' href="#">{hash}</a></span>)}
            </div>
            <div className='mt-5 mb-9'>
                <button className='text-[rgb(96,71,236)] text-xl font-semibold' ><u>Mark as read</u></button>
            </div>
            <hr className='mb-10' />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
