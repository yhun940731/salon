type post = {
  id: string;
  title: string;
  date: Date;
  content: string;
  category: string;
  backgroundImage: string | null;
  backgroundColor: string | null;
};

type postsList = post[];

export type { post, postsList };
