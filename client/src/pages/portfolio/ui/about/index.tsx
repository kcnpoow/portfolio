import { Skill } from './Skill';
import { SectionHeader } from '@shared/ui/SectionHeader';

export const About = () => {
  return (
    <section className='relative my-24'>
      <div className='absolute -top-40' id='about'></div>

      <SectionHeader title='about' />

      <p className='mb-16 text-lg sm:w-3/4 sm:mx-auto md:text-xl lg:text-2xl/10'>
        Hello! I’m a passionate developer with a strong focus on creating
        intuitive and efficient digital solutions. My expertise lies in building
        responsive web applications, designing user-friendly interfaces, and
        crafting scalable backend systems. I love tackling challenges and am
        always eager to learn new technologies to enhance my skills. Let’s build
        something amazing together!
      </p>

      <ul className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
        <li className='flex justify-center'>
          <Skill title='Front-End' description='60+ Hours Experience' />
        </li>
        <li className='flex justify-center'>
          <Skill title='Python' description='4 Years Experience' />
        </li>
        <li className='flex justify-center sm:col-span-2 lg:col-span-1'>
          <Skill title='Machine Learning' description='120+ Hours Experience' />
        </li>
      </ul>
    </section>
  );
};
