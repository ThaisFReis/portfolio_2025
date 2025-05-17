import { Suspense } from "react";
import { Outlet } from "react-router-dom";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {

  return (
    <div
      className="min-h-screen w-screen flex"
    >
      {/* <Sidebar /> */}
      {/* <div className="ml-64 flex-1"> */}
      <div>
        <Suspense fallback={<div>Carregando...</div>}>
          {/* <ChatProvider> */}
            {children ?? <Outlet />}
          {/* </ChatProvider> */}
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;