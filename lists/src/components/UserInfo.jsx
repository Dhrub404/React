const UserInfo = () => {
  const usersInfo = [
    {
      username: "HuXn",
      email: "test@gmail.com",
      location: "USA",
      age: 22,
      profession: "Frontend Developer",
    },
    {
      username: "John",
      email: "jd@gmail.com",
      location: "Arab",
      age: 28,
      profession: "Backend Developer",
    },
    {
      username: "Alice",
      email: "alice@gmail.com",
      location: "Canada",
      age: 25,
      profession: "UI/UX Designer",
    },
    {
      username: "David",
      email: "david@gmail.com",
      location: "Germany",
      age: 30,
      profession: "Full Stack Developer",
    },
    {
      username: "Emma",
      email: "emma@gmail.com",
      location: "Australia",
      age: 24,
      profession: "Software Engineer",
    },
  ];

  return (
    <main>
      {usersInfo.map((user, index) => (
        <ul key={index}>
          <li><strong>Username:</strong> {user.username}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>Location:</strong> {user.location}</li>
          <li><strong>Age:</strong> {user.age}</li>
          <li><strong>Profession:</strong> {user.profession}</li>
        </ul>
      ))}
    </main>
  );
};

export default UserInfo;