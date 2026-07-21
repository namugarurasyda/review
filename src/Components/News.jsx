import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext); 

   return (
    <ThemeContext value="dark">
      <Form />
    </ThemeContext>
  );
}