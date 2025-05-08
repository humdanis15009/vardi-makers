const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The company seeks a high standard of performance and aims to maintain a long term leadership position in
                                the textile market. This will be achieved through operating efficiency, continued dedication to customer
                                care, cost-effectiveness, innovation and conformance to our values.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To manufacture products that match international standards, be customer focused and a globally
                                competitive brand through better quality, latest technology, and continuous innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
