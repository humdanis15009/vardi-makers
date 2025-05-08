import Image from "next/image"

const productCategories = [
    {
        title: "Automobile Uniforms",
        description: "The right balance of style and durability for the hard-working environment.",
        image: "/automobile-uniform.jpg",
    },
    {
        title: "Catering Uniforms",
        description: "Look dapper and smart and serve with a smile.",
        image: "/catering-uniform.jpg",
    },
    {
        title: "Cloth Bags",
        description: "Bags that are both eco and pocket friendly.",
        image: "/cloth-bags.jpg",
    },
    {
        title: "College Uniforms",
        description: "Prepare yourself formally for all your future endeavours.",
        image: "/college-uniform.jpg",
    },
    {
        title: "Computerised Embroidery",
        description: "Find all your favourite designs crafted digitally with this new take on embroidery.",
        image: "/embroidery.jpg",
    },
    {
        title: "Corporate T-shirts",
        description: "For casual office hours and team outings.",
        image: "/corporate-tshirt.jpg",
    },
    {
        title: "Corporate Uniforms",
        description: "Nothing cheers 'teamwork' better than formal corporate wear. Smart and Stylish.",
        image: "/corporate-uniform.jpg",
    },
    {
        title: "Factory Uniforms",
        description: "Affordable and quality options for the daily workers that cover safety and durability.",
        image: "/factory-uniform.jpg",
    },
    {
        title: "Hospital Uniforms",
        description: "High quality fabric that ensures cleanliness and hygiene.",
        image: "/hospital-uniform.jpg",
    },
    {
        title: "Hotel Uniforms",
        description: "From Aprons to Blazers, stylish options for all hospitality needs.",
        image: "/hotel-uniform.jpg",
    },
    {
        title: "Housekeeping Uniforms",
        description: "Look smart and feel confident in a job that demands being organized and clean.",
        image: "/housekeeping-uniform.jpg",
    },
    {
        title: "Industrial Uniforms",
        description: "Strong fabric with long life to meet any industrial requirement.",
        image: "/industrial-uniform.jpg",
    },
]

const Products = () => {
    return (
        <section id="products" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Our Products</h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    We offer a wide range of high-quality uniforms and textile products for various industries and requirements.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                        >
                            <div className="relative h-48">
                                <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{category.title}</h3>
                                <p className="text-gray-600">{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Products
