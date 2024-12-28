import { Api } from '@shared/api/Api';

import { Comment, CommentSend } from '../model';

const api = new Api('/comments');

export class CommentApi {
  public static async createComment(comment: CommentSend): Promise<Comment> {
    return await api.post('/', { comment });
  }

  public static async getComments(projectId: string) {
    return await api.get(`/${projectId}`);
  }

  public static async sendFeedback(feedback: object) {
    await api.post('/feedback', feedback);
  }
}
