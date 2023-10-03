'use client';

import React, { use, useEffect, useState } from 'react';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';

const Main = () => {
  const { userId, getToken } = useAuth();
  console.log('userId', userId);
  const [plants, setPlants] = useState([]);

  return <></>;
};

export default Main;
