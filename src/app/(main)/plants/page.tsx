import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const PlantList = dynamic(() => import('@/components/PlantList'), {
  ssr: false,
});

const PlantsListPage = () => {
  return <PlantList />;
};

export default PlantsListPage;
