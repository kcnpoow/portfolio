import { Request, Response, NextFunction } from 'express';

import { ProjectService } from '../services/ProjectService';

export class ProjectController {
  public static async getProjects(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const projects = await ProjectService.getProjects();

      res.json(projects);
    } catch (e) {
      next(e);
    }
  }

  public static async createProject(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const project = await ProjectService.createProject(req.body);

      res.json(project);
    } catch (e) {
      next(e);
    }
  }

  public static async deleteProject(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { projectId } = req.params;

      if (!projectId) {
        throw new Error('Project ID is not provided');
      }

      const project = await ProjectService.deleteProject(projectId);

      res.json(project);
    } catch (e) {
      next(e);
    }
  }

  public static async updateProject(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { projectId } = req.params;

      if (!projectId) {
        throw new Error('Project ID is not provided');
      }

      const project = await ProjectService.updateProject(projectId, req.body);

      res.json(project);
    } catch (e) {
      next(e);
    }
  }
}
