# Trusted-Aide Website — Solutions Architecture Design Document

**Status:** Working design document — baseline for site construction and content decisions.

---

## Purpose

This document defines how the Solutions section should be designed and built. It is intended to prevent layout drift, copy inconsistency, and ad-hoc page building while keeping the site aligned to Trusted-Aide's current positioning.

---

## Recommended Top Navigation

| Nav Item | Notes |
|---|---|
| Home | Existing landing page and overall positioning |
| Solutions | New top-level catalogue page for cross-cutting solution areas |
| Portfolio Advisory | Shorter version of Investors Portfolio Advisory |
| China-Global | Current cross-border service pillar |
| Governance | Shorter version of Governance Certification if needed |
| Digital Enablement | Shorter version of Digital Business Enablement if needed |
| Resources | Articles, briefings, and thought leadership |
| Contact | Lead capture and enquiries |

---

## Design Principles

- Solutions should be prominent because some visitors think by capability, not by customer group.
- The page should be outcome-led, not a long generic service list.
- Application Security Automation should be visibly featured near the top — it is a commercial priority.
- Do not mention AppSecAI, EFA, or any partner-specific product terminology on the public page at this stage.
- Keep the AppSec message end-to-end: discover vulnerabilities earlier, triage scanner output, prioritize real risks, and support automated remediation workflows.
- Use simple language for less mature buyers before introducing SAST, AppSec, CI/CD, or remediation workflow terms.

---

## Information Architecture

| Page | URL | Purpose | Build Priority |
|---|---|---|---|
| Solutions Overview | /solutions | Central overview of Trusted-Aide solution areas and engagement models | 1 |
| AI-Powered Application Security Automation | /application-security-automation | Dedicated commercial page for the featured AppSec automation offer | 2 |
| Leadership & Governance | /leadership-governance | Fractional CIO/CISO, PMO, project governance, AI governance | 3 |
| Cybersecurity, Privacy & Compliance | /cybersecurity-privacy-compliance | Secure-by-design, ISO 27001, SOC 2, GRC, vendor risk | 3 |
| China & APAC Cross-Border Advisory | /china-apac-advisory | China/APAC IT, cyber, regulatory, and local fit advisory | 3 |
| Training & Workshops | /training-workshops | Practical workshops for leaders, project teams, and technical teams | 4 |
| Technology Implementation & Business Enablement | /technology-business-enablement | Infrastructure setup, Odoo, MVP systems, adoption support | 4 |

---

## Solutions Overview Page — Section 1: Hero

**URL:** /solutions
**Page title:** Solutions
**Subtitle:** Practical IT, cybersecurity, governance, compliance, and digital enablement solutions for businesses operating locally, regionally, and across China/APAC

| Element | Copy |
|---|---|
| Heading | Build Trust in Technology, Reduce Risk, and Execute with Confidence |
| Body | Trusted-Aide helps business leaders make better technology decisions, strengthen cybersecurity and compliance, govern digital and AI initiatives, and execute practical improvements across local, regional, and China/APAC environments. Our solutions combine senior advisory, governance, cybersecurity, compliance readiness, training, and implementation support. Whether you need a focused assessment, a practical workshop, a fractional technology leader, or support to improve execution, we help you move from uncertainty to clear, risk-informed action. |
| Primary CTA | Discuss Your Needs → /contact |
| Secondary CTA | Explore Solution Areas → #solution-areas |

---

## Solutions Overview Page — Section 2: Featured Solution

**AI-Powered Application Security Automation**

| Element | Copy |
|---|---|
| Heading | Featured Solution: AI-Powered Application Security Automation |
| Subheading | Scan code for vulnerabilities, reduce false-positive noise, and move faster from detection to remediation. |
| CTA | Discuss your App Security Challenges → /contact |

### Body Copy

Modern software is built and changed quickly. Developers are often under pressure to release new features, fix issues, and support business needs at speed. Even with good development practices, software bugs are still created because applications can contain thousands or millions of lines of code, use many third-party components, and change frequently.

Some bugs are more than functional defects. They can become security vulnerabilities that attackers exploit to gain access, steal data, disrupt services, or take control of systems. Severe vulnerabilities can lead to serious outcomes such as remote code execution, data breaches, account compromise, or business interruption.

It is not realistic for organizations to manually find every security weakness in their code. This is why many teams use application security scanning tools, such as SAST or code scanning solutions, to identify potential vulnerabilities earlier in the development lifecycle.

However, scanning alone does not solve the problem. Code scanning tools can produce a large volume of findings, including false positives, duplicated issues, and alerts that lack clear remediation guidance. Security teams may not have enough time to review every finding, and developers may not have enough capacity to fix every issue quickly. As a result, real vulnerabilities can remain open in the backlog.

The risk is increasing because attackers are also using automation and AI-assisted techniques to identify and exploit weaknesses faster. Organizations that cannot triage and remediate vulnerabilities efficiently may remain exposed for too long.

Trusted-Aide helps organizations strengthen application security end to end. For organizations that do not yet have code scanning in place, we can help introduce an appropriate application security scanning approach to identify potential vulnerabilities earlier. For organizations that already use SAST or code scanning tools, we can work with existing scan outputs and help turn findings into practical remediation action.

### Four Benefit Cards

| Card | Heading | Body |
|---|---|---|
| 1 | Discover Vulnerabilities Earlier | Use application security scanning to identify potential code vulnerabilities before they reach production. |
| 2 | Reduce False-Positive Handling | Significantly reduce time spent reviewing scanner noise so teams can focus on real risks. |
| 3 | Accelerate Remediation | Move validated findings into clearer, developer-ready remediation and workflow support. |
| 4 | Scale AppSec Capacity | Help limited security teams cover more applications without simply adding more headcount. |

---

## Solutions Overview Page — Section 3: Our Solution Areas

| Card | Heading | Description | Link |
|---|---|---|---|
| 1 | Leadership & Governance | Senior IT, cybersecurity, project, and AI governance support for organizations that need experienced leadership without necessarily hiring full-time executives. | /leadership-governance |
| 2 | Cybersecurity, Privacy & Compliance | Practical governance and readiness support to help organizations protect data, reduce cyber exposure, prepare for audits, and meet customer or regulatory expectations. | /cybersecurity-privacy-compliance |
| 3 | Application Security Automation | AI-powered support to discover vulnerabilities earlier, reduce scanner noise, prioritize real risks, and accelerate secure code remediation through existing development workflows. | /application-security-automation |
| 4 | China & APAC Cross-Border Advisory | Specialist advisory for organizations navigating the gap between global IT governance expectations and China/APAC regulatory, technology, ecosystem, and execution realities. | /china-apac-advisory |
| 5 | Training & Workshops | Practical workshops and awareness sessions for leaders, project teams, and technical teams who need actionable guidance on cyber, privacy, AI, China/APAC, and governance risks. | /training-workshops |
| 6 | Technology Implementation & Business Enablement | Practical implementation and execution support for organizations that need to modernize operations, set up technology capabilities, or implement business systems in a controlled and secure way. | /technology-business-enablement |

---

## Solutions Overview Page — Section 4: Engagement Models

| Model | Best For |
|---|---|
| Quick Start Session / Workshop | Fast clarity, executive alignment, or practical awareness on a focused topic. |
| Scoped Assessment / Project | A defined problem, risk, system, vendor, project, or decision requiring structured review and recommendations. |
| Retainer Advisory | Ongoing access to experienced IT, cybersecurity, governance, or China/APAC advisory support. |
| Fractional Leadership & Governance | Regular senior oversight for IT, cybersecurity, AI governance, PMO, portfolio governance, or project recovery. |
| Implementation Support | Practical execution support after decisions are made, including coordination through trusted partners where appropriate. |

---

## Solutions Overview Page — Section 5: Closing CTA

| Element | Copy |
|---|---|
| Heading | Not Sure Which Solution Fits? |
| Body | You do not need to know the exact service name before speaking with us. Start with the business problem, risk, project, or decision you are facing. We will help clarify whether you need a quick advisory session, a structured assessment, a workshop, a retainer, fractional leadership, or implementation support. |
| Button | Contact Trusted-Aide → /contact |

---

## Subpage Design Templates

| Subpage | URL | Subtitle | Required Sections |
|---|---|---|---|
| AI-Powered Application Security Automation | /application-security-automation | Reduce SAST noise, prioritize real vulnerabilities, and remediate faster without slowing software delivery. | Problem explanation, detection is not remediation, what the solution does, traditional vs automated workflow, benefits, where it fits, best suited for, engagement options, CTA |
| Leadership & Governance | /leadership-governance | Fractional IT, cybersecurity, project, and AI governance support. | Fractional CIO/CTO, Fractional CISO, Project & Portfolio Governance, Fractional PMO/Project Recovery, AI Governance Advisory, outcomes, CTA |
| Cybersecurity, Privacy & Compliance | /cybersecurity-privacy-compliance | Practical governance and readiness support to help organizations reduce cyber risk, protect data, and meet expectations. | Cybersecurity, Privacy, Governance by Design, ISO 27001, SOC 2, GRC tooling, vendor/third-party risk review, outcomes, CTA |
| China & APAC Cross-Border Advisory | /china-apac-advisory | Bridging global IT governance expectations with China and APAC regulatory, technology, ecosystem, and execution realities. | China/APAC assessment, China Digital Clarity Workshop, global solution performance diagnostics, MLPS/PIPL/CSL/DSL readiness, global readiness for Asian companies, CTA |
| Training & Workshops | /training-workshops | Practical training and workshops for leaders, project teams, and technical teams. | SME cybersecurity essentials, China digital awareness, AI governance awareness, custom training, audience, outcomes, CTA |
| Technology Implementation & Business Enablement | /technology-business-enablement | Practical implementation support for businesses that need to modernize operations and execute technology initiatives. | Infrastructure and IT operations setup, regional/China IT setup, business software using Odoo, minimum viable system, implementation and adoption support, CTA |

---

## Visual Design Guidance

- Use the current site font and color theme. Do not introduce a new visual language just for Solutions.
- Use light mint/cyan card backgrounds where consistent with existing site styling.
- Keep headings dark navy and buttons blue to match current site cues.
- Use 3-column cards for longer service-area content. Use 4-column cards only for short benefits.
- Avoid excessive icons. If icons are used, keep them simple and consistent.
- Mobile cards should stack vertically.

---

## Build Sequence

| Step | Action | Completion Checkpoint |
|---|---|---|
| 1 | Finish Solutions overview page as draft | Hero, Featured Solution, benefit cards, solution area cards, engagement models, CTA all present |
| 2 | Preview desktop and mobile | No visible HTML code, no overlapping sections, cards readable |
| 3 | Create AppSec subpage draft | Detailed AppSec page exists but is not published until reviewed |
| 4 | Add Solutions to top navigation | Menu remains readable on desktop and mobile |
| 5 | Build remaining subpages one at a time | Each subpage has consistent structure and CTA |
| 6 | Publish after end-to-end review | All links tested, no broken links, no vendor names disclosed |

---

## Public Wording Guardrails

- Do not mention AppSecAI, EFA, Expert Fix Automation, or partner identity publicly at this stage.
- Do not claim automatic release to production. Use "developer review", "remediation support", and "automated workflow support" language.
- Avoid guaranteed claims such as "eliminate all false positives" or "fix all vulnerabilities".
- Use "helps", "supports", "reduces", "accelerates", and "improves" rather than absolute language.
- Keep the solution curious enough for prospects to contact Trusted-Aide for details.

---

## Frameworks & Standards Referenced

- ISO 27001
- SOC 2
- NIST CSF
- PDPA Singapore
- Cyber Essentials
- China MLPS (Multi-Level Protection Scheme)
- China PIPL (Personal Information Protection Law)
- MAS TRM Guidelines (reference only — removed from public badges for now)

---

*Last updated: May 2026 — Working draft, milestone: site working draft complete.*