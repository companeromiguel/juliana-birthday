'use client';

import { useState } from 'react';
import VideoIntro from '@/components/VideoIntro';
import InvitationContent from '@/components/InvitationContent';

export default function Home() {
  const [showInvitation, setShowInvitation] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {!showInvitation ? (
        <VideoIntro onComplete={() => setShowInvitation(true)} />
      ) : (
        <InvitationContent />
      )}
    </main>
  );
}
