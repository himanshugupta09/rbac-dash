const ROLE_PERMISSIONS = {
  admin: ["read", "write", "delete"],
  user: ["read"],
};

export const hasPermission = (user, action) => {
  return ROLE_PERMISSIONS[user?.role]?.includes(action);
};
