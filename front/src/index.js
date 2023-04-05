import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { store } from './store/store.jsx';
import ReduxToastr from 'react-redux-toastr';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const Mode = ({ children }) => {
	return process.env.REACT_APP_MODE === 'development' ? (
		<React.StrictMode>{children}</React.StrictMode>
	) : (
		<>{children}</>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Mode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReduxToastr
					timeOut={1000}
					preventDuplicates
					position="bottom-left"
					transitionIn="fadeIn"
					transitionOut="fadeOut"
					progressBar
					closeOnToastrClick
				/>
				<BrowserRouter>
					<App />
				</BrowserRouter>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</Provider>
	</Mode>
);
