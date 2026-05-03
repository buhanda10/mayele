'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiSmartphone, 
  FiCloud, 
  FiGrid, 
  FiPrinter, 
  FiTrendingUp 
} from 'react-icons/fi';
import { theme } from '@/styles/theme';

// === STYLES ===

const ExpertiseSection = styled.section`
  padding: 8rem 2rem;
  background: ${theme.colors.darker};
  position: relative;
  overflow: hidden;
`;

const DotsBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(108, 99, 255, 0.08) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Badge = styled(motion.div)`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 1px solid ${theme.colors.primary}40;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${theme.colors.secondary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  background: rgba(108, 99, 255, 0.05);
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  font-family: ${theme.fonts.heading};
  margin-bottom: 1rem;

  span {
    background: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled(motion.p)`
  color: ${theme.colors.gray};
  font-size: 1.05rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
`;

const Card = styled(motion.div)`
  background: ${theme.colors.cardBg};
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${theme.colors.gradient};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    border-color: ${theme.colors.primary}40;

    &::before {
      transform: scaleX(1);
    }
  }
`;

const CardIconWrapper = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 14px;
  background: ${theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-family: ${theme.fonts.heading};
`;

const CardDescription = styled.p`
  color: ${theme.colors.gray};
  font-size: 0.95rem;
  line-height: 1.7;
`;

const SectionTag = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: rgba(108, 99, 255, 0.03);
  border-radius: 16px;
  border: 1px dashed rgba(108, 99, 255, 0.2);
`;

const SectionTagTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
`;

const Divider = styled(motion.div)`
  width: 60px;
  height: 3px;
  background: ${theme.colors.gradient};
  border-radius: 10px;
  margin: 3rem auto;
`;

// === DONNÉES ===

const digitalSolutions = [
  {
    icon: <FiCode />,
    title: 'Systèmes de gestion & SaaS',
    description:
      'Applications web sur mesure pour gérer votre activité : stocks, facturation, RH, CRM. Des logiciels puissants, accessibles partout.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Applications mobiles',
    description:
      'Apps natives Android & iOS, pensées pour offrir une expérience fluide à vos utilisateurs, avec ou sans connexion.',
  },
  {
    icon: <FiCloud />,
    title: 'Plateformes cloud sécurisées',
    description:
      'Hébergement et architecture cloud robustes, capables de supporter des milliers d\'utilisateurs simultanés sans faille.',
  },
];

const designServices = [
  {
    icon: <FiGrid />,
    title: 'Identité visuelle',
    description:
      'Logos professionnels, chartes graphiques complètes et guidelines pour une marque mémorable et cohérente.',
  },
  {
    icon: <FiPrinter />,
    title: 'Supports marketing',
    description:
      'Affiches, flyers, brochures et visuels digitaux qui captent l\'attention et valorisent votre message.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Contenu réseaux sociaux',
    description:
      'Création de visuels et stratégie de contenu adaptés à chaque plateforme pour engager votre communauté.',
  },
];

// === COMPOSANT ===

export default function Expertise() {
  return (
    <ExpertiseSection id="expertise">
      <DotsBg />

      <Container>
        {/* Header */}
        <Header>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos Domaines d&apos;Expertise
          </Badge>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ce que nous <span>maîtrisons</span>
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Deux pôles complémentaires pour couvrir tous vos besoins numériques.
          </Subtitle>
        </Header>

        {/* Catégorie 1 : Solutions Digitales */}
        <SectionTag
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTagTitle>🔹 Solutions Digitales</SectionTagTitle>
        </SectionTag>

        <Grid>
          {digitalSolutions.map((item, index) => (
            <Card
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <CardIconWrapper>{item.icon}</CardIconWrapper>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </Grid>

        {/* Séparateur */}
        <Divider
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* Catégorie 2 : Design & Branding */}
        <SectionTag
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTagTitle>🎨 Design & Branding</SectionTagTitle>
        </SectionTag>

        <Grid>
          {designServices.map((item, index) => (
            <Card
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <CardIconWrapper>{item.icon}</CardIconWrapper>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </Grid>
      </Container>
    </ExpertiseSection>
  );
}