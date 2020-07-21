import styled, { css } from 'styled-components';

interface IProps {
    openModal: boolean
}

const HeaderMenu = (props: IProps) => (
	<HeaderMenuContainer openModal={props.openModal}>
		<ul>
			<li>
				<a href="#">Validators</a>
			</li>
			<li>
				<a href="#">Text Converters</a>
			</li>
		</ul>
	</HeaderMenuContainer>
);

export default HeaderMenu;

const HeaderMenuContainer = styled.div<IProps>`
	height: 100px;
	border-bottom: solid 1px var(--border);
	display: none;
	transition: all 1s ease;

	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style: none;
		height: 100%;
		font-size: 1.6rem;

		li {
			margin: 5px;
			a {
				text-decoration: none;
				color: var(--gray);
				padding: 5px;
				:hover,
				:focus {
					color: var(--text-blue);
				}

				:focus {
					background: rgba(0, 118, 255, 0.1);
					border-radius: 5px;
				}
			}
		}
	}
	${(props) => {
		if (props.openModal === true) {
			return css`
				display: block;
			`;
		}
	}}
`;