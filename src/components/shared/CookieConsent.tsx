import React from 'react';
import CookieConsentBanner from 'react-cookie-consent';

export const CookieConsent = () => {
  return (
    <CookieConsentBanner
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gajraj-ventures-cookie-consent"
      style={{ 
        background: 'rgba(43, 53, 68, 0.95)',
        backdropFilter: 'blur(10px)',
      }}
      buttonStyle={{ 
        background: '#4F46E5',
        color: 'white',
        fontSize: '14px',
        borderRadius: '0.375rem',
        padding: '0.5rem 1rem'
      }}
      declineButtonStyle={{
        background: 'transparent',
        border: '1px solid #9CA3AF',
        color: 'white',
        fontSize: '14px',
        borderRadius: '0.375rem',
        padding: '0.5rem 1rem'
      }}
      expires={150}
      overlay
    >
      We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
    </CookieConsentBanner>
  );
};