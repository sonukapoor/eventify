# Eventify - Angular and Firebase Integration in idx.dev

Eventify is a simple application that demonstrates the integration of Firebase with Angular, developed entirely in the cloud using [idx.dev](https://idx.dev). This repository accompanies the article series **"Building Modern Applications with Firebase and Angular in idx.dev"**, where we explore how to set up and build a real-time, serverless application step by step.

Your previously outlined series is still excellent as it lays out a clear and progressive structure for covering Firebase and Angular integration. However, the updated outline I provided earlier is slightly condensed, focusing on the most critical aspects of Firebase and Angular for idx.dev users. Here’s a comparison and adjustment based on your original outline to better align with both:  

### Series  

1. [**Introduction to Firebase and Angular**](https://dev.to/this-is-angular/getting-started-with-firebase-and-angular-in-idxdev-49h6)  
   Overview of Firebase features and Angular’s integration, highlighting benefits and use cases.  

2. **Setting Up Firebase with Angular**  
   Firebase project setup and AngularFire integration, focusing on idx.dev for cloud-based development.  

3. **User Authentication**  
   Setting up email/password and Google login authentication, and managing authentication states.  

4. **Building CRUD Features with Firestore**  
   Creating, reading, updating, and deleting events using Firestore, with real-world examples.  

5. **File Uploads with Firebase Storage**  
   Uploading and displaying event images or files, integrating Firebase Storage seamlessly.  

6. **Real-Time Updates with Firestore Listeners**  
   Implementing live updates for events, explaining Firestore listeners in AngularFire.  

7. **Securing Your App**  
   Setting up Firebase rules, role-based access control, and strategies for app security.  

8. **Deploying the Application**  
   Using idx.dev for deployment to Firebase Hosting or Vercel, including build optimization tips.  

## Features

- Firebase integration using AngularFire.
- Cloud Firestore for real-time database functionality.
- Step-by-step guidance to build the application in idx.dev.
- Foundation for expanding into authentication, real-time updates, and more.

## Getting Started

### Prerequisites

- A Firebase account ([Sign up for Firebase](https://firebase.google.com)).
- An idx.dev account ([Sign up for idx.dev](https://idx.dev)).
- Basic understanding of Angular and TypeScript.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sonukapoor/eventify.git
   cd eventify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update Firebase configuration:
   - Go to your Firebase Console and copy your Firebase configuration keys.
   - Replace the placeholder values in `src/environments/environment.ts`:
     ```typescript
     export const environment = {
       firebase: {
         apiKey: "YOUR_API_KEY",
         authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
         projectId: "YOUR_PROJECT_ID",
         storageBucket: "YOUR_PROJECT_ID.appspot.com",
         messagingSenderId: "YOUR_SENDER_ID",
         appId: "YOUR_APP_ID",
       },
       production: false,
     };
     ```

4. Run the application:
   ```bash
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`.

### Deploying on idx.dev

1. Log in to [idx.dev](https://idx.dev) and create a new Angular workspace.
2. Clone this repository into your idx.dev environment.
3. Follow the steps in the accompanying article to set up and deploy the application.

## Project Structure

```
src/
├── app/
│   ├── app.component.ts  // Main application component
│   ├── app.config.ts     // Angular config with Firebase integration
├── environments/
│   ├── environment.ts    // Development environment configuration
│   ├── environment.prod.ts // Production environment configuration
```

## Resources

- **Article Series**: [Building Modern Applications with Firebase and Angular in idx.dev](https://your-article-link.com)
- **Firebase Documentation**: [https://firebase.google.com/docs](https://firebase.google.com/docs)
- **AngularFire Documentation**: [https://github.com/angular/angularfire](https://github.com/angular/angularfire)

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.