import type { Metadata } from 'next';
import StyledComponentsRegistry from './registry';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mayele Tech — Solutions Digitales Innovantes',
  description: 'Devenir une référence congolaise dans la conception de solutions numériques innovantes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}