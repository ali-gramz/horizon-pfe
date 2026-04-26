'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AdminDashboard from '../components/AdminDashboard';
import DoctorDashboard from '../components/DoctorDashboard';
import StaffDashboard from '../components/StaffDashboard';
import PatientDirectory from '../components/PatientDirectory';
import DoctorDirectory from '../components/DoctorDirectory';
import StaffDirectory from '../components/StaffDirectory';
import AppointmentManager from '../components/AppointmentManager';
import AnalyticsPage from '../components/AnalyticsPage';
import ProfilePage from '../components/ProfilePage';
import AdminManagement from '../components/AdminManagement';
import PaymentManagement from '../components/PaymentManagement';
import SettingsPage from '../components/SettingsPage';

export default function Page() {
  const [activeTab, setActiveTab] = useState('admin');
  
  const [patients, setPatients] = useState([
    { id: '#P-4421', nom: 'Rodriguez', prenom: 'Elena', status: 'Active', dept: 'Cardiology', time: '10:30 AM', avatar: 'ER', dob: '1990-04-12', email: 'elena.r@example.com', phone: '+1 555-123-4567' },
    { id: '#P-4429', nom: 'Sterling', prenom: 'Marcus', status: 'Waiting', dept: 'Dermatology', time: '11:15 AM', avatar: 'MS', dob: '1982-11-23', email: 'marcus.s@example.com', phone: '+1 555-987-6543' },
    { id: '#P-4432', nom: 'Liao', prenom: 'James', status: 'Billing', dept: 'Pediatrics', time: '09:45 AM', avatar: 'JL', dob: '2016-01-15', email: 'parent.j@example.com', phone: '+1 555-456-7890' },
    { id: '#P-4438', nom: 'Jenkins', prenom: 'Sarah', status: 'Post-Op', dept: 'Neurology', time: '12:00 PM', avatar: 'SJ', dob: '1995-07-29', email: 'sarah.j@example.com', phone: '+1 555-321-0987' },
    { id: '#P-4441', nom: 'Wu', prenom: 'David', status: 'Active', dept: 'Physiotherapy', time: '01:30 PM', avatar: 'DW', dob: '1969-03-05', email: 'david.w@example.com', phone: '+1 555-789-0123' }
  ]);

  const [doctors, setDoctors] = useState([
    { id: 9021, nom: 'Dr. Aris Koven', specialite: 'Cardiology', email: 'aris.k@clinic.com', motDePasse: '********', status: 'Active', avatar: 'AK' },
    { id: 9032, nom: 'Dr. Elena Vance', specialite: 'Neurology', email: 'elena.v@clinic.com', motDePasse: '********', status: 'Active', avatar: 'EV' },
    { id: 9045, nom: 'Dr. Michael Chen', specialite: 'Pediatrics', email: 'michael.c@clinic.com', motDePasse: '********', status: 'Active', avatar: 'MC' }
  ]);

  const [staff, setStaff] = useState([
    { id: 1011, nom: 'Sam Jenson', email: 'sam.j@clinic.com', motDePasse: '********', avatar: 'SJ' },
    { id: 1022, nom: 'Linda Park', email: 'linda.p@clinic.com', motDePasse: '********', avatar: 'LP' }
  ]);

  const [admins, setAdmins] = useState([
    { id: 1, nom: 'Admin Master', email: 'master@horizon.com', motDePasse: '********', avatar: 'AM' }
  ]);

  const [appointments, setAppointments] = useState([
    { id: '#APP-2001', patientId: '#P-1123', doctorId: '#D-9021', date: '2024-05-15', time: '09:00', type: 'Consultation', status: 'Confirmed' },
    { id: '#APP-2002', patientId: '#P-2234', doctorId: '#D-9032', date: '2024-05-15', time: '11:00', type: 'Neurology', status: 'Scheduled' },
    { id: '#APP-2003', patientId: '#P-3321', doctorId: '#D-9021', date: '2024-05-16', time: '14:30', type: 'Follow-up', status: 'Scheduled' }
  ]);

  const [userProfile, setUserProfile] = useState({
    name: 'Dr. Sarah Chen',
    role: 'Lead Clinician',
    email: 'sarah.chen@horizonclinic.com',
    phone: '+1 (555) 123-4567',
    location: 'Building A, Floor 2',
    bio: 'Dedicated medical professional with over 12 years of experience in clinical management and patient care optimization.',
    joinDate: 'March 2018',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&q=80&w=150'
  });

  const renderDashboard = () => {
    switch (activeTab) {
      case 'admin':
        return <AdminDashboard patients={patients} setPatients={setPatients} onTabChange={setActiveTab} doctors={doctors} appointments={appointments} />;
      case 'doctor':
        return <DoctorDashboard patients={patients} />;
      case 'staff':
        return <StaffDashboard patients={patients} />;
      case 'patients':
        return <PatientDirectory patients={patients} setPatients={setPatients} />;
      case 'doctors':
        return <DoctorDirectory doctors={doctors} setDoctors={setDoctors} />;
      case 'staff-management':
        return <StaffDirectory staff={staff} setStaff={setStaff} />;
      case 'admins':
        return <AdminManagement admins={admins} setAdmins={setAdmins} />;
      case 'payments':
        return <PaymentManagement patients={patients} />;
      case 'appointments':
        return <AppointmentManager appointments={appointments} setAppointments={setAppointments} patients={patients} doctors={doctors} />;
      case 'analytics':
        return <AnalyticsPage patients={patients} doctors={doctors} appointments={appointments} />;
      case 'settings':
        return <SettingsPage />;
      case 'profile':
        return <ProfilePage userProfile={userProfile} setUserProfile={setUserProfile} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center pt-32 opacity-40">
            <h2 className="text-2xl font-black uppercase tracking-widest">{activeTab} View</h2>
            <p className="text-sm font-bold">Integration in progress</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar userProfile={userProfile} onTabChange={setActiveTab} />
      <div className="flex flex-1 relative">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} patientCount={patients.length} doctorCount={doctors.length} staffCount={staff.length} appointmentCount={appointments.length} />
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1600px] mx-auto">
            {renderDashboard()}
          </div>
        </main>
      </div>
    </div>
  );
}
