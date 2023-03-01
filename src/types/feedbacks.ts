export type ISort = 'comments' | 'upvotes';
export type ICategory = 'All' | 'UI' | 'UX' | 'Enhancement' | 'Bug' | 'Feature';
export type IStatus = 'Planned' | 'Suggestion' | 'In-Progress' | 'Live';
export type IOrder = 'asc' | 'desc';

export interface IFilterOptions {
  sort: ISort;
  order: IOrder;
  category: ICategory;
}

export interface IFeedback {
  title: string;
  description: string;
  category: ICategory;
  upvotes: number;
  status: IStatus;
  id: string;
  createAt: string;
  name: string;
  username: string;
  avatar: string;
  commentsCount: number;
}

export interface IFeedbackDetail extends IFeedback {
  comments?: IComment[];
}

export interface IComment {
  id: string;
  content: string;
  avatar: string;
  name: string;
  username: string;
  createAt: Date;
  replies?: IComment[];
  replyingTo?: string;
}
