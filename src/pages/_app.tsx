import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

const App = ({ Component }: AppProps): JSX.Element => (
  <Component />
);

export default App;
