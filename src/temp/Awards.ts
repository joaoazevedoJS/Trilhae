interface AwardsProps {
  id: number;
  description: string;
  points: number;
}

const Awards: Array<AwardsProps> = [
  {
    id: 1,
    description: 'Mentoria',
    points: 100,
  },
  {
    id: 2,
    description: 'Relatório personalizado',
    points: 100,
  },
  {
    id: 3,
    description: 'Certificado de conclusão',
    points: 100,
  },
  {
    id: 4,
    description: 'Match com empresa parceira',
    points: 500,
  },
];

export default Awards;
