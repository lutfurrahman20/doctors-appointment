import { assets } from "../assets/assets";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                {/* ...left section.... */}
                <div>
                    <img className="mb-5 w-40" src={assets.logo} alt="" />
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">Our platform is dedicated to providing a seamless experience for booking appointments with trusted doctors and hospitals. Whether you need a routine check-up or specialized care, we connect you with healthcare professionals who prioritize your well-being. Book your appointment today and take the first step toward a healthier future.
                    </p>

                </div>
                {/* .... middle section..... */}
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/* .... right section..... */}
                <div>
                    <p className="font-medium text-xl mb-5">Get In Touch</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+88-01690-131036</li>
                        <li>lutfurrahamn737@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/* .....copyright text..... */}
            <div>
                <hr />
                <p className="py-5 text-center text-sm">&copy; {currentYear} All Rights Reserved. Doctors Appointment Platform</p>
            </div>
            
        </div>
    );
};

export default Footer;