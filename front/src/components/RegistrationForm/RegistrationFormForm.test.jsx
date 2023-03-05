import React from 'react';
import RegistrationForm from './registrationForm';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('RegistrationForm', () => {
	it('render form', () => {
		render(<RegistrationForm />);
		expect(screen.getByTestId('registration-form')).toBeInTheDocument();
	});
		
		
	it('render all fields', () => {
		render(<RegistrationForm />);
		expect(screen.getByRole("textbox", { name: /last_name/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /first_name/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /patronym/i })).toBeInTheDocument();
		
		expect(screen.getByTestId("birth_date")).toBeInTheDocument();
		
		expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /phone/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /address/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /company/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /position/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /category/i })).toBeInTheDocument();
		
		expect(screen.getByRole("spinbutton", { name: /experience/i })).toBeInTheDocument();
		
		expect(screen.getByRole("textbox", { name: /education/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /other_info/i })).toBeInTheDocument();
		expect(screen.getByTestId("password")).toBeInTheDocument();
		expect(screen.getByRole("checkbox", { name: /has_agreed/i })).toBeInTheDocument();
		expect(screen.getByRole("checkbox", { name: /sign_for_news/i })).toBeInTheDocument();
		expect(screen.getByRole("button", { type: /submit/i })).toBeInTheDocument();
	});
	
	it('should allow to input last_name', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByRole("textbox", { name: /last_name/i }), 'Иванов')
		});
    await waitFor(() =>
    	expect(screen.getByRole("textbox", { name: /last_name/i })).toHaveValue('Иванов'));
	});
	
	it('should allow to input first_name', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByRole("textbox", { name: /first_name/i }), 'Иван')
		});
    await waitFor(() =>
			expect(screen.getByRole("textbox", { name: /first_name/i })).toHaveValue('Иван')
		);
	});

	it('should allow to input patronym', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByRole("textbox", { name: /patronym/i }), 'Олегович')
		});
    await waitFor(() =>
    	expect(screen.getByRole("textbox", { name: /patronym/i })).toHaveValue('Олегович'));
	});

	it('should allow to input email', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByRole("textbox", { name: /email/i }), 'avanov@mail.ru')
		});
    await waitFor(() =>
    	expect(screen.getByRole("textbox", { name: /email/i })).toHaveValue('avanov@mail.ru'));
	});

	it('should allow to input phone', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByRole("textbox", { name: /phone/i }), '+7 904 351 5645')
		});
    await waitFor(() =>
    	expect(screen.getByRole("textbox", { name: /phone/i })).toHaveValue('+7 904 351 5645'));
	});

	it('should allow to input address', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByRole("textbox", { name: /address/i }), 'Россия')
		});
    await waitFor(() =>
    	expect(screen.getByRole("textbox", { name: /address/i })).toHaveValue('Россия'));
	});

	it('should allow to input company', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByRole("textbox", { name: /company/i }), 'ООО "Рога и копыта"')
		});
    await waitFor(() =>
    	expect(screen.getByRole("textbox", { name: /company/i })).toHaveValue('ООО "Рога и копыта"'));
	});

	it('should allow to input position', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByRole("textbox", { name: /position/i }), 'Директор')
		});
    await waitFor(() =>
    	expect(screen.getByRole("textbox", { name: /position/i })).toHaveValue('Директор'));
	});

	it('should allow to input category', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByRole("textbox", { name: /category/i }), 'Первая')
		});
    await waitFor(() =>
    	expect(screen.getByRole("textbox", { name: /category/i })).toHaveValue('Первая'));
	});

	it('should allow to input education', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByRole("textbox", { name: /education/i }), 'Высшее')
		});
    await waitFor(() =>
    	expect(screen.getByRole("textbox", { name: /education/i })).toHaveValue('Высшее'));
	});

	it('should allow to input other_info', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByRole("textbox", { name: /other_info/i }), 'Занимаюсь медитацией')
		});
    await waitFor(() =>
    	expect(screen.getByRole("textbox", { name: /other_info/i })).toHaveValue('Занимаюсь медитацией'));
	});

	it('should allow to input password', async () => {
		render(<RegistrationForm />);
		const user = userEvent.setup()
		act(() => {
			user.type(screen.getByTestId("password"), '1234569')
		});
    await waitFor(() =>
    	expect(screen.getByTestId("password")).toHaveValue('1234569'));
	});
})

