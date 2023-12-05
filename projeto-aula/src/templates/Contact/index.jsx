import React from 'react';
import * as Styled from './styles';

export function Contact() {
  return (
    <Styled.ContactWrapper>
      <Styled.ContactContent>
        <h1>Contact Us</h1>
        <p>
          Have questions or suggestions? Reach out to us! Wed love to hear from
          you.
        </p>
        <Styled.ContactForm>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" />

          <Styled.SubmitButton type="submit">Send Message</Styled.SubmitButton>
        </Styled.ContactForm>
      </Styled.ContactContent>
    </Styled.ContactWrapper>
  );
}
