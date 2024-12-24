export const UserInfo = ({ user }) => {
  const { email, name } = user;

  return (
    <a
      className="UserInfo"
      ref={`mailto:${email}`}
    >
      {name}
    </a>
  );
};
