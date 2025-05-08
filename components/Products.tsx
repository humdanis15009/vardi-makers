import Image from "next/image"

const productCategories = [
    {
        "title": "Automobile Uniforms",
        "description": "Designed for the demanding environment of the automotive industry, these uniforms offer both comfort and durability. With reinforced stitching and breathable fabric, they are made to withstand the rigors of a mechanic’s day, while providing a professional look that reflects the standards of the automotive world.",
        "image": "/automobile-uniform.jpeg"
    },
    {
        "title": "Catering Uniforms",
        "description": "Catering uniforms provide a polished and professional look, ensuring that you not only look great but also stay comfortable through long hours of service. Crafted with high-quality, breathable materials, these uniforms maintain a neat appearance while being practical for food service work, offering both style and functionality.",
        "image": "/catering-uniform.jpeg"
    },
    {
        "title": "Cloth Bags",
        "description": "These eco-friendly cloth bags are a sustainable choice for everyday use, crafted from durable fabrics that are both sturdy and lightweight. Perfect for groceries, shopping, or even as a casual accessory, they come in a variety of styles and colors. Ideal for anyone looking to reduce their carbon footprint while maintaining practicality and style.",
        "image": "/cloth-bags.jpeg"
    },
    {
        "title": "College Uniforms",
        "description": "College uniforms offer a sharp and professional look that prepares students for their future endeavors. Crafted with quality materials, these uniforms are designed to withstand everyday wear and tear while keeping students looking neat and presentable. Whether for formal functions or daily wear, these uniforms provide a polished, academic appearance.",
        "image": "/college-uniform.jpeg"
    },
    {
        "title": "Computerised Embroidery",
        "description": "Experience the precision of computerised embroidery, where intricate designs and logos are brought to life digitally. This technology ensures a level of detail and consistency that manual stitching can’t match. Perfect for customising uniforms, merchandise, and gifts with vibrant, long-lasting designs that stand out and make an impression.",
        "image": "/embroidery.jpeg"
    },
    {
        "title": "Corporate T-shirts",
        "description": "Corporate T-shirts are ideal for casual office days, team outings, or corporate events. Made from soft, breathable fabric, they offer a comfortable yet professional appearance. These T-shirts come in various styles, colors, and sizes, allowing businesses to tailor them for their brand and promote unity in a casual, laid-back setting.",
        "image": "/corporate-tshirt.jpeg"
    },
    {
        "title": "Corporate Uniforms",
        "description": "Corporate uniforms bring a sense of professionalism to any business. Whether you’re in finance, technology, or retail, these uniforms offer a blend of comfort and sharp design that enhances your company’s image. Made from premium materials, they are tailored for a sleek, modern look while providing the durability and comfort needed for long work hours.",
        "image": "/corporate-uniform.jpeg"
    },
    {
        "title": "Factory Uniforms",
        "description": "Built for durability and comfort, factory uniforms are designed to handle the demands of industrial environments. Made from tough, breathable materials, these uniforms offer protection while remaining comfortable for workers who are on their feet all day. They also come with features like reinforced areas for added strength, ensuring they last even in the toughest conditions.",
        "image": "/factory-uniform.jpeg"
    },
    {
        "title": "Hospital Uniforms",
        "description": "Hospital uniforms are designed with the highest standards of hygiene and comfort in mind. Made from soft, easy-care fabrics, they are lightweight yet durable, offering easy movement for healthcare professionals. With a focus on cleanliness and practical functionality, these uniforms ensure a professional and sanitary appearance in any medical setting.",
        "image": "/hospital-uniform.jpeg"
    },
    {
        "title": "Hotel Uniforms",
        "description": "Hotel uniforms offer a professional yet stylish appearance for staff working in hospitality. From elegant aprons to formal blazers, these uniforms are crafted from high-quality materials that are both comfortable and practical. They are designed to maintain a polished look while providing ease of movement for workers, ensuring they can provide excellent service with confidence.",
        "image": "/hotel-uniform.jpeg"
    },
    {
        "title": "Housekeeping Uniforms",
        "description": "Housekeeping uniforms combine comfort, durability, and style to create a functional work outfit that looks as good as it feels. With fabrics that are easy to care for and maintain, these uniforms help workers stay clean and organized while offering a neat and confident appearance. Ideal for anyone in housekeeping roles that require both efficiency and style.",
        "image": "/housekeeping-uniform.jpeg"
    },
    {
        "title": "Industrial Uniforms",
        "description": "Industrial uniforms are made with robust fabrics that can handle even the most challenging work environments. Whether you're working on a construction site or in a factory, these uniforms are designed for strength, protection, and longevity. With features like reinforced stitching and extra durability, they provide the necessary comfort and safety for industrial work.",
        "image": "/industrial-uniform.jpeg"
    }
]

const Products = () => {
    return (
        <section id="products" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-gray-800">Our Products</h2>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    We offer a wide range of high-quality uniforms and textile products for various industries and requirements.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="relative h-64 sm:h-48">
                                <Image
                                    src={category.image || "/placeholder.svg"}
                                    alt={category.title}
                                    layout="fill"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition duration-300 transform hover:scale-105">
                        View All Products
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Products
