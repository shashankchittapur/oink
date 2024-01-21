import ComingSoonPage from '@/components/coming-soon';
import Image from 'next/image';
import { Suspense } from 'react';
import LoadingPage from '../../loading';
export default function PressPage() {
    return (
        <Suspense fallback={<LoadingPage />}>
            <ComingSoonPage />
        </Suspense>
    );
}