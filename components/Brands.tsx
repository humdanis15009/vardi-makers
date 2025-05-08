import Image from "next/image"

const brandLogos = [
    { name: "Raymond", logo: "/raymond-logo.png" },
    { name: "Gwalior Suiting", logo: "/gwalior-logo.jpeg" },
    { name: "Siyarams", logo: "/siyarams-logo.png" },
    { name: "Bombay Dyeing", logo: "/bombay-dyeing-logo.png" },
    { name: "Mafatlal", logo: "/mafatlal-logo.png" },
    { name: "Welspun India", logo: "/welspun-logo.png" },
    { name: "J.Hampstead", logo: "/jhampstead-logo.jpeg" },
    { name: "Cadini", logo: "/cadini-logo.jpeg" },
    { name: "Mistar", logo: "/mistar-logo.png" },
    { name: "Gold Coin", logo: "/goldcoin-logo.jpeg" },
]

const Brands = () => {
    return (
        <section id="brands" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Brands We Deal With</h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    We partner with the best brands in the industry to provide high-quality products.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {brandLogos.map((brand, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-md flex items-center justify-center h-32">
                            <div className="relative w-full h-full">
                                <Image
                                    src={brand.logo || "/placeholder.svg"}
                                    alt={`${brand.name} Logo`}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Brands
