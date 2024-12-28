import { Router } from 'express';

import { ProjectController } from '../controllers/ProjectController';

export const projectRouter = Router();

projectRouter.get('/', ProjectController.getProjects);
projectRouter.post('/', ProjectController.createProject);
projectRouter.put('/:projectId', ProjectController.updateProject);
projectRouter.delete('/:projectId', ProjectController.deleteProject);
