import { FormEvent, useState, ChangeEvent } from 'react';
import { NavLink, useNavigate, useLocation, Navigate } from 'react-router';

import { ProjectApi, Project } from '@entities/project';
import { Input } from '@shared/ui/Input';

export const EditProject = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const project = location.state as Project;

  if (!project) {
    return <Navigate to='/admin' />;
  }

  const [formData, setFormData] = useState(project);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await ProjectApi.updateProject(project._id, formData);

    navigate('/admin');
  };

  return (
    <div className='container px-6 mx-auto place-content-center place-items-center h-screen'>
      <form className='max-w-96 mx-auto' onSubmit={handleSubmit}>
        <h1 className='text-3xl mb-4 text-center'>Edit Project</h1>

        <Input
          className='mb-8'
          name='title'
          label='Title'
          value={formData.title}
          onChange={handleChange}
        />

        <Input
          className='mb-8'
          name='tags'
          label='Tags'
          value={formData.tags}
          onChange={handleChange}
        />

        <Input
          className='mb-12'
          name='githubUrl'
          label='GitHub URL'
          value={formData.githubUrl}
          onChange={handleChange}
        />

        <Input
          className='mb-12'
          name='previewUrl'
          label='Preview URL'
          value={formData.previewUrl}
          onChange={handleChange}
        />

        <div className='flex justify-end'>
          <NavLink to='/admin'>
            <button
              className='me-4 px-6 py-2 rounded-md bg-gray-500 hover:bg-gray-600 transition-colors'
              type='button'
            >
              Cancel
            </button>
          </NavLink>

          <button
            className='px-6 py-2 rounded-md bg-green-600 hover:bg-green-800 transition-colors'
            type='submit'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
