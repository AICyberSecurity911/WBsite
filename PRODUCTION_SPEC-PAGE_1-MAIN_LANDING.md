# Production-Ready Spec: Page 1 - Main Landing Page

**Objective:** To create a visually stunning, interactive gateway that immediately segments users into the two primary target audiences (SMBs and Enterprises). The page must establish the QuantumLeap AI brand as innovative and seamlessly guide users to the correct, tailored user journey.

---

### **1. SEO & AEO Meta Information**

- **SEO Title:** `AI Solutions for Business Growth & Enterprise Security | [cite_start]QuantumLeap AI` [cite: 3]
- **Meta Description:** `QuantumLeap AI delivers transformative AI solutions. [cite_start]We help SMBs escape the 70-hour work week and enable Enterprises to turn operational risks into a competitive edge.` [cite: 4]

---

### **2. Page Layout & Structure**

#### **Section 1: Hero - Split-Screen**
[cite_start]A dynamic, two-panel hero section that serves as the primary user segmentation tool[cite: 6, 7].

##### [cite_start]**Left Panel (SMB Focus)** [cite: 8]

- **Content:**
    - [cite_start]**H1:** Stop Working 70-Hour Weeks While Your Business Barely Grows. [cite: 12]
    - [cite_start]**H2 (Subheading):** Get the same AI workforce that Fortune 500 companies use—without the Fortune 500 price tag. [cite: 13]
    - [cite_start]**Body Text:** Reclaim your life while your revenue grows. [cite: 14]
    - [cite_start]**Pain Hook:** Tired of being trapped in your own business? [cite: 15]
    - [cite_start]**Social Proof:** Join 200+ owners who escaped the burnout trap. [cite: 16]
    - [cite_start]**Urgency:** 🔥 Only 3 Small Business Transformation Spots Left This Month. [cite: 17]
    - [cite_start]**CTA Button:** `[ Stop the Burnout – Get My Freedom Back ]` [cite: 18]
- **Animation Prompt (for preview loop):**
    - [cite_start]A cinematic, time-lapse video shows an exhausted small business owner silhouetted against a computer screen at 2 AM, buried in paperwork[cite: 9]. [cite_start]The screen flickers, and glowing blue lines representing AI processes begin to automate the tasks[cite: 10]. [cite_start]The scene fast-forwards to the owner laughing with their family at a dinner table, relaxed, while a clean, upward-trending graph is subtly overlaid in the corner[cite: 11].

##### [cite_start]**Right Panel (Enterprise Focus)** [cite: 19]

- **Content:**
    - [cite_start]**H1:** Turn Your Biggest Operational Risks Into Your Competitive Edge. [cite: 23]
    - **H2 (Subheading):** Unleash NASA-Vetted AI Intelligence for 30% Instant Efficiency Leaps—While Rivals Fumble with Outdated Tools. [cite_start]Secure Your Edge. [cite: 24]
    - **Body Text:** Slash Costs. [cite_start]Dominate the Market. [cite: 25]
    - [cite_start]**Authority Signal:** The team behind $250M+ in documented business value. [cite: 26]
    - [cite_start]**Risk Trigger:** Every day you delay costs you $47,000 in lost efficiency. [cite: 27]
    - [cite_start]**CTA Button:** `[ Secure Your Market Advantage Now ]` [cite: 28]
- **Animation Prompt (for preview loop):**
    - [cite_start]A sleek, professional video shows a tense boardroom meeting with worried executives looking at a downward-trending red graph[cite: 20]. [cite_start]An AI interface appears over the screen, processing data and turning the graph from red to a confident, upward-trending green[cite: 21]. [cite_start]The final shot is the same boardroom, now calm and bright, with executives nodding in agreement at the positive projections[cite: 22].

##### **Hero Section Frontend Logic & Animation Brief**

- **Concept 1: The "Interactive Genesis Reveal"**
    - **Objective:** To create an interactive entry point that encourages user segmentation without visual clutter.
    - **Technical Notes for V0 (React/TypeScript):**
        - Use Framer Motion's `onHoverStart` and `onHoverEnd` props on the panel container components to manage the state that controls the dimming and visibility of the content.
        - The preview animations should be implemented as lightweight Lottie files using the `lottie-react` library.

- **Concept 2: The "Quantum Tunnel" Seamless Transition**
    - **Objective:** To create a seamless, cinematic transition to the chosen dedicated page upon user click.
    - **Technical Notes for V0 (React/TypeScript):**
        - This requires an animated routing solution. Use a routing library (like React Router) in combination with **Framer Motion's `<AnimatePresence>`** component.
        - On route change, `<AnimatePresence>` will manage the "exit" animation of the landing page component and the "enter" animation of the new page component. Use GSAP for precise programmatic control of the orb's movement and expansion during the transition.

---

#### [cite_start]**Section 2: Trust Bar** [cite: 29]

- **Content:**
    - [cite_start]**H2:** Trusted by Organizations That Demand Excellence [cite: 30]
    - **Visual:** A clean, scrolling bar of high-profile logos: IBM | BMO | HSBC | CIBC | GE | Deloitte | NASA | Allianz | Husky | ING | RIM | CIIS | [cite_start]UCOL [cite: 31, 32]
- **Design & Animation Brief:**
    - **Concept:** A smooth, continuous, looping horizontal scroll of partner logos.
    - **Specification:** Implement a gentle scroll from right to left. On mouse hover over the logo bar, the animation should pause. Logos should be rendered in grayscale by default and transition to their full color on individual hover.
    - **Technical Notes for V0 (React/TypeScript):** Best achieved with a pure CSS keyframe animation for performance.

---

#### [cite_start]**Section 3: Founder Story Preview** [cite: 33]

- **Content:**
    - [cite_start]**Image Prompt:** A professional, approachable headshot of the founder, Paras Khurana, in a modern office setting[cite: 34]. [cite_start]He should be looking directly at the camera with a confident and trustworthy expression[cite: 35].
    - [cite_start]**H2:** Built by Someone Who’s Been in Your Shoes — and in the Boardroom [cite: 36]
    - [cite_start]**Body Text (Quote):** “I’ve spent 20 years building systems for Fortune 500s — and I’ve also been the exhausted small-business owner doing payroll at midnight. I founded QuantumLeap AI to bridge that gap: bringing enterprise-level power to everyday entrepreneurs. When you partner with us, you don’t just get AI and Security— you get freedom, clarity, and a team that never quits.” [cite: 37]
    - [cite_start]**Signature:** — Paras Khurana, Founder & CEO [cite: 39]
    - **Credentials:** MIT & Caltech Alum | Delivered $170M+ Business Value | Orchestrated 65+ Epic Transformations | [cite_start]Ignited 75+ Game-Changing Products [cite: 40, 41]
- **Design & Animation Brief:**
    - **Concept:** A subtle parallax effect on the founder's image.
    - **Specification:** As the user scrolls, the founder's image should move vertically at a slightly slower rate than the text content next to it.
    - **Technical Notes for V0 (React/TypeScript):** Implement using a lightweight library like `react-scroll-parallax` or a custom React hook that updates the `transform: translateY()` CSS property based on scroll position.