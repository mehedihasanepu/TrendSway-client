
import bannerImg from "../../../assets/images/image/banner-img.png"




const Header = () => {
    return (
        <div>
            <img className="w-full h-96 md:h-[700px]" src={bannerImg} alt="" />
        </div>
    );
};

export default Header;