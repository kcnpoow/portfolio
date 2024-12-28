import { Project, IProject } from '../model/Project';
import { CommentService } from './CommentService';

export class ProjectService {
  public static async getProjects() {
    return await Project.find();
  }

  public static async createProject(project: IProject) {
    return await Project.create(project);
  }

  public static async deleteProject(projectId: string) {
    const deletedProject = await Project.findByIdAndDelete(projectId);

    await CommentService.deleteCommentsByProjectId(projectId);

    return deletedProject;
  }

  public static async updateProject(projectId: string, data: IProject) {
    return await Project.findByIdAndUpdate(projectId, data);
  }
}
