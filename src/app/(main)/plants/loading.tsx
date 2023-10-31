import PlantPlaceholder from '@/components/PlantPlaceholder';

export default function Loading() {
  return (
    <section className='container mx-auto flex w-full animate-pulse flex-col justify-center px-1 pt-12 align-middle sm:px-4'>
      <div className='mx-auto my-14 h-12 w-1/3 rounded-xl bg-gray-300'></div>
      <div className='mt-10 h-8 w-full rounded-xl bg-gray-300 md:my-10 md:h-12'></div>
      <div className='mt-2 h-8 w-full rounded-xl bg-gray-300 md:hidden md:h-12'></div>
      <div className='mb-10 mt-2 h-8 w-full rounded-xl bg-gray-300 md:hidden md:h-12'></div>
      <PlantPlaceholder />
    </section>
  );
}
