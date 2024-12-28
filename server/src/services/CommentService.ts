import { Comment, IComment } from '../model/Comment';

export class CommentService {
  public static async createComment(comment: IComment) {
    return await Comment.create({ ...comment, timestamp: Date.now() });
  }

  public static async getComments(projectId: string) {
    return await Comment.find({ projectId }).sort({ timestamp: 'desc' });
  }

  public static async deleteCommentsByProjectId(projectId: string) {
    return await Comment.deleteMany({ projectId });
  }
}
