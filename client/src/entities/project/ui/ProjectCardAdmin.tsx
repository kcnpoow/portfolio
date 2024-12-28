import { NavLink } from 'react-router';
import { RiPencilFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';

import { Project } from '../model';
import { IconButton } from '@shared/ui/IconButton';

type Props = {
  project: Project;
  onDelete: (projectId: string) => void;
};

export const ProjectCardAdmin = ({ project, onDelete }: Props) => {
  return (
    <div className='w-60'>
      <div
        className='mb-4 aspect-video bg-cover bg-no-repeat bg-center'
        style={{ backgroundImage: `url('${project.previewUrl}')` }}
      ></div>

      <div>
        <div className='flex-grow uppercase'>
          <p className='truncate'>{project.title}</p>
          <p className='text-timberwolf truncate'>{project.tags}</p>
        </div>
        <div>
          <NavLink className='mr-2' to='/admin/edit' state={project}>
            <IconButton>
              <RiPencilFill size={20} />
            </IconButton>
          </NavLink>

          <IconButton onClick={() => onDelete(project._id)}>
            <AiFillDelete size={20} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
