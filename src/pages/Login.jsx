import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url(https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	padding: 25px;
	width: 25%;
	background-color: white;
	border-radius: 10px;
	${(mobile, tablet({ width: "75%" }))}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0px;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	border-radius: 10px;
	margin-bottom: 10px;
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="username"></Input>
					<Input placeholder="password"></Input>
					<Button>LOGIN</Button>
					<Link>FORGOT YOUR PASSWORD?</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
