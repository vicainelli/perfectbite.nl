import useTranslation from 'next-translate/useTranslation'

type Flavor = {
  name: string,
  observation?: boolean
}

const flavors:Flavor[] = [
  { name: 'darkChocolate' },
  { name: 'milkChocolate' },
  { name: 'coffeCacao' },
  { name: 'saltedCaramel' },
  { name: 'coconut' },
  { name: 'dulceDeLeche' },
  { name: 'lemonWhiteBlossoms' },
  { name: 'lemonFeuilletine' },
  { name: 'strawberry' },
  { name: 'milk' },
  { name: 'milkNutella' },
  { name: 'oreo' },
  { name: 'pistachio' },
  { name: 'chocolate' },
  { name: 'chocolateAlmonds' },
  { name: 'baileys', observation: true },
]

const Flavors = () => {
  const { t } = useTranslation('flavors')

  return (
    <section className="mx-4 mb-20">
      <div>
        <h2 className="mb-4 text-xl font-thin uppercase tracking-widest sm:text-3xl">
          {t('flavors:title')}
        </h2>
      </div>
      <div>
        <ul className="divide-y">
          {flavors.map((flavor: Flavor) => (
            <li key={flavor.name}>
              <div className="py-4 text-gray-800 sm:text-lg">
                <p>{t(`flavors:${flavor.name}`)}</p>
                {flavor.observation && (
                  <p className="text-xs">
                    * {t(`common:observations.${flavor.name}`)}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { Flavors }
