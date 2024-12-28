export type Project = {
  _id: string;
  title: string;
  previewUrl: string;
  githubUrl: string;
  tags: string;
};

export type ProjectCreate = Pick<
  Project,
  'title' | 'githubUrl' | 'tags' | 'previewUrl'
>;
