export type Comment = {
  _id: string;
  message: string;
  timestamp: number;
  senderEmail: string;
  projectId: string;
};

export type CommentSend = Pick<Comment, 'message' | 'senderEmail' | 'projectId'>;
