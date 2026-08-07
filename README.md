# StudentHub

> A semantic, accessibility-first web portal built as a semester project at **DEPSTAR, CHARUSAT University**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VSCode](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

---

##  Project Overview

**StudentHub** is an all-in-one web portal designed to streamline campus communication and academic services into a single, centralized platform. It allows students to manage their personal profiles, register for portal access, view campus events, contact university administration, and submit feedback.

The initial phase focuses on constructing a clean, semantic HTML5 foundation paired with modular CSS3 layouts to ensure broad accessibility standards.

---

##  Requirement Analysis

###  Problem Statement
Students frequently deal with fragmented communication channels across institutional portals. **StudentHub** solves this by consolidating academic updates, registration systems, contact support, and administrative tools into a single, accessible user interface.

###  Project Scope
* **Phase 1 (Current):** Semantic HTML5 page layout, structured navigation, modular CSS file architecture (`assets/css/`), and responsive design.
* **Future Expansion:** Client-side validation using JavaScript, DOM manipulation, and dynamic backend database integration.

---

##  Features & Functional Requirements

| Module / Page | Primary Function |
| :--- | :--- |
| **Home (`index.html`)** | Landing page with overview and portal highlights. |
| **About** | Purpose, institutional mission, and core system goals. |
| **Register & Login** | User onboarding, authentication forms, and access control. |
| **Dashboard** | Quick action grid, recent announcements, and course activity. |
| **Profile** | Key-value display of personal details, student ID, and attendance. |
| **Events** | Upcoming technical, sports, and cultural campus events. |
| **Contact & Admin** | Support requests, institutional address, and administrative management. |
| **FAQ & Feedback** | Frequently asked questions and feedback submission form. |

###  Non-Functional Requirements
* **Semantic HTML5:** Strict utilization of `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, and `<footer>`.
* **Accessibility (a11y):** Form fields paired with explicit `<label>` bindings, keyboard nav support, and proper ARIA attributes.
* **Modular Architecture:** Page-specific styling rules isolated inside `assets/css/`.

---

##  User Roles

###  Student
* Register for a new account & securely log in.
* View personal academic progress on the **Dashboard** & **Profile**.
* Explore upcoming campus activities on the **Events** page.
* Submit suggestions via **Feedback** and contact university admins.

###  Administrator
* Monitor portal statistics and account registrations.
* Review incoming student feedback and support inquiries.
* Update campus announcements and event notices.

---

##  Directory Structure

```text
StudentHub/
│
├── assets/
│   ├── css/
│   │   ├── global.css        # Base reset, layout, navigation & footer styles
│   │   ├── index.css         # Home page custom layout
│   │   ├── about.css         # Feature lists & facts grids
│   │   ├── register.css      # Registration form control styles
│   │   ├── login.css         # Auth form styles
│   │   ├── dashboard.css     # Module grids & notice cards
│   │   ├── events.css        # Event card layout
│   │   ├── profile.css       # Data display grids
│   │   ├── contact.css       # Support form layout
│   │   ├── admin.css         # System stats grid
│   │   ├── faq.css           # Accordion / question cards
│   │   └── feedback.css      # Survey form controls
│   ├── js/                   # Future script assets
│   ├── images/               # Graphic assets
│   └── fonts/                # Web fonts
│
├── docs/                     # Course documentation & project reports
│
├── pages/                    # Subpages directory
│   ├── about.html
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   ├── events.html
│   ├── profile.html
│   ├── contact.html
│   ├── admin.html
│   ├── faq.html
│   └── feedback.html
│
├── index.html                # Root landing page
└── README.md                 # Project documentation
