type Props = {
  title: string;
};

export const SectionHeader = ({ title }: Props) => {
  return (
    <div className='flex items-center mb-10'>
      <div className='w-full h-1 mt-2 bg-casper rounded-md sm:hidden'></div>

      <h2 className='font-extrabold text-casper whitespace-nowrap text-4xl max-sm:px-6 sm:pr-12 sm:text-7xl'>
        {title}
      </h2>

      <div className='w-full h-1 mt-2 bg-casper rounded-md'></div>
    </div>
  );
};
