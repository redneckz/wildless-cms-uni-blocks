const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path
      stroke="#1C1C1C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M8 2v3M16 2v3M3.5 9.09h17M3 13.01V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5"
    />
    <path
      stroke="#42AB44"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M15.991 13h.018M15.991 17.006h.018M11.991 13h.018M11.991 17.006h.018M7.991 13h.018M7.991 17.006h.018"
    />
  </svg>
);
const EmptyWalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2.5 14.07v-2.56c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76H6.26c-2.07 0-3.76-1.69-3.76-3.76M12.28 2.17a1.9 1.9 0 0 1 2.57 1.78v3.8"
    />
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l3.97-1.5M22.56 13.97v2.06c0 .55-.44 1-1 1.02H19.6c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02Z"
    />
    <path
      stroke="#42AB44"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 12h7"
    />
  </svg>
);
const PercentageSquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path
      stroke="#1C1C1C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
    />
    <path
      stroke="#42AB44"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m8.32 15.27 6.54-6.54M8.73 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46ZM15.27 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
    />
  </svg>
);

export const Icons = {
  EmptyWalletIcon,
  PercentageSquareIcon,
  CalendarIcon,
};
