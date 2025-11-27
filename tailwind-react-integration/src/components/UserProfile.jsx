function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img 
        src="https://www.bing.com/th/id/OIP.Mg0Dge3gdG8_JFVpb6bqgwHaHa?w=216&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
        alt="User" 
        className="rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;