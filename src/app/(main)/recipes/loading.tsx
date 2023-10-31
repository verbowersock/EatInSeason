import RecipePlaceholder from '@/components/RecipePlaceholder';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex h-auto w-full animate-pulse  flex-col items-center'>
      <div className='my-10 h-14 w-1/4 rounded-xl bg-gray-300'></div>
      <RecipePlaceholder />
    </div>
  );
}
