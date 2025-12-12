'use client';

import { Code2, Users, Rocket, DollarSign } from 'lucide-react'
import { useTranslation } from 'react-i18next';

const Advantages = () => {
  const { t } = useTranslation(['pages', 'common']);

  return (
    <section className="py-6 bg-gray-200 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pages:advantages.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('pages:advantages.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Expert Development */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('pages:advantages.expertDevelopment.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages:advantages.expertDevelopment.description')}
            </p>
          </div>

          {/* Dedicated Team */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('pages:advantages.dedicatedTeam.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages:advantages.dedicatedTeam.description')}
            </p>
          </div>

          {/* Fast Delivery */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('pages:advantages.fastDelivery.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages:advantages.fastDelivery.description')}
            </p>
          </div>

          {/* Cost Efficient */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('pages:advantages.costEfficient.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('pages:advantages.costEfficient.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages