import { IFilterOptions } from '@/types/feedbacks';

interface CategoriesProps {
  toggle: <T extends keyof IFilterOptions>(newOptions: Record<T, IFilterOptions[T]>) => void;
  categories: IFilterOptions['category'][];
}

export default function Categories({ toggle, categories }: CategoriesProps) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>
          <button onClick={() => toggle({ category })}>{category}</button>
        </li>
      ))}
    </ul>
  );
}
