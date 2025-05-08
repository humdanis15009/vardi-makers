import Link from "next/link"
import Image from "next/image"
import Navbar from "./Navbar"

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

            <div className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">THE VARDI MAKERS</h1>
                        <p className="text-lg md:text-xl mb-8 opacity-90">A BRAND OF KRIPLANI TEXTILE MILLS</p>
                        <p className="text-xl md:text-2xl mb-8">
                            The right balance of style and durability for the hard-working environment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#products"
                                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-center transition duration-300"
                            >
                                Explore Products
                            </Link>
                            <Link
                                href="#contact"
                                className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-md font-medium text-center transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md h-80 md:h-96 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-6">
                                    <h3 className="text-2xl font-bold mb-4">Quality Uniforms</h3>
                                    <p className="mb-4">Serving industries with premium quality uniforms since decades</p>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
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
