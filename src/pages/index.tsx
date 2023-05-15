import store from 'stores';
import { Provider } from 'react-redux';
import { Counter } from 'components/C1';

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}
