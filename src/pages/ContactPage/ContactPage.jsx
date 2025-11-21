import Text from '@atoms/Text';
import ContactForm from '@organisms/ContactForm';

export default function ContactPage() {
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div>
      <Text variant="h1">Contact Us</Text>
      <Text variant="body" color="muted">
        Have a question or want to get in touch? Fill out the form below.
      </Text>
      <br />
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
}
