import Text from '@atoms/Text';
import Card from '@molecules/Card';

export default function AboutPage() {
  return (
    <div>
      <Text variant="h1">About Us</Text>
      <Card title="Our Mission">
        <Text variant="body">
          We believe in building scalable and maintainable React applications using 
          best practices and design methodologies. Atomic Design helps us create 
          consistent, reusable components that work together seamlessly.
        </Text>
      </Card>
    </div>
  );
}
