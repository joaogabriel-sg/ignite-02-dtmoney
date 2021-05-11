import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
	h2 {
		margin-bottom: 2rem;

		font-size: 1.5rem;
		color: var(--text-title);
	}

	input {
		background: #e7e9ee;
		width: 100%;
		height: 4rem;

		padding: 0 1.5rem;
		border: 1px solid #d7d7d7;
		border-radius: 0.25rem;

		font-size: 1rem;
		font-weight: 400;

		&::placeholder {
			color: var(--text-body);
		}

		& + input {
			margin-top: 1rem;
		}
	}

	button[type='submit'] {
		background: var(--green);
		width: 100%;
		height: 4rem;

		padding: 0 1.5rem;
		border: 0;
		border-radius: 0.25rem;
		margin-top: 1.5rem;

		font-size: 1rem;
		font-weight: 600;
		color: #fff;
		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;

export const TransactionTypeContainer = styled.div`
	margin: 1rem 0;

	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
`;

interface RadioBoxProps {
	isActive: boolean;
	activeColor: 'green' | 'red';
}

const colors = {
	red: '#e52e4d',
	green: '#33cc95',
};

export const RadioBox = styled.button<RadioBoxProps>`
	background: ${(props) =>
		props.isActive
			? transparentize(0.9, colors[props.activeColor])
			: 'transparent'};
	height: 4rem;

	border: 1px solid #d7d7d7;
	border-radius: 0.25rem;

	display: flex;
	align-items: center;
	justify-content: center;

	transition: border-color 0.2s;

	&:hover {
		border-color: ${darken(0.1, '#d7d7d7')};
	}

	img {
		width: 20px;
		height: 20px;
	}

	span {
		display: block;
		margin-left: 1rem;

		font-size: 1rem;
		color: var(--text-title);
	}
`;
