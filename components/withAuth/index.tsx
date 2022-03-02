/* eslint-disable react/jsx-props-no-spreading */
import { NextComponentType } from 'next';
import { Login, useAuthStore } from '@/features/user';

function withAuth<T>(Component: NextComponentType<T>) {
  function Auth(props: T) {
    const { token, isLoggedIn } = useAuthStore();

    if (!token && !isLoggedIn) {
      return <Login />;
    }

    return <Component {...props} />;
  }

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;
