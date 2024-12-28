import { useEffect, useState } from 'react';

import { CommentsModal } from '@widgets/comments-modal';
import { Project, ProjectCard, ProjectApi } from '@entities/project';
import { login } from '@entities/user';
import { SectionHeader } from '@shared/ui/SectionHeader';
import { useAuth } from '@shared/hooks/useAuth';
import { useAlert } from '@shared/hooks/useAlert';

export const Work = () => {
  const { user } = useAuth();
  const { addAlert } = useAlert();

  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleCommentsClick = async (project: Project) => {
    if (!user) {
      await login();
    }

    setIsCommentsOpen(true);
    setCurrentProject(project);
  };

  const handleModalHide = () => {
    setIsCommentsOpen(false);
    setCurrentProject(null);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await ProjectApi.getProjects();

        setProjects(result);
      } catch (e) {
        addAlert({
          message: 'Something went wrong',
          severity: 'error',
          timeout: 3000,
        });
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className='relative my-24'>
      <div className='absolute -top-28' id='work'></div>

      <SectionHeader title='work' />

      {isCommentsOpen && (
        <CommentsModal project={currentProject} onHide={handleModalHide} />
      )}

      <p className='mb-16 text-lg sm:w-3/4 sm:mx-auto md:text-xl lg:text-2xl/10'>
        I’ve had the privilege of working on diverse projects, ranging from web
        applications and mobile messengers to database-driven systems and
        RESTful APIs. My experience includes crafting seamless user experiences,
        developing robust backend solutions, and collaborating in
        cross-functional teams. Each project has honed my skills and deepened my
        passion for delivering high-quality, impactful solutions.
      </p>

      <ul className='flex gap-x-12 pb-6 overflow-x-auto snap-mandatory snap-x justify-center'>
        {projects.map((project) => (
          <li className='snap-center' key={project._id}>
            <ProjectCard
              project={project}
              onCommentsClick={() => handleCommentsClick(project)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
