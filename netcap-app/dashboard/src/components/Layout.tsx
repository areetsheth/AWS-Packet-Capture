import Sidebar from "./Sidebar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <div className="w-full max-w-[18rem]">
        <Sidebar />
      </div>
      <main className="flex flex-col w-full max-w-[calc(100%-18rem)]">{children}</main>
    </div>
  );
};

export default Layout;
