import { onGoogleSignIn } from './auth/googleSignIn';
import { onAppleSignIn } from './auth/appleSignIn';

function initializeApp() {
    // ... existing code ...
    // Call the Google sign-in function
    onGoogleSignIn();
    // Call the Apple sign-in function
    onAppleSignIn();
    // ... existing code ...
}
