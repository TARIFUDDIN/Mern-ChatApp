import { Avatar, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AdminLayout from "../../components/layout/AdminLayout";
import AvatarCard from "../../components/shared/AvatarCard";
import Table from "../../components/shared/Table";

import { transformImage } from "../../lib/feature";
import { dashboardData } from "../../constants/sampleData";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <AvatarCard avatar={params.row.avatar} />
      </motion.div>
    ),
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 300,
  },
  {
    field: "groupChat",
    headerName: "Group",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    width: 400,
    renderCell: (params) => (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <AvatarCard max={100} avatar={params.row.members} />
      </motion.div>
    ),
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    headerClassName: "table-header",
    width: 120,
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClassName: "table-header",
    width: 250,
    renderCell: (params) => (
      <Stack direction="row" alignItems="center" spacing={"1rem"}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
        </motion.div>
        <span>{params.row.creator.name}</span>
      </Stack>
    ),
  },
];

const ChatManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.chats.map((i) => ({
        ...i,
        id: i._id,
        avatar: i.avatar.map((i) => transformImage(i, 50)),
        members: i.members.map((i) => transformImage(i.avatar, 50)),
        creator: {
          name: i.creator.name,
          avatar: transformImage(i.creator.avatar, 50),
        },
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Table heading={"All Chats"} columns={columns} rows={rows} />
      </motion.div>
    </AdminLayout>
  );
};

export default ChatManagement;
