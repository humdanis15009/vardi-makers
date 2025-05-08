import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">THE VARDI MAKERS</h3>
                        <p className="text-gray-400 mb-4">A BRAND OF KRIPLANI TEXTILE MILLS</p>
                        <p className="text-gray-400">The right balance of style and durability for the hard-working environment.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-gray-400 hover:text-white transition duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#products" className="text-gray-400 hover:text-white transition duration-300">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="#details" className="text-gray-400 hover:text-white transition duration-300">
                                    Product Details
                                </Link>
                            </li>
                            <li>
                                <Link href="#brands" className="text-gray-400 hover:text-white transition duration-300">
                                    Brands
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-white transition duration-300">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                                    School Uniforms
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                                    Corporate Uniforms
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                                    Hospital Uniforms
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                                    Hotel Uniforms
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                                    Industrial Uniforms
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <address className="text-gray-400 not-italic">
                            <a
                                href="https://maps.google.com/?q=39/1,+Chandar+nagar,+Almabagh,+Lucknow,+Uttar+Pradesh,+226012"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                39/1, Chandar nagar,
                                <br />
                                Almabagh, Lucknow,
                                <br />
                                Uttar Pradesh, 226012
                            </a>
                        </address>
                        <p className="text-gray-400 mt-2">
                            Phone:{" "}
                            <a href="tel:7572037476" className="hover:text-white transition-colors">
                                7572037476
                            </a>
                        </p>
                        <p className="text-gray-400">
                            Email:{" "}
                            <a href="mailto:thevardimakers@gmail.com" className="hover:text-white transition-colors">
                                thevardimakers@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 mt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} The Vardi Makers. All rights reserved.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
