// import useSwr from 'swr'
import useTranslation from 'next-translate/useTranslation'

// const fetcher = (url: string) => fetch(url).then((res) => res.json())

const boxes = [
  { quantity: 6, maxFlavors: 3, amount: 9 },
  { quantity: 12, maxFlavors: 4, amount: 15 },
  { quantity: 25, maxFlavors: 5, amount: 28 },
]

const BoxSets = () => {
  const { t } = useTranslation('boxset')
  // const { data, error } = useSwr('/api/flavors', fetcher)

  // if (error) return <div>Failed to load flavors</div>
  // if (!data) return <div>Loading...</div>

  return (
    <section className="mx-4 mb-16">
      <div>
        <h2 className="mb-4 font-thin tracking-widest text-xl sm:text-3xl uppercase">
          {t('boxset:title')}
        </h2>
      </div>
      <div>
        <ul className="divide-y">
          {boxes.map((box: any) => (
            <li key={box.quantity}>
              <div className="flex items-center justify-between py-4">
                <div>
                  <h3 className="text-lg text-gray-800">
                    {t('boxset:box_title', { quantity: box.quantity })}
                  </h3>
                  <p className="text-sm lowercase text-gray-500">
                    {t('boxset:max_flavors', { max_flavors: box.maxFlavors })}
                  </p>
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-bold text-gray-800">
                    {box.amount}€
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { BoxSets }
