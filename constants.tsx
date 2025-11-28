import { type ServiceCategory, type Testimonial } from './types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'financial',
    title: 'Financial & MIS Review',
    description: 'Get a clear picture of revenue, profitability and cash flows before you commit capital.',
    services: [
      {
        id: 'mis-review',
        title: 'MIS & P&L Review',
        summary: 'Detailed analysis of monthly MIS, P&L and balance sheet trends.',
        details:
          'We standardise MIS formats, reconcile with audited financials and highlight revenue, margin and cost trends that really matter to investors.'
      },
      {
        id: 'quality-of-earnings',
        title: 'Quality of Earnings',
        summary: 'Separate sustainable earnings from one-offs and accounting noise.',
        details:
          'Identify non-recurring items, normalise EBITDA and evaluate the sustainability of the target’s earnings profile under realistic assumptions.'
      },
      {
        id: 'working-capital',
        title: 'Working Capital & Cash',
        summary: 'Understand cash conversion, payables, receivables and inventory discipline.',
        details:
          'We analyse ageing, DSO/DPO/DIO and free cash flow to highlight liquidity risks and potential upside from better working capital management.'
      }
    ]
  },
  {
    id: 'business',
    title: 'Business & Customer Analytics',
    description: 'Go beyond topline to understand cohorts, retention and unit economics.',
    services: [
      {
        id: 'cohort-analysis',
        title: 'Cohort & Retention',
        summary: 'Track how different customer cohorts behave over time.',
        details:
          'We build cohort views on acquisition channels, repeat rates and churn to evaluate the true health of the customer base.'
      },
      {
        id: 'unit-economics',
        title: 'Unit Economics',
        summary: 'Measure contribution margin at the most granular level.',
        details:
          'Contribution margin per order / outlet / city – with a clear view of fully-loaded vs variable costs – to support pricing and scaling decisions.'
      },
      {
        id: 'sales-funnel',
        title: 'Sales Funnel Diagnostics',
        summary: 'Identify drop-offs from lead to conversion.',
        details:
          'We map the funnel, calculate conversion rates at each stage and highlight operational gaps limiting growth.'
      }
    ]
  },
  {
    id: 'legal',
    title: 'Legal & Compliance Snapshot',
    description: 'A pragmatic legal view that complements financial and business diligence.',
    services: [
      {
        id: 'contracts-review',
        title: 'Key Contracts Review',
        summary: 'Summarised view of key customer, supplier and partner contracts.',
        details:
          'We abstract key clauses, obligations, lock-ins, SLAs and termination rights so you can quickly see concentration and legal risks.'
      },
      {
        id: 'regulatory',
        title: 'Regulatory & Licenses',
        summary: 'Check if the right registrations and licences are in place.',
        details:
          'We list applicable registrations / licences and highlight gaps or upcoming renewals that may impact continuity.'
      },
      {
        id: 'litigation',
        title: 'Litigation Snapshot',
        summary: 'High-level view of ongoing or potential disputes.',
        details:
          'We capture disputes, their stage and potential impact – focusing on what is material to your deal thesis.'
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Pranshul Yadav',
    title: 'CEO, Frozen Bottle',
    imageUrl: 'frozenbottle.jpg'
  },
  {
    name: 'Arun Bhatia',
    title: 'Founder, MedPay',
    imageUrl: 'medpay.png'
  },
  {
    name: 'Aseem Khare',
    title: 'CEO, Khare.ai',
    imageUrl: 'kkhare.jpg'
  },
  {
    name: 'Team Kling',
    title: 'klingbreweries',
    imageUrl: 'kling.jpg'
  },
  {
    name: 'Evening Flavors',
    title: 'Hospitality Partner',
    imageUrl: 'eveningflavor.png'
  }
];
