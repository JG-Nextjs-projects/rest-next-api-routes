import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <div>{children}</div>
  </div>
);

export default Layout;
