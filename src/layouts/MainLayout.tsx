import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {

  return (
    <div
      className="min-h-screen w-screen flex-1"
    >
      <Header />
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