import LoginForm from '../components/LoginForm';

const AdminLogin = () => {
  return (
    <div className=" bg-gradient-to-br from-purple-100 via-white to-purple-50 dark:from-gray-900 dark:to-black px-4 py-6">
      <LoginForm role="Admin" />
    </div>
  );
};

export default AdminLogin;
