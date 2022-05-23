import React from "react";

import MoreVertIcon from "@material-ui/icons/MoreVert";

export const DataPaths = {
  name: "name",
  email: "username",
  role: "role",
  phone: "phone",
  created: "created",
  lastLogin: "updated",
  status: "status",
};

export const headCells = [
  {
    id: DataPaths.name,
    numeric: false,
    disablePadding: true,
    label: "Name",
    extraClass: "cellFirst",
    sort: true,
  },

  {
    id: DataPaths.role,
    numeric: false,
    disablePadding: true,
    label: "Role",
    sort: true,
  },
  {
    id: DataPaths.status,
    numeric: false,
    disablePadding: true,
    label: "Status",
    sort: true,
    // extraClass: "cellRootRightAlign",
  },
  {
    id: "more",
    numeric: false,
    disablePadding: true,
    label: "",
    extraClass: "cellLast",
    sort: false,
  },
];

export const fieldExtractor = {
  name: {
    render: (value: any) => value,
    onCellClick: (key: any) => alert(key),
  },
  role: {
    render: (value: any) => value,
  },
  status: {
    render: (value: any) => value,
  },
  more: {
    render: (value: any) => (
      <MoreVertIcon
        // className={classes.rowMenuIcon}
        // ref={anchorRef}
        role="button"
        aria-hidden="true"
        // onClick={() => handleToggle(currentUser?._id)}
      />
    ),
    onCellClick: (key: any) => alert(JSON.stringify(key)),
  },
};

export const mockData = [
  { id: 1, name: "User1", role: "admin", status: "active" },
  { id: 2, name: "User2", role: "admin", status: "notactive" },
  { id: 3, name: "User3", role: "user", status: "notactive" },
  { id: 4, name: "User4", role: "admin", status: "active" },
  { id: 5, name: "User5", role: "user", status: "notactive" },
  { id: 6, name: "User6", role: "admin", status: "active" },
];

export const mockDataCollapse = [
  {
    id: 1,
    name: "Collapse 1",
    role: "admin",
    status: "active",
    data: mockData.slice(0, 1),
  },
  {
    id: 2,
    name: "Collapse 2",
    role: "admin",
    status: "notactive",
    data: mockData.slice(1, 2),
  },
  {
    id: 3,
    name: "Collapse 3",
    role: "user",
    status: "notactive",
    data: mockData.slice(2, 3),
  },
  {
    id: 4,
    name: "Collapse 4",
    role: "admin",
    status: "active",
  },
  {
    id: 5,
    name: "Collapse 5",
    role: "user",
    status: "notactive",
  },
  {
    id: 6,
    name: "Collapse 6",
    role: "admin",
    status: "active",
    data: mockData,
  },
];
