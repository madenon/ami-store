import React from 'react'
import { Outlet } from 'react-router'
import { ToastContainer } from "react-toastify";
import Header from '../components/Header';

const AdminPanel = () => {
  return (
    <div>
       <ToastContainer position="top-center" />
       <main className="w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminPanel