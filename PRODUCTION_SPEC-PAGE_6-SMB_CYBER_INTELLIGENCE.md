# Production-Ready Spec: Page 6 - SMB Service Page: Cyber Intelligence

**Objective:** To educate SMB owners about their high vulnerability to cyberattacks and the potentially business-ending costs. The page must create a strong sense of immediate risk and present QuantumLeap AI's services as an accessible, authoritative, and essential form of protection.

---

### **1. SEO & AEO Meta Information**

- **SEO Title:** `Cybersecurity for Small Business | [cite_start]NASA-Trusted Protection` [cite: 596]
- **Meta Description:** `60% of small businesses close after a cyberattack. [cite_start]Get Fortune 500-level protection, including penetration testing and dark web monitoring, tailored for your budget.` [cite: 597, 598]
- **AEO Note:** The meta description uses a startling statistic to immediately capture attention and answer the user's implied question: "Why should my small business worry about cybersecurity?"

---

### **2. Page Layout & Structure**

#### **Section 1: Hero Section**

- **Content:**
    - **Image Prompt:** A sleek, dark-themed animation. A shield icon with "SMB" in the center is shown. Digital threats, represented as red arrows, are seen bouncing off the shield. [cite_start]The text "Protection Trusted by NASA" appears with a subtle, authoritative glow. [cite: 601, 602, 603]
    - [cite_start]**H1:** Small Business, Big Target—Protect Yourself Like a Fortune 500. [cite: 604]
    - **H2 (Subheading):** 60% of small businesses close within 6 months of a cyberattack. [cite_start]Get the same elite protection trusted by NASA, tailored for your budget. [cite: 605, 606]
    - [cite_start]**CTA Button:** `[ Get My Free Security Assessment ]` [cite: 607]
- **Design & Animation Brief:**
    - **Concept:** A Lottie animation that visually communicates protection and authority.
    - **Specification:** The animation should follow the Image Prompt. The shield should materialize first, followed by the red arrows appearing and deflecting off it with a satisfying visual effect. The "Protection Trusted by NASA" text should fade in with its glow at the end of the sequence.
    - **Technical Notes for V0 (React/TypeScript):**
        - Implement as a high-quality Lottie animation using the `lottie-react` library.
        - Configure it to play automatically once on component mount.

---

#### **Section 2: The Problem - You're an Easier Target Than You Think**

- **Content:**
    - [cite_start]**H2:** Hackers Love Small Businesses for One Simple Reason: You Think You're Too Small to Be a Target. [cite: 609]
    - **Visual Stat (Infographic):**
        - [cite_start]`43%` of cyberattacks target small businesses. [cite: 611]
        - [cite_start]`$200,000` is the average cost of an attack. [cite: 612]
        - [cite_start]`60%` of attacked businesses close within 6 months. [cite: 613]
        - [cite_start]`197 Days` is the average time to discover a breach (you're compromised and don't even know it). [cite: 614]
- **Design & Animation Brief:**
    - **Concept:** Animate the statistics to make them more impactful.
    - **Specification:** As the section scrolls into view, each of the four stats should animate in sequence. For each stat, the icon/number should appear first, with the number rapidly "counting up". The descriptive text below should then fade in.
    - **Technical Notes for V0 (React/TypeScript):**
        - Use Framer Motion's `whileInView` and `staggerChildren` to animate the four stat blocks sequentially.
        - Use the `react-countup` library for the number animations.

---

#### **Section 3: The Solution - NASA-Trusted Expertise, Simplified for You**

- **Content:**
    - [cite_start]**H2:** We Apply the Same Elite Methodology Used to Secure NASA Systems. [cite: 616]
    - **Layout:** An icon-based grid explaining the services.
        - [cite_start]Penetration Testing: We act like hackers to find and fix security holes before the bad guys do. [cite: 618]
        - [cite_start]AI Security Audits: We test your AI tools (like chatbots) for vulnerabilities that could leak private data. [cite: 619]
        - [cite_start]24/7 Monitoring: Our AI-powered system watches your network and blocks threats in real-time. [cite: 620]
        - [cite_start]Dark Web Monitoring: Know immediately if your company credentials are for sale on the dark web. [cite: 621]
        - [cite_start]Employee Security Training: Stop 87% of attacks at the source—your team. [cite: 622]
- **Design & Animation Brief:**
    - **Concept:** A staggered entrance animation for the grid items.
    - **Specification:** As the section scrolls into view, the grid items should fade in and slide up sequentially with a slight delay. Each item should have a hover effect (scale-up and shadow lift).
    - **Technical Notes for V0 (React/TypeScript):**
        - Use Framer Motion's `whileInView` and `staggerChildren` for the entrance animation.

---

#### **Section 4: Interactive Tool - 2-Minute Cyber Risk Assessment**

- **Content:**
    - [cite_start]**H2:** 🔥 Are You Leaving the Door Open for Hackers? [cite: 624]
    - **Input Fields (Multiple Choice):**
        1. When was the last time your team was required to update passwords? (Within last 3 months | 3-6 months ago | 6-12 months ago | Over a year ago | We don't have a password policy) [cite_start][cite: 629, 630]
        2. Does your team use public AI tools (ChatGPT, etc.) with customer/company info? (Yes, regularly | Occasionally | Rarely | No | I don't know) [cite_start][cite: 631, 632]
        3. Do you have a backup system you've personally tested and successfully restored in the last 3 months? (Yes, we test monthly | We have backups but haven't tested recently | We have backups but never tested restoration | We don't have a backup system | I'm not sure) [cite_start][cite: 633, 634]
        4. Can employees access company email/files from personal phones/laptops? (Yes, with no restrictions | Yes, but with some security measures | Only from company-managed devices | I'm not sure) [cite_start][cite: 635]
        5. When was your last professional security audit by a third party? (Within last 6 months | 6-12 months ago | Over a year ago | Never | I don't know) [cite_start][cite: 636, 637]
    - **Gated Offer & Lead Capture:**
        - [cite_start]**Headline:** Get Your Step-by-Step Security Roadmap. [cite: 699]
        - [cite_start]**Body:** We'll send a personalized PDF showing a DIY security checklist for immediate improvements, plus "The 7 Security Mistakes That Get Small Businesses Hacked". [cite: 700]
        - [cite_start]**CTA Button:** `[ Send My Security Roadmap ]` [cite: 701]

- **Frontend Logic, Design & Animation Brief:**
    - **UI/UX Animations:**
        - **Quiz Steps:** Use a smooth transition where the next question slides in from the right as the current one slides out to the left.
        - **Results Reveal:** This should be dramatic. The `RISK LEVEL` should appear with a red, glowing text effect and a slight shake if the level is 'CRITICAL'. The `Vulnerability Summary` numbers should count up, and the list of critical vulnerabilities should fade in one by one, each with a red alert icon.
    - **Technical Notes for V0 (React/TypeScript):**
        - Manage quiz state with `useState`. Use Framer Motion's `<AnimatePresence>` for the question transitions.

- **Backend Logic, Formulas & Recommendation Engine:**
    - **Objective:** To reveal specific, hidden vulnerabilities and create immediate urgency for the "Security Roadmap" lead magnet.
    - **Formulas (to be implemented in JavaScript/TypeScript):**
        ```javascript
        [cite_start]// [cite: 641-680]
        let riskScore = 0;
        const criticalVulns = [];
        const highRiskVulns = [];

        // Q1: Password policy
        if (q1 === 'never' || q1 === 'over_year') {
            criticalVulns.push({ name: 'Stale Passwords', description: 'Your credentials are likely exposed on dark web', impact: 'Hackers can access systems with stolen passwords' });
            riskScore += 25;
        }
        // Q2: AI tool usage
        if (q2 === 'yes' || q2 === 'occasionally') {
            criticalVulns.push({ name: 'AI Data Leakage', description: 'Training public AI with your private data', impact: 'Confidential info now in public AI training datasets' });
            riskScore += 30;
        }
        // Q3: Backup testing
        if (q3 === 'no_backup' || q3 === 'never_tested') {
            criticalVulns.push({ name: 'Untested or Non-Existent Backups', description: 'No proven recovery from a ransomware attack', impact: '70% of untested backups fail during recovery, forcing you to pay the ransom' });
            riskScore += 35;
        }
        // Q4: Device management
        if (q4 === 'unrestricted') {
            highRiskVulns.push({ name: 'Unmanaged Device Access', description: 'Personal devices create security gaps', impact: 'Lost phones or compromised devices expose company data' });
            riskScore += 20;
        }
        // Q5: Security audits
        if (q5 === 'never') {
            criticalVulns.push({ name: 'Never Been Audited', description: 'No visibility into your actual security posture', impact: 'Hackers know your vulnerabilities better than you do' });
            riskScore += 25;
        }

        // Determine Overall Risk Level
        let overallRiskLevel;
        if (riskScore >= 70 || criticalVulns.length >= 3) {
            overallRiskLevel = "CRITICAL - You're likely already compromised";
        } else if (riskScore >= 50 || criticalVulns.length >= 2) {
            overallRiskLevel = 'HIGH - Breach highly probable within 90 days';
        } else {
            overallRiskLevel = 'MODERATE - Significant vulnerabilities need attention';
        }
        
        // Calculate Potential Breach Cost
        const potentialBreachCost = (criticalVulns.length * 85000) + (highRiskVulns.length * 45000);
        const finalBreachCost = Math.max(potentialBreachCost, 50000);
        ```
    - **Instant Results Display (UX):**
        - **Primary Result:** `🚨 RISK LEVEL: [overallRiskLevel]`
        - **Vulnerability Summary:**
            - `[X] CRITICAL vulnerabilities requiring immediate action`
            - `[Y] HIGH-RISK vulnerabilities creating significant exposure`
        - **Your Critical Vulnerabilities:** A dynamic list populated from the `criticalVulns` array.
        - **Financial Risk:** `YOUR ESTIMATED BREACH RISK: $[finalBreachCost]`
    - **Technical Notes for V0 (NodeJS/MongoDB):**
        - On submission, `POST` the user's email, their quiz answers (`formData`), and the calculated results (`calculatedResults`) to the `/api/leads` endpoint.

---

#### **Section 5: Integrated Blog Post**
*(This section is content-heavy and static. The primary task is clean, readable formatting.)*

- [cite_start]**H2:** One Click, The $515,000 Mistake [cite: 703]
- [cite_start]**Full Blog Content:** (As provided in the source document, from "It started with an email..." to the final CTA) [cite: 705-733]

---

#### **Sections 6, 7, 8, 9 (Social Proof, Pricing, FAQ, Guarantee)**
*(These sections use established patterns.)*

- [cite_start]**Content:** Populate with all testimonials [cite: 737-744][cite_start], pricing tier details [cite: 748-750][cite_start], FAQ questions/answers [cite: 755-762][cite_start], and guarantee details [cite: 765, 766] from the source document.
- **Design & Animation Brief:**
    - **Testimonial Carousel:** Implement using `swiper/react` with a "fade" effect.
    - **Pricing Tiers:** Use interactive cards that scale on hover. The "Business Security" plan should be highlighted.
    - **FAQ:** Implement a smooth accordion expand/collapse animation using Framer Motion.
    - **Guarantee & Final CTA:** The alternative CTA `[ Schedule Emergency Security Call ]` should have a more prominent style (e.g., red outline or background on hover) to differentiate it from the primary CTA.