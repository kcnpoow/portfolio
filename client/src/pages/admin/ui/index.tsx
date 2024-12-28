import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { BiPlus } from 'react-icons/bi';

import { Project, ProjectApi, ProjectCardAdmin } from '@entities/project';
import { IconButton } from '@shared/ui/IconButton';

export const Admin = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const handleDelete = async (projectId: string) => {
    const deletedProject = await ProjectApi.deleteProject(projectId);

    setProjects(
      projects.filter((project) => project._id !== deletedProject._id)
    );
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await ProjectApi.getProjects();

      setProjects(fetchedProjects);
    };

    fetchProjects();
  }, []);

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='flex items-center mb-8'>
        <span className='text-3xl me-4'>Your Projects</span>
        <NavLink to='/admin/create'>
          <IconButton>
            <BiPlus size={30} />
          </IconButton>
        </NavLink>
      </div>
      <div className='flex flex-wrap gap-12'>
        {projects.map((project) => (
          <ProjectCardAdmin
            key={project._id}
            project={project}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
