import { Code2, Users, Rocket } from 'lucide-react'

const Advantages = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container-max">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Why Choose Codriva?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We deliver exceptional results through our expertise, innovation, and commitment to excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Expert Development */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Code2 className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Development</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Cutting-edge technologies and best practices for robust solutions.
                        </p>
                    </div>

                    {/* Dedicated Team */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dedicated Team</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Experienced professionals committed to your project's success.
                        </p>
                    </div>

                    {/* Fast Delivery */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Rocket className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Efficient processes to deliver high-quality solutions on time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages
