import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Example from "./components/ReactQueryExample/Example";
import QuickStart from "./components/ReactQueryExample/QuickStart";
import { ReactQueryDevtools } from "react-query/devtools";
// import Pagination from "./components/ReactQueryExample/Pagination";
import InfiniteScroll from "./components/ReactQueryExample/InfiniteScroll";
// import Profile from './components/SWRExample/profile';
// import Cache from './components/SWRExample/Cache';
// import Fetcher from './components/SWRExample/Fetcher';
// import Mutate from './components/SWRExample/Mutate';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      {/* <Profile /> */}
      {/* <Cache /> */}
      {/* <Fetcher /> */}

      {/* <Mutate /> */}
      {/* <Pagenation /> */}
      <QueryClientProvider client={queryClient}>
        <Example />
        {/* <QuickStart /> */}
        {/* <Pagination /> */}
        <InfiniteScroll />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
