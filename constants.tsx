import React from 'react';
import { type ServiceCategory, type Testimonial } from './types';

const DocumentChartBarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
);

const UsersIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-4.683c.65-.935 1-2.06 1-3.255a4.5 4.5 0 0 0-1.378-3.241c.21-.36.42-.746.598-1.154a4.5 4.5 0 0 0-2.09-5.162c-1.295-.78-2.956-.599-4.131.285-.928.69-1.63 1.73-2.035 2.866-1.034 2.87-1.16 5.874-1.16 5.874s-1.034 2.87-1.16 5.874c-.405 1.136-1.107 2.176-2.035 2.866-1.175.885-2.836 1.066-4.131.286a4.5 4.5 0 0 0-2.09 5.162c.178.408.388.794.598 1.154A4.5 4.5 0 0 0 2.25 16.5c0 1.195.35 2.32.984 3.255a6.375 6.375 0 0 1 11.964-4.683z" />
    </svg>
);

const ChartPieIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
);

const DocumentTextIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
);

const ShieldExclamationIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
);

const CalculatorIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 3h.008v.008H8.25v-.008Zm0 3h.008v.008H8.25v-.008Zm3-6h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm3-6h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm-7.5-6.75h.008v.008H8.25v-.008Zm0 3h.008v.008H8.25v-.008Zm0 3h.008v.008H8.25v-.008ZM8.25 6.75h.008v.008H8.25V6.75ZM12 6h.008v.008H12V6Zm3 0h.008v.008H15V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V6.75Z" />
    </svg>
);


export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'due-diligence',
    title: 'Short Due Diligence of Company Data',
    services: [
      {
        id: 'financial',
        title: 'Financial Analysis',
        description: 'Deep dive into financial statements and health.',
        details: 'Our financial analysis service provides a comprehensive review of your company\'s financial statements, including the balance sheet, income statement, and cash flow statement. We identify key trends, assess financial health, and provide actionable insights to improve profitability and stability.',
        icon: <DocumentChartBarIcon className="h-8 w-8 text-brand-blue" />
      },
      {
        id: 'user-cohort',
        title: 'User Cohort Analysis',
        description: 'Understand user behavior and retention over time.',
        details: 'User Cohort Analysis is crucial for understanding customer lifecycle and retention. We group users into cohorts based on their join date and track their behavior over time. This helps in identifying valuable user segments, improving marketing strategies, and enhancing product features for better engagement.',
        icon: <UsersIcon className="h-8 w-8 text-brand-blue" />
      },
      {
        id: 'mis',
        title: 'MIS Reporting',
        description: 'Management Information System reporting.',
        details: 'Our Management Information System (MIS) reporting service helps in creating structured reports that provide a holistic view of your business operations. We help you track key performance indicators (KPIs), monitor goals, and make data-driven decisions for strategic planning and operational efficiency.',
        icon: <ChartPieIcon className="h-8 w-8 text-brand-blue" />
      },
    ]
  },
  {
    id: 'legal',
    title: 'Legal, License, and Notices',
    services: [
      {
        id: 'legal-summary',
        title: 'Short Summary',
        description: 'Concise summaries of legal documents and licenses.',
        details: 'Navigating complex legal documents can be daunting. Our short summary service provides clear, concise, and easy-to-understand summaries of your legal documents, licenses, and notices. We highlight key terms, obligations, and potential risks, saving you time and ensuring you are well-informed.',
        icon: <DocumentTextIcon className="h-8 w-8 text-brand-blue" />
      },
    ]
  },
  {
    id: 'secretarial',
    title: 'Secretarial',
    services: [
      {
        id: 'agreement-risk',
        title: 'Current Agreement Risk',
        description: 'Assess and mitigate risks in your existing agreements.',
        details: 'We conduct a thorough review of your current agreements to identify potential risks, ambiguities, and unfavorable clauses. Our team provides recommendations to mitigate these risks, strengthen your legal position, and ensure your agreements are aligned with your business objectives.',
        icon: <ShieldExclamationIcon className="h-8 w-8 text-brand-blue" />
      },
    ]
  },
  {
    id: 'tax',
    title: 'Tax',
    services: [
      {
        id: 'tax-structuring',
        title: 'Tax Structuring',
        description: 'Optimize your tax structure for maximum efficiency.',
        details: 'Our tax structuring service helps you design and implement a tax-efficient corporate structure. We analyze your business model and provide strategic advice on entity selection, tax planning, and compliance to minimize tax liabilities and maximize your bottom line.',
        icon: <CalculatorIcon className="h-8 w-8 text-brand-blue" />
      },
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Pranshul Yadav',
    title: 'CEO, Frozen Bottle',
    imageUrl: 'https://i.pravatar.cc/150?u=aditya_sharma',
  },
  {
    name: 'Arun Bhatia',
    title: 'Founder, MedPay',
    imageUrl: 'https://i.pravatar.cc/150?u=priya_mehta',
  },
  {
    name: 'Aseem khare',
    title: 'CEO, Khare.ai',
    imageUrl: 'kkhare.jpg',
  },
  {
    name: 'Sneha Rao',
    title: 'klingbreweries',
    imageUrl: 'https://i.pravatar.cc/150?u=sneha_rao',
  },
  {
    name: 'Arjun Desai',
    title: 'EveningFlavors',
    imageUrl: 'https://www.facebook.com/photo/?fbid=508020454837061&set=a.508020428170397',
  },
  {
    name: 'Kavita Singh',
    title: 'Lead Investor, tripver',
    imageUrl: 'https://i.pravatar.cc/150?u=kavita_singh',
  }
];