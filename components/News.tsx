import Link from 'next/link'

const News = () => {
    const newsItems = [
        {
            title: 'Latest Trends in Digital Transformation',
            excerpt: 'Explore the cutting-edge technologies shaping the future of business.',
            date: '2024-01-15',
            link: '#'
        },
        {
            title: 'AI and Machine Learning in Modern Applications',
            excerpt: 'How artificial intelligence is revolutionizing software development.',
            date: '2024-01-10',
            link: '#'
        },
        {
            title: 'Cloud Computing Best Practices',
            excerpt: 'Essential strategies for scalable and secure cloud deployments.',
            date: '2024-01-05',
            link: '#'
        }
    ]

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container-max">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Latest News & Insights
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Stay updated with the latest trends and insights in technology and digital solutions.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.date}</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{item.excerpt}</p>
                            <Link
                                href={item.link}
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                            >
                                Read More →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default News
