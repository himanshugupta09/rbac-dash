import React, { useState } from "react";

const PermissionTable = ({ roles, onUpdateRole }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [editedPermissions, setEditedPermissions] = useState([]);

  const handleEditClick = (role) => {
    setSelectedRole(role);
    setEditedPermissions(role.permissions);
  };

  const handlePermissionChange = (permission) => {
    if (editedPermissions.includes(permission)) {
      setEditedPermissions(
        editedPermissions.filter((perm) => perm !== permission)
      );
    } else {
      setEditedPermissions([...editedPermissions, permission]);
    }
  };

  const handleSave = () => {
    onUpdateRole({ ...selectedRole, permissions: editedPermissions });
    setSelectedRole(null);
    setEditedPermissions([]);
  };

  return (
    <div>
      <h1>Role Permissions</h1>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button onClick={() => handleEditClick(role)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRole && (
        <div>
          <h2>Edit Permissions for {selectedRole.name}</h2>
          <div>
            {["read", "write", "delete"].map((permission) => (
              <label key={permission}>
                <input
                  type="checkbox"
                  checked={editedPermissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                />
                {permission}
              </label>
            ))}
          </div>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setSelectedRole(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default PermissionTable;
