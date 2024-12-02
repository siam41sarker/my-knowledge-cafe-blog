import profile_pic from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between border-b-2 pb-3'>
            <p className='text-4xl font-bold text-[rgb(17,17,17)]'>Knowledge Cafe</p>
            <img src={profile_pic} alt="" />
        </header>
    );
};

export default Header;