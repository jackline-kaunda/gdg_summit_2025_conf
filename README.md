# **Build AI-powered web apps with Gemini API Firebase Extensions**

This project is a hands-on demo showing how to build a simple AI chatbot using **Firebase** and the **Gemini API** through Firebase Extensions. It focuses on creating a context-aware assistant that responds to user questions using information stored in your Firebase project.

You’ll learn how to set up the Firebase services you need, attach the Gemini extension, and connect everything to a lightweight JavaScript frontend.

---

## **Features**

* Context-aware chatbot powered by the Gemini API
* Firebase Extensions for quick setup and minimal backend code
* Cloud Functions for composing structured prompts
* Firebase Authentication for login
* Firestore for storing context and messages
* Cloud Storage for additional data
* Simple web interface built with JavaScript

---

## **Tech Stack**

* **Firebase** (Authentication, Firestore, Storage, Cloud Functions)
* **Firebase Extensions** (Gemini API)
* **Node.js 20+**
* **JavaScript**
* **Gemini API**

---

## **Live Demo / Codelab**

Follow the guided codelab used for this project:
[https://tinyurl.com/intergrate-gemini-api](https://firebase.google.com/codelabs/gemini-api-extensions-web)

Slides used during the session:
[https://tinyurl.com/slides](https://docs.google.com/presentation/d/1UtF5kk0z6Pw32IehzyGIblalscKRYgJ58HMj5K3vnek/edit?usp=sharing)

---

## **Getting Started**

### **Prerequisites**

Make sure you have:

* Node.js 20+
* Firebase CLI 13.6+
* A Google account
* A Firebase project created in the Firebase Console
* A code editor and terminal
* Chrome browser

Check your versions:

```bash
node -v
firebase --version
```

---

## **Project Setup**

### 1. **Clone the Repository**

```bash
git clone <your-repo-url>
cd <repo-folder>
```

---

### 2. **Install Dependencies**

```bash
npm install
```

---

### 3. **Log in to Firebase**

```bash
firebase login
```

---

### 4. **Initialize your Firebase project**

Run:

```bash
firebase init
```

Enable:

* Functions
* Firestore
* Hosting
* Storage (if needed)

Follow prompts and link to your Firebase project.

---

### 5. **Install the Gemini Firebase Extension**

In your Firebase Console:

1. Go to **Extensions**
2. Search for **Gemini API Extension**
3. Install it and configure the required settings
4. Deploy your changes:

```bash
firebase deploy
```

---

## **How It Works**

First, replace `src/lib/firebase.config.js` with your own Firebase web app configuration.

Then, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the app by modifying `src/app/page.tsx`, `src/app/gallery/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

---
## **Usage**

Once the app loads:

1. Log in using Firebase Authentication
2. Type a question into the chatbot
3. The system retrieves context
4. Gemini generates a response
5. The UI displays the answer

---

## **Extending the Project**

You can evolve this project into:

* An event assistant
* A customer support bot
* A knowledge-base assistant
* A personalized content generator
* A tutoring or learning assistant

Just add more context and adjust the prompt structure.

---

## **Contributing**

Feel free to send pull requests, suggest improvements, or open issues. This repo is beginner-friendly.
