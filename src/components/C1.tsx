import { useAppDispatch } from 'hooks/redux';
import { actions } from 'stores';

export function Counter() {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    dispatch(actions.novel.getByID({ id: 71 }));
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
