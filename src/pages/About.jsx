import { assets } from "../assets/assets";


const About = () => {
    return (
        <div>
            <div className="text-center text-2xl pt-10 text-gray-500">
                <p>ABOUT <span className="text-gray-700 font-medium">US</span></p>
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-12">
                <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
                    <p>
                    At [Your Hospital Name], we are committed to providing exceptional healthcare services with compassion, innovation, and excellence. Since our establishment, we have been at the forefront of medical care, ensuring that every patient receives the highest standard of treatment and personalized attention.
                    </p>
                    <p>Our team of highly skilled doctors, nurses, and healthcare professionals work tirelessly to create a healing environment where patients feel cared for and supported. With state-of-the-art facilities, advanced medical technology, and a commitment to continuous improvement, we strive to meet the evolving needs of our community.</p>
                    <b className="text-gray-800">Our Vision</b>
                    <p>We take pride in our wide range of specialties, from general medicine and surgery to cutting-edge diagnostics and specialized treatments. Our mission is to make quality healthcare accessible to everyone while upholding the values of integrity, respect, and compassion.</p>
                </div>
            </div>
            {/* .........another section */}
            <div className="text-xl my-4 ">
                <p className="uppercase">why <span className="text-gray-700 font-semibold">choose us</span></p>

            </div>
            <div className="flex flex-col md:flex-row mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                    <b>Efficiency</b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                <b>Convenience</b>
                <p>Access to a network of trusted healthcare professionals in your area.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
                <b>Personalization</b>
                <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                </div>
            </div>
        </div>
    );
};

export default About;