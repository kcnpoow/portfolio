import { Request, Response, NextFunction } from 'express';

import { MailService } from '../services/MailService';
import { CommentService } from '../services/CommentService';
import { io } from '..';

export class CommentController {
  public static async createComment(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { comment } = req.body;

      if (!comment) {
        throw new Error('Comment is not provided');
      }

      const createdComment = await CommentService.createComment(comment);

      io.emit(`comment:${createdComment.projectId}`, createdComment);

      res.json(createdComment);
    } catch (e) {
      next(e);
    }
  }

  public static async getComments(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { projectId } = req.params;

      if (!projectId) {
        throw new Error('Project ID is not provided');
      }

      const comments = await CommentService.getComments(projectId);

      res.json(comments);
    } catch (e) {
      next(e);
    }
  }

  public static async sendFeedback(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { from, message, email } = req.body;

      if (!from || !message || !email) {
        throw new Error('Mail is not full');
      }

      const mail = await MailService.sendFeedback(req.body);

      res.json(mail);
    } catch (e) {
      next(e);
    }
  }
}
