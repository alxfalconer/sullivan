export interface Observation {
  slug: string
  number: string
  title: string
}

export function useObservations() {
  const list: Observation[] = [
    {
      slug: 'every-tool-creates-its-own-excess',
      number: 'I',
      title: 'Every Tool Creates Its Own Excess.',
    },
    {
      slug: 'panic-architecture',
      number: 'II',
      title: 'Panic Architecture',
    },
    {
      slug: 'the-cost-of-addition',
      number: 'III',
      title: 'The Cost of Addition',
    },
    {
      slug: 'reduction-is-construction',
      number: 'IV',
      title: 'Reduction Is Construction',
    },
    {
      slug: 'digital-stewardship',
      number: 'V',
      title: 'Digital Stewardship',
    },
    {
      slug: 'the-editor-replaces-the-builder',
      number: 'VI',
      title: 'The Editor Replaces the Builder',
    },
  ]

  function find(slug: string) {
    return list.find(o => o.slug === slug)
  }

  return { list, find }
}
