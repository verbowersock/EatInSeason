'use client';

import React, { use, useEffect, useState } from 'react';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { getPlants } from '@/db_client/supabaseRequests';
import { GetPlantsProps } from '@/db_client/supabaseRequests';
import PlantList from './PlantList';
const Main = () => {
  const { userId, getToken } = useAuth();
  console.log('userId', userId);
  const [plants, setPlants] = useState([]);

  /*useEffect(() => {
    console.log('loading plants');
    const loadPlants = async () => {
      const token = await getToken({ template: 'supabase' });
      const userPlants = await getPlants({ userId, token } as GetPlantsProps);
      console.log('plants', userPlants);
      setPlants(userPlants);
    };
    loadPlants();
  }, []);*/
  //(requesting_user_id() = ("userId")::text)
  //(requesting_user_id() = ("userId")::text)
  return (
    <>
      <SignedIn>
        {/* Mount the UserButton component */}

        <p>Signed In</p>
        <p>{userId}</p>
        <PlantList />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        Signed Out
      </SignedOut>
      ;
    </>
  );
};

export default Main;
