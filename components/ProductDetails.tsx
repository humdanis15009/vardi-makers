import Image from "next/image"

const productDetails = [
    {
        title: "Aprons",
        description:
            "Choose from a range of Solid Color Aprons that are stylish comfortable and delicious looking! Be kitchen ready with high quality fabrics with amazing colors. Full and Half aprons also available in striped and checkered forms. We customize them according to your requirement too!",
        tags: ["#PlainSolid", "#Stripes&Checks"],
        image: "/apron.jpeg",
    },
    {
        title: "Chef Coat",
        description:
            "Be the smartest chef in the kitchen with the great collection of Chef Coats that come in both Full sleeves and Half Sleeves variety. Customize it to your own needs to match your organization!",
        tags: ["#HalfSleeves", "#FullSleeves"],
        image: "/chef-coat.jpeg",
    },
    {
        title: "Bags",
        description:
            "Go environment-friendly with our new range of Cotton and Polycotton Bags that come in both printed and non printed forms. Affordable and eco-friendly.",
        tags: [],
        image: "/bags.jpg",
    },
    {
        title: "Blazers",
        description:
            "Blazers are one of the most versatile types of formal wear. Get Black and Navy Blue formal blazers suitable for every occasion.",
        tags: ["#Black", "#RaymondNavy"],
        image: "/blazer.jpeg",
    },
    {
        title: "Computerised Embroidery/Printing",
        description:
            "We at RSM are known for high-quality personalized uniforms. Get your personalized digital embroidery done on any of those to elevate the personal touch.",
        tags: ["#BandhanMachine", "#DigitalPrinting", "#ScreenPrinting"],
        image: "/embroidery-detail.jpg",
    },
    {
        title: "Chef Cap",
        description:
            "We have the best Crowns for the Chefs! Find them in 4 different patterns with comfortable Velcro straps so that size is never an issue, and they are machine washable too! Available in 20 Styles.",
        tags: [],
        image: "/chef-cap.jpeg",
    },
]

const ProductDetails = () => {
    return (
        <section id="details" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Product Details</h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Explore our high-quality products with detailed specifications and features.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {productDetails.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row"
                        >
                            <div className="md:w-2/5 relative h-64 md:h-auto">
                                <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                            </div>
                            <div className="md:w-3/5 p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.title}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                {product.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {product.tags.map((tag, idx) => (
                                            <span key={idx} className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
                        Request Catalog
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
