import Link from 'next/link'

const CTA = () => {
    return (
        <section className="py-20 bg-blue-600 text-white">
            <div className="container-max text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Let's discuss how we can help you achieve your goals with innovative digital solutions.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                    Get Started <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </section>
    )
}

export default CTA
