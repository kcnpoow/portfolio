type Props = {
  title: string;
  description: string;
};

export const Skill = ({ title, description }: Props) => {
  return (
    <div className='inline-block text-center'>
      <span className='font-bold text-3xl sm:text-5xl'>{title}</span>
      <p className='mt-3 text-timberwolf underline underline-offset-8 decoration-2 decoration-casper'>
        {description}
      </p>
    </div>
  );
};
