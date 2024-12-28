import { Schema, model } from 'mongoose';

export interface IProject {
  title: string;
  previewUrl: string;
  githubUrl: string;
  tags: string;
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    previewUrl: { type: String, required: true },
    githubUrl: { type: String, required: true },
    tags: { type: String, required: true },
  },
  { versionKey: false }
);

export const Project = model<IProject>('Project', projectSchema);
