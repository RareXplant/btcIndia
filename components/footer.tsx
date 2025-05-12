import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#141a1f] text-center md:text-start text-white px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* About Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <p className="text-sm mb-4">
                        BTC India is a trusted utility construction and marketing company, 
                        delivering smart infrastructure solutions and bold brand strategies with expert 
                        teams and cutting-edge technology.
                        
                    </p>
                    <p className="text-sm">Mon - Sat 10:00 - 7:00,</p>
                    <p className="text-sm">Sunday - CLOSED</p>
                </div>

                {/* Quick Link */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/services">Contact Us</a></li>
                    </ul>
                </div>

                {/* Privacy Term */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Privacy Term</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="/disclaimer">Disclaimer</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/refund-policy">Refund and Returns Policy</a></li>
                    </ul>
                </div>

                {/* Office Location */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Office Location</h3>
                    <p className="text-sm mb-2">+91 6391941226</p>
                    <p className="text-sm">info@btcindia.site</p>
                    <p className="text-sm mb-2">btcdeveloper37@gmail.com</p>
                    <p className="text-sm">
                       Nandial Kachhi, Bard No. 1, Khargapur, Tikamgarh, <br />
                       Madhya Pradesh 472115.
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col lg:flex-row items-center justify-between gap-4">
                <p className="text-sm text-center lg:text-left">
                    Copyright © 2025 BTC India.
                </p>
                <div className="flex gap-4 text-xl">
                    <a href="#"><FaFacebookSquare /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
            </div>
        </footer>
    );
}
