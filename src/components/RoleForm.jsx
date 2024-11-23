import React, { useState } from "react";

const RoleForm = ({ existingRole, onSave, onCancel }) => {
  const [roleName, setRoleName] = useState(
    existingRole ? existingRole.name : ""
  );
  const [permissions, setPermissions] = useState(
    existingRole ? existingRole.permissions : []
  );

  const handlePermissionChange = (permission) => {
    if (permissions.includes(permission)) {
      setPermissions(permissions.filter((perm) => perm !== permission));
    } else {
      setPermissions([...permissions, permission]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: existingRole ? existingRole.id : Date.now(),
      name: roleName,
      permissions,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{existingRole ? "Edit Role" : "Add New Role"}</h2>
      <div>
        <label>
          Role Name:
          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <h3>Permissions</h3>
        {["read", "write", "delete"].map((permission) => (
          <label key={permission}>
            <input
              type="checkbox"
              checked={permissions.includes(permission)}
              onChange={() => handlePermissionChange(permission)}
            />
            {permission}
          </label>
        ))}
      </div>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RoleForm;
