export interface IDocument {
  _id: string;
  name: string;
  subjectId: string;
  subjectName: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  updatedAt: number;
  content?: string;
}
