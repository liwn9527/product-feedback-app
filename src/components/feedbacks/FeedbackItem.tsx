import Link from 'next/link';

import { IFeedback } from '@/types/feedbacks';

interface FeedbackItemProps {
  feedback: IFeedback;
}

export default function FeedbackItem({ feedback }: FeedbackItemProps) {
  return (
    <li>
      <div>
        <p>{feedback.upvotes}</p>
      </div>

      <div className='w-fit'>
        <Link href={`feedback/${feedback.id}`}>
          <h3>{feedback.title}</h3>
          <p>{feedback.description}</p>
        </Link>
        <p>{feedback.category}</p>
      </div>

      <Link className='block w-fit' href={`feedback/${feedback.id}`}>
        <p>{feedback.commentsCount}</p>
      </Link>
    </li>
  );
}
