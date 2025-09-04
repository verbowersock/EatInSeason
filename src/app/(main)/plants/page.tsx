import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const PlantList = dynamic(() => import('@/components/PlantList'), {});

const PlantsListPage = () => {
  return <PlantList />;
};

export default PlantsListPage;
