import React from 'react';
import LoginForm from '../../../components/LoginForm/loginForm';
import { Provider } from 'react-redux';
import { store } from '../../../store/store.jsx';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('LoginForm', () => {
	it('render form', () => {
		render(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
		expect(screen.getByTestId('login-form')).toBeInTheDocument();
	});

	it('render all fields', () => {
		render(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
		expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
		expect(
			screen.getByLabelText(/password/i)
		).toBeInTheDocument();
		expect(screen.getByRole('button', { type: /submit/i })).toBeInTheDocument();
	});

	it('should allow to input email', async () => {
		render(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
		const user = userEvent.setup();
		act(() => {
			user.type(
				screen.getByRole('textbox', { name: /email/i }),
				'ivanov@mail.ru'
			);
		});
		await waitFor(() =>
			expect(screen.getByRole('textbox', { name: /email/i })).toHaveValue(
				'ivanov@mail.ru'
			)
		);
	});

	it('should allow to input password', async () => {
		render(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
		const user = userEvent.setup();
		const inputPassword = screen.getByLabelText(/password/i);
		act(() => {
			user.type(inputPassword, '123456');
		});
		await waitFor(() => expect(inputPassword).toHaveValue('123456'));
	});

	it('should allow the email to be deleted', async () => {
		render(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
		const user = userEvent.setup();
		const inputEmail = screen.getByRole('textbox', { name: /email/i });
		act(() => {
			user.type(inputEmail, 'ivanov@mail.ru');
		});
		await waitFor(() => expect(inputEmail).toHaveValue('ivanov@mail.ru'));
		fireEvent.change(inputEmail, { target: { value: '' } });
		await waitFor(() => expect(inputEmail).toHaveValue(''));
	});
	it('should allow the password to be deleted', async () => {
		render(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
		const user = userEvent.setup();
		const inputPassword = screen.getByLabelText(/password/i);
		act(() => {
			user.type(inputPassword, '123456');
		});
		await waitFor(() => expect(inputPassword).toHaveValue('123456'));
		fireEvent.change(inputPassword, { target: { value: '' } });
		await waitFor(() => expect(inputPassword).toHaveValue(''));
	});
});
