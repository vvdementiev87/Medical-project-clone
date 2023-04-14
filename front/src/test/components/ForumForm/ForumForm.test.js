import React from 'react';
import ForumForm from '../../../components/ForumForm/ForumForm';
import { Provider } from 'react-redux';
import { store } from '../../../store/store.jsx';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('ForumForm', () => {
	it('render form', () => {
		render(
			<Provider store={store}>
				<ForumForm />
			</Provider>
		);
		expect(screen.getByTestId('forum-form')).toBeInTheDocument();
	});

	it('render all fields', () => {
		render(
			<Provider store={store}>
				<ForumForm />
			</Provider>
		);
		expect(screen.getByRole('textbox', { name: /title/i })).toBeInTheDocument();
		expect(
			screen.getByRole('textbox', { name: /description/i })
		).toBeInTheDocument();
		expect(screen.getByRole('button', { type: /submit/i })).toBeInTheDocument();
	});

	it('should allow to input title', async () => {
		render(
			<Provider store={store}>
				<ForumForm />
			</Provider>
		);
		const user = userEvent.setup();
		act(() => {
			user.type(
				screen.getByRole('textbox', { name: /title/i }),
				'Test title'
			);
		});
		await waitFor(() =>
			expect(screen.getByRole('textbox', { name: /title/i })).toHaveValue(
				'Test title'
			)
		);
	});

	it('should allow to input description', async () => {
		render(
			<Provider store={store}>
				<ForumForm />
			</Provider>
		);
		const user = userEvent.setup();
		act(() => {
			user.type(screen.getByRole('textbox', { name: /description/i }), 'Some description');
		});
		await waitFor(() =>
			expect(screen.getByRole('textbox', { name: /description/i })).toHaveValue(
				'Some description'
			)
		);
	});

	it('should allow the title to be deleted', async () => {
		render(
			<Provider store={store}>
				<ForumForm />
			</Provider>
		);
		const user = userEvent.setup();
		const inputTitle = screen.getByRole('textbox', { name: /title/i });
		act(() => {
			user.type(inputTitle, 'Test title');
		});
		await waitFor(() => expect(inputTitle).toHaveValue('Test title'));
		fireEvent.change(inputTitle, { target: { value: '' } });
		await waitFor(() => expect(inputTitle).toHaveValue(''));
	});
	it('should allow the description to be deleted', async () => {
		render(
			<Provider store={store}>
				<ForumForm />
			</Provider>
		);
		const user = userEvent.setup();
		const inputDescription = screen.getByRole('textbox', { name: /description/i });
		act(() => {
			user.type(inputDescription, 'Some description');
		});
		await waitFor(() => expect(inputDescription).toHaveValue('Some description'));
		fireEvent.change(inputDescription, { target: { value: '' } });
		await waitFor(() => expect(inputDescription).toHaveValue(''));
	});
});
