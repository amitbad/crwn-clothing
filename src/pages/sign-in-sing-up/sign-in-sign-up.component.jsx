import './sign-in-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component';

const SignInSignUpPage = () => {
	return (
		<div className='sign-in-and-sign-up'>
			<SignIn />
			<Signup />
		</div>
	);
};

export default SignInSignUpPage;
