import { getServerSession } from 'next-auth';
import { options } from '../../pages/api/auth/[...nextauth]';
import React from 'react';

const About = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/about');
  }

  return <div>About</div>;
};

export default About;
