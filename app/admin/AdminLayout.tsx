import React from 'react';
import { ReactNode } from 'react';
import AdminHeader from '../../components/Admin/Header'; // Adjust path as necessary
import AdminSidebar from '../../components/Admin/Sidebar'; // Adjust path as necessary
import styles from './AdminLayout.module.css'; // Adjust path as necessary

type Props = {
  children: ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <div className={styles.adminLayout}>
      {/* <AdminHeader /> */}
      <div className={styles.adminBody}>
        <AdminSidebar />
        <main className={styles.adminContent}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
