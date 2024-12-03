import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="w-10/12  bg-white rounded-lg p-5 mb-4">
            <h3 className="text-[rgb(17,17,17)] font-semibold text-[18px]">{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;