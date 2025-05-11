import Link from "next/link"
import Image from "next/image"
import Navbar from "./Navbar"
import FloatingButton from "./FloatingButton"

const Hero = () => {
    return (
        <div className="relative text-white min-h-screen">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-uniform.jpg"
                    alt="Uniform Manufacturing"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
            </div>
            <Navbar />

            <div className="container mx-auto px-4 pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-32 md:pb-24 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            THE VARDI MAKERS
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 opacity-90">
                            A BRAND OF KRIPLANI TEXTILE MILLS
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl mb-6">
                            The right balance of style and durability for the hard-working environment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                href="#products"
                                className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-center transition duration-300"
                            >
                                Explore Products
                            </Link>
                            <Link
                                href="#contact"
                                className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 px-6 py-3 rounded-md font-medium text-center transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                        <FloatingButton />
                    </div>

                    {/* Image/Card Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-sm sm:max-w-md h-72 sm:h-80 md:h-96 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-4 sm:p-6">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Quality Uniforms</h3>
                                    <p className="text-sm sm:text-base mb-3">Serving industries with premium quality uniforms since decades</p>
                                    <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                                        <div className="bg-white/20 p-2 rounded">School Uniforms</div>
                                        <div className="bg-white/20 p-2 rounded">Corporate Wear</div>
                                        <div className="bg-white/20 p-2 rounded">Hospital Uniforms</div>
                                        <div className="bg-white/20 p-2 rounded">Industrial Wear</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
