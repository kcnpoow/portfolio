import { Schema, model } from 'mongoose';

export interface IComment {
  _id: string;
  message: string;
  timestamp: number;
  projectId: string;
  senderEmail: string;
}

const commentSchema = new Schema<IComment>(
  {
    message: { type: String, required: true },
    timestamp: { type: Number, required: true },
    projectId: { type: String, required: true },
    senderEmail: { type: String, required: true },
  },
  { versionKey: false }
);

export const Comment = model<IComment>('Comment', commentSchema);
