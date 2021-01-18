interface AwardsProps {
  id: number;
  description: string;
  points: number;
}

const Awards: Array<AwardsProps> = [
  {
    id: 1,
    description: 'Mentoria sobre carreira em tecnologia',
    points: 100,
  },
  {
    id: 2,
    description: 'Mentoria sobre carreira em ciência humanas',
    points: 100,
  },
  {
    id: 3,
    description: 'Mentoria sobre carreira em ciência exatas',
    points: 100,
  },
  {
    id: 4,
    description: 'Mentoria sobre carreira em engenharias',
    points: 100,
  },
  {
    id: 5,
    description: 'Mentoria sobre na área da saúde',
    points: 100,
  },
  {
    id: 6,
    description: 'Mentoria sobre empreendedorismo',
    points: 100,
  },
  {
    id: 7,
    description: 'Match com empresa',
    points: 500,
  },
];

export default Awards;
