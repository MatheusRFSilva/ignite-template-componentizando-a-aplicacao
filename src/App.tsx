import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';


import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';




export function App() {
  return (
    <SideBar></SideBar>
  )
}