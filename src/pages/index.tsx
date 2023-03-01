import { Jost } from 'next/font/google';
import { useState } from 'react';

import FeedbacksList from '@/components/feedbacks/feedbacksList';
import { IFilterOptions } from '@/types/feedbacks';

const jost = Jost({ subsets: ['latin'], display: 'optional' });

export default function Home() {
  const [filterOptions, setFilterOptions] = useState<IFilterOptions>({ sort: 'upvotes', order: 'desc', category: 'All' });

  return (
    <div className={jost.className}>
      <FeedbacksList filterOptions={filterOptions} />
    </div>
  );
}
