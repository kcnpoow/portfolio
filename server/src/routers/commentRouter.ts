import { Router } from 'express';

import { CommentController } from '../controllers/CommentController';

export const commentRouter = Router();

commentRouter.get('/:projectId', CommentController.getComments);
commentRouter.post('/', CommentController.createComment);
commentRouter.post('/feedback', CommentController.sendFeedback);
