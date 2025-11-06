import { createContext } from "react";

const UserRoleContext = createContext({
  userRole: null,
  setUserRole: () => {},
});

export default UserRoleContext;
