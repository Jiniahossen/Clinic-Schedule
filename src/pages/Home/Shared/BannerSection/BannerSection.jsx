
import useAllBanners from "../../../../hooks/useAllbanners";
import { Link } from "react-router-dom";

const BannerSection = () => {
    const [banners] = useAllBanners();
    const activeBanner = banners.find(banner => banner.isActive === true);
    console.log(banners);
    console.log("Active Banner:", activeBanner);
    const backgroundImageUrl =  activeBanner?.image;

    return (
        <div>
            <div className="hero min-h-[70vh]" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-start text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 font-serif text-white text-2xl md:text-4xl font-bold">{activeBanner?.title}</h1>
                        <p className="mb-5 font-serif text-white text-md">{activeBanner?.details}</p>
                        <h1 className="mb-5 font-serif text-white text-xl font-bold">Use promocode: <span className="text-[#219f85]">{activeBanner?.cuponname}</span>  and <br /> get  <span className="text-[#219f85]">{activeBanner?.cuponrate}% </span>Discount</h1>
                        <Link to={'/all-tests'}>
                            <button className="px-2 py-1 text-white bg-[#219f85]">ALL TEST</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default BannerSection;
