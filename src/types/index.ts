export type Option = {
  text: string;
  route: 'Team' | 'Investors' | 'Banks';
  icon?: JSX.Element;
};

export type Data = {
  id: number;
  title: string;
  subtext: string;
  image: string;
  content: string;
};
