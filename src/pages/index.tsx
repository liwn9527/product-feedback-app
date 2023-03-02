import { Jost } from 'next/font/google';
import { useState } from 'react';

import FeedbacksList from '@/components/feedbacks/feedbacksList';
import Categories from '@/components/sidebar/categories';
import { IFilterOptions } from '@/types/feedbacks';

const jost = Jost({ subsets: ['latin'], display: 'optional' });

interface ServerSideProps {
  categories: IFilterOptions['category'][];
}

export default function Home({ categories }: ServerSideProps) {
  const [filterOptions, setFilterOptions] = useState<IFilterOptions>({ sort: 'upvotes', order: 'desc', category: 'All' });

  function onFilterChange<T extends keyof IFilterOptions>(newOptions: Record<T, IFilterOptions[T]>) {
    setFilterOptions({ ...filterOptions, ...newOptions });
  }

  return (
    <div className={jost.className}>
      <Categories toggle={onFilterChange} categories={categories} />
      <FeedbacksList filterOptions={filterOptions} />
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {
      categories: ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'],
    },
  };
}
