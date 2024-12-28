import { MdComment } from 'react-icons/md';

import { Project } from '../model';
import { IconButton } from '@shared/ui/IconButton';

type Props = {
  project: Project;
  onCommentsClick: () => void;
};

export const ProjectCard = ({ project, onCommentsClick }: Props) => {
  return (
    <div className='w-60 md:w-96'>
      <div
        className='mb-4 aspect-video bg-cover bg-no-repeat bg-center'
        style={{ backgroundImage: `url('${project.previewUrl}')` }}
      ></div>

      <div className='flex justify-between items-center px-2'>
        <div className='uppercase w-full overflow-hidden truncate mr-2'>
          <a
            className='text-xl md:text-2xl cursor-pointer hover:underline'
            href={project.githubUrl}
            target='_blank'
          >
            {project.title}
          </a>
          <p className='text-sm md:text-lg text-timberwolf truncate'>{project.tags}</p>
        </div>

        <IconButton onClick={onCommentsClick}>
          <MdComment className='text-2xl md:text-3xl' />
        </IconButton>
      </div>
    </div>
  );
};
