import { useQuery } from '@tanstack/react-query';

import fetcher from '@/helpers/fetcher';
import { IFeedback, IFilterOptions } from '@/types/feedbacks';

import FeedbackItem from './FeedbackItem';

interface FeedbacksListProps {
  filterOptions: IFilterOptions;
}

export default function FeedbacksList({ filterOptions }: FeedbacksListProps) {
  const feedbacksQuery = useQuery<IFeedback[]>(
    ['feedbacks', { ...filterOptions }],
    fetcher(`/api/feedbacks?s=${filterOptions.sort}&o=${filterOptions.order}&c=${filterOptions.category}`),
  );

  return (
    <div>
      {feedbacksQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {feedbacksQuery.data?.map((feedback) => (
            <FeedbackItem key={feedback.id} feedback={feedback} />
          ))}
        </ul>
      )}
    </div>
  );
}
