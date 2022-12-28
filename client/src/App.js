
import Header from "./components/Header";
import Audis from "./components/Audis";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


const audi = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
      <ApolloProvider client={audi}>
        <Header />
        <div className="container">
          <Audis />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
