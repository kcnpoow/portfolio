import { Project, ProjectCreate } from '../model';
import { Api } from '@shared/api/Api';

const api = new Api('/projects');

export class ProjectApi {
  public static async getProjects(): Promise<Project[]> {
    return await api.get('/');
  }

  public static async createProject(
    project: ProjectCreate
  ): Promise<Project[]> {
    return await api.post('/', project);
  }

  public static async deleteProject(projectId: string): Promise<Project> {
    return await api.delete(`/${projectId}`);
  }

  public static async updateProject(projectId: string, data: ProjectCreate) {
    return await api.put(`/${projectId}`, data);
  }
}
