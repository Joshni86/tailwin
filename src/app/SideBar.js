const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen 
    w-16 m-0 
    flex flex-sol
    bg-primary text-secondary shadow-lg"
    ></div>
  );
};

const SideBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;
export default SideBar;
