export interface Observation {
  slug: string
  number: string
  title: string
}

export function useObservations() {
  const list: Observation[] = [
    {
      slug: 'anyone-can-build',
      number: '001',
      title: 'Anyone can build. Few know what deserves to exist.',
    },
    {
      slug: 'panic-architecture',
      number: '002',
      title: 'Panic Architecture',
    },
    {
      slug: 'form-follows-function',
      number: '003',
      title: 'Form Follows Function',
    },
    {
      slug: 'product-reduction',
      number: '004',
      title: 'Product Reduction',
    },
    {
      slug: 'the-cost-of-addition',
      number: '005',
      title: 'The Cost of Addition',
    },
    {
      slug: 'restraint',
      number: '006',
      title: 'Restraint as Competitive Advantage',
    },
  ]

  function find(slug: string) {
    return list.find(o => o.slug === slug)
  }

  return { list, find }
}
