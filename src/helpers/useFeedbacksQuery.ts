import { useQuery } from '@tanstack/react-query';

import { IFeedback, IFilterOptions } from '@/types/feedbacks';

export default function useFeedbacksQuery(filterOptions: IFilterOptions) {
  // TODO type
  async function getFeedbacks({ queryKey }: { queryKey: any }) {
    const [, { sort, order, category }] = queryKey;
    const res = await fetch(`/api/feedbacks?s=${sort}&o=${order}&c=${category}`);

    return await res.json();
  }

  return useQuery<IFeedback[]>(['feedbacks', { ...filterOptions }], getFeedbacks);
}
