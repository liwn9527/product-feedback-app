import useFeedbacksQuery from '@/helpers/useFeedbacksQuery';
import { IFilterOptions } from '@/types/feedbacks';

import FeedbackItem from './FeedbackItem';

interface FeedbacksListProps {
  filterOptions: IFilterOptions;
}

export default function FeedbacksList({ filterOptions }: FeedbacksListProps) {
  const feedbacksQuery = useFeedbacksQuery(filterOptions);

  return (
    <div>
      {feedbacksQuery.isLoading ? null : (
        <ul>
          {feedbacksQuery.data?.map((feedback) => (
            <FeedbackItem key={feedback.id} feedback={feedback} />
          ))}
        </ul>
      )}
    </div>
  );
}
