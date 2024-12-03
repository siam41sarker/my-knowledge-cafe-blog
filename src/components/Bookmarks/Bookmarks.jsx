import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmark,spentTime}) => {
    return (
        <div className="md:w-1/3">
            <div className="flex justify-center items-center w-full h-20 border border-solid border-[rgb(96,71,236)] bg-[rgba(96,71,236,0.1)] rounded-lg">
                <h3 className=" text-[rgb(96,71,236)] text-2xl font-bold">Spent time on read: {spentTime} {spentTime>1?' mins':' min'} </h3>
            </div>
            <div className="bg-[rgba(17,17,17,0.05)] rounded-lg mt-6 p-7">
                <h3 className="text-[rgb(17,17,17)] text-2xl font-bold mb-4">Bookmarked Blogs : {bookmark.length} </h3>
                {bookmark.map(each=><Bookmark key={each.id} bookmark={each}></Bookmark>)}
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmark: PropTypes.array.isRequired,
    spentTime:PropTypes.number.isRequired
}
export default Bookmarks;