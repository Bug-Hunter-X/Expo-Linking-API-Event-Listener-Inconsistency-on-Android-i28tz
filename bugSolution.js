// bugSolution.js
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

function handleDeepLink(url) {
  // Handle the deep link here
  console.log('Deep link opened:', url);
}

export default function App() {
  const [initialURL, setInitialURL] = useState(null);

  useEffect(() => {
    const handleInitialURL = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        setInitialURL(url);
      }
    };
    handleInitialURL();

    const subscription = Linking.addEventListener('url', (event) => {
      handleDeepLink(event.url);
    });

    const fallbackSubscription = Linking.addEventListener('url', (event) => {
       console.log('Fallback listener fired:', event.url);
      // Try different logic if the initial listener fails
    });

    return () => {
      subscription.remove();
      fallbackSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (initialURL) {
      handleDeepLink(initialURL);
    }
  }, [initialURL]);

  return (
    // UI component to test
  );
}
