'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiSend,
  FiCheckCircle,
  FiAlertCircle 
} from 'react-icons/fi';
import { useState, FormEvent } from 'react';
import { theme } from '@/styles/theme';

// === STYLES ===

const ContactSection = styled.section`
  padding: 8rem 2rem;
  background: ${theme.colors.dark};
  position: relative;
  overflow: hidden;
`;

const GlowBg = styled.div`
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, ${theme.colors.primary}10, transparent 70%);
  pointer-events: none;
  border-radius: 50%;
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
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const InfoColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1.5rem;
  background: ${theme.colors.cardBg};
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    border-color: ${theme.colors.primary}30;
    background: rgba(108, 99, 255, 0.03);
  }
`;

const InfoIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
`;

const InfoContent = styled.div``;

const InfoLabel = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 0.3rem;
`;

const InfoValue = styled.p`
  font-weight: 600;
  font-size: 1.05rem;
  font-family: ${theme.fonts.heading};
`;

const InfoLink = styled.a`
  font-weight: 600;
  font-size: 1.05rem;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.secondary};
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const QRWrapper = styled(motion.div)`
  margin-top: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;
  border: 2px dashed ${theme.colors.primary}30;
`;

const QRPlaceholder = styled.div`
  width: 140px;
  height: 140px;
  background: ${theme.colors.dark};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: ${theme.colors.gray};
  text-align: center;
`;

const QRLabel = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.dark};
  font-weight: 600;
  text-align: center;
`;

const FormColumn = styled(motion.div)`
  background: ${theme.colors.cardBg};
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.04);
`;

const FormTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: ${theme.fonts.heading};
`;

const FormSubtitle = styled.p`
  color: ${theme.colors.gray};
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.2rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${theme.colors.gray};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1.2rem;
  background: ${theme.colors.dark};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: white;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.9rem 1.2rem;
  background: ${theme.colors.dark};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: white;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  resize: vertical;
  min-height: 130px;
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`;

const SubmitButton = styled(motion.button)<{ disabled: boolean }>`
  width: 100%;
  padding: 1rem;
  background: ${props => props.disabled ? 'gray' : theme.colors.gradient};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-family: ${theme.fonts.body};
  box-shadow: ${props => props.disabled ? 'none' : '0 10px 30px rgba(108, 99, 255, 0.25)'};
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

const FeedbackMessage = styled(motion.div)<{ type: 'success' | 'error' }>`
  margin-top: 1.2rem;
  padding: 1rem;
  border-radius: 12px;
  background: ${props => props.type === 'success' ? 'rgba(0, 212, 170, 0.1)' : 'rgba(255, 107, 107, 0.1)'};
  border: 1px solid ${props => props.type === 'success' ? 'rgba(0, 212, 170, 0.3)' : 'rgba(255, 107, 107, 0.3)'};
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: ${props => props.type === 'success' ? theme.colors.secondary : theme.colors.accent};

  svg {
    font-size: 1.2rem;
  }
`;

// === COMPOSANT ===

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    // Validation basique
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedback({
        type: 'error',
        message: 'Veuillez remplir tous les champs obligatoires (nom, email, message).'
      });
      return;
    }

    // Vérifier format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFeedback({
        type: 'error',
        message: 'Veuillez entrer une adresse email valide.'
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }

      // Succès
      setFeedback({
        type: 'success',
        message: '✅ Message envoyé avec succès ! Nous vous répondrons dans les 24 heures.'
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error: any) {
      setFeedback({
        type: 'error',
        message: error.message || 'Une erreur est survenue. Veuillez réessayer.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactSection id="contact">
      <GlowBg />

      <Container>
        <Header>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contactez-nous
          </Badge>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Prêt à passer au <span>niveau supérieur</span> ?
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discutons de votre projet. Remplissez le formulaire ou contactez-nous directement.
          </Subtitle>
        </Header>

        <Grid>
          <InfoColumn
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <InfoCard whileHover={{ x: 5 }}>
              <InfoIcon><FiPhone /></InfoIcon>
              <InfoContent>
                <InfoLabel>Téléphone</InfoLabel>
                <InfoValue>+243 858 814 961</InfoValue>
              </InfoContent>
            </InfoCard>

            <InfoCard whileHover={{ x: 5 }}>
              <InfoIcon><FiMail /></InfoIcon>
              <InfoContent>
                <InfoLabel>Email</InfoLabel>
                <InfoLink href="mailto:nicaisebuhanda6@gmail.com">
                  Contact@mayele-tech.com
                </InfoLink>
              </InfoContent>
            </InfoCard>

            <InfoCard whileHover={{ x: 5 }}>
              <InfoIcon><FiMapPin /></InfoIcon>
              <InfoContent>
                <InfoLabel>Site Web</InfoLabel>
                <InfoLink href="https://mayele-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                  www.mayele-tech.com
                </InfoLink>
              </InfoContent>
            </InfoCard>

            <InfoCard whileHover={{ x: 5 }}>
              <InfoIcon><FiClock /></InfoIcon>
              <InfoContent>
                <InfoLabel>Disponibilité</InfoLabel>
                <InfoValue>Lun — Sam · 8h — 18h</InfoValue>
              </InfoContent>
            </InfoCard>

            <QRWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <QRPlaceholder>QR Code ici</QRPlaceholder>
              <QRLabel>Scannez pour nous contacter rapidement 📱</QRLabel>
            </QRWrapper>
          </InfoColumn>

          <FormColumn
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FormTitle>Envoyez-nous un message</FormTitle>
            <FormSubtitle>
              Nous vous répondrons dans les 24 heures.
            </FormSubtitle>

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Nom complet *</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+243 ..."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={loading}
                whileHover={loading ? {} : { scale: 1.02 }}
                whileTap={loading ? {} : { scale: 0.98 }}
              >
                {loading ? (
                  <>⏳ Envoi en cours...</>
                ) : (
                  <>
                    <FiSend />
                    Envoyer le message
                  </>
                )}
              </SubmitButton>

              {/* Feedback */}
              {feedback && (
                <FeedbackMessage
                  type={feedback.type}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {feedback.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
                  {feedback.message}
                </FeedbackMessage>
              )}
            </form>
          </FormColumn>
        </Grid>
      </Container>
    </ContactSection>
  );
}