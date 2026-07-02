export interface Observation {
  slug: string
  number: string
  title: string
}

export function useObservations() {
  const list: Observation[] = [
    {
      slug: 'anyone-can-build',
      number: 'I',
      title: 'Anyone can build. Few know what deserves to exist.',
    },
    {
      slug: 'panic-architecture',
      number: 'II',
      title: 'Panic Architecture',
    },
    {
      slug: 'form-follows-function',
      number: 'III',
      title: 'Form Follows Function',
    },
    {
      slug: 'product-reduction',
      number: 'IV',
      title: 'Product Reduction',
    },
    {
      slug: 'the-cost-of-addition',
      number: 'V',
      title: 'The Cost of Addition',
    },
    {
      slug: 'restraint',
      number: 'VI',
      title: 'Restraint as Competitive Advantage',
    },
  ]

  function find(slug: string) {
    return list.find(o => o.slug === slug)
  }

  return { list, find }
}
