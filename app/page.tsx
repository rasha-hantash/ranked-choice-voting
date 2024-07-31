'use client';
import React, { useState } from 'react';

const Vote = () => {
  const candidates = [
    { name: 'The Trading Chick', votes: '420k' },
    { name: 'Jeff Bezos', votes: '366k' },
    { name: 'Kanye West', votes: '1' },
    { name: 'Francis Suarez', votes: '2k' },
    { name: 'Taylor Swift', votes: '192k' },
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-4">
          <div className="h-0.5 w-12 bg-indigo-500 mr-2"></div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-indigo-500 text-2xl">★</span>
            ))}
          </div>
          <div className="h-0.5 w-12 bg-indigo-500 ml-2"></div>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">VOTE</h2>
        <p className="text-sm text-gray-600 mb-4">
          Rank your votes, placing your top choice at the top and your last choice at the bottom.
        </p>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          3 minutes 24 seconds remaining
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {candidates.map((candidate, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <span className="font-medium text-gray-900">{index + 1}. {candidate.name}</span>
            <div className="flex items-center">
              <span className="text-green-600 font-semibold mr-3">▲ {candidate.votes}</span>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-xs text-gray-500 space-y-2 mb-6">
        <p>
          *Votes will be counted with your first choice receiving 1 full vote, second choice receiving 0.8, third choice receiving 0.6, fourth choice receiving 0.4, and fifth choice receiving 0.2.
        </p>
        <p>
          **A rank favorite having the most upvotes does not guarantee a win and a rank favorite having the least upvotes does not guarantee a loss.
        </p>
      </div>
      <div className="flex items-start mb-8">
        <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1 mr-2" />
        <label htmlFor="terms" className="text-xs text-gray-700">
          Check this box to certify that you completed these votes yourself, without the help or intervention of others. Submitting fraudulent votes may result in a fine up to $250,000 and life in prison.
        </label>
      </div>
      <button className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
        SUBMIT
      </button>
    </div>
  );
};


// const Vote = () => {
//   const candidates = [
//     { name: 'The Trading Chick', votes: '420k' },
//     { name: 'Jeff Bezos', votes: '366k' },
//     { name: 'Kanye West', votes: '1' },
//     { name: 'Francis Suarez', votes: '2k' },
//     { name: 'Taylor Swift', votes: '192k' },
//   ];

//   return (
//     <div className="bg-white max-w-lg mx-auto bg-white min-h-screen flex flex-col justify-center px-4 py-2">
//       <div className="text-center mb-6">
//         <div className="flex justify-center items-center mb-2">
//           <div className="h-1 w-12 bg-red-500 mr-1"></div>
//           <div className="flex">
//             {[...Array(5)].map((_, i) => (
//               <span key={i} className="text-blue-800 text-2xl">★</span>
//             ))}
//           </div>
//           <div className="h-1 w-12 bg-red-500 ml-1"></div>
//         </div>
//         <h2 className="text-black text-2xl font-bold mb-2">VOTE</h2>
//         <p className="text-sm text-gray-600 mb-2">
//           Rank your votes, placing your top choice at the top and your last choice at the bottom.
//         </p>
//         <p className="text-xs text-gray-500 flex items-center justify-center">
//           <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//           3 minutes 24 seconds remaining
//         </p>
//       </div>
//       <ul className="space-y-4 mb-6">
//         {candidates.map((candidate, index) => (
//           <li key={index} className="flex justify-between items-center">
//               <div className="flex items-center">
//               <span className="text-black font-semibold">{index + 1}</span> <span className="text-black">{candidate.name}</span>
//               </div>
            
//             <div className="flex items-center">
//               <span className="text-green-600 mr-2">▲ {candidate.votes}</span>
//               <span className="text-gray-400">☰</span>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <p className="text-[10px] text-gray-500 mb-2">
//         *Votes will be counted with your first choice receiving 1 full vote, second choice receiving 0.8, third choice receiving 0.6, fourth choice receiving 0.4, and fifth choice receiving 0.2.
//       </p>
//       <p className="text-[10px] text-gray-500 mb-4">
//         **A rank favorite having the most upvotes does not guarantee a win and a rank favorite having the least upvotes does not guarantee a loss.
//       </p>
//       <div className="flex items-start mb-6">
//         <input type="checkbox" className="mt-1 mr-2" />
//         <p className="text-[10px] text-gray-700">
//           Check this box to certify that you completed these votes yourself, without the help or intervention of others. Submitting fraudulent votes may result in a fine up to $250,000 and life in prison.
//         </p>
//       </div>
//       <button className="w-full py-3 bg-gray-200 text-gray-800 rounded-full text-sm font-semibold">SUBMIT</button>
//     </div>
//   );
// };

export default function App() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* <CommunityRanks /> */}
      <Vote />
    </div>
  );
}


// const CommunityRanks = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const ranks = [
//     { name: 'The Trading Chick', votes: '420k' },
//     { name: 'Jeff Bezos', votes: '366k' },
//     { name: 'Donald Trump', votes: '255k' },
//     { name: 'Paris Hilton', votes: '250k' },
//     { name: 'Ashton Kutcher', votes: '249k' },
//     { name: 'Sydney Sweeney', votes: '247k' },
//     { name: 'Mark Cuban', votes: '239k' },
//     { name: 'Elena Cardone', votes: '239k' },
//     { name: 'Grant Cardone', votes: '234k' },
//     { name: 'Ivanka Trump', votes: '233k' },
//   ];

//   return (
//     <div className="max-w-sm mx-auto p-4 bg-white rounded-3xl shadow-lg">
//       <h1 className="text-2xl font-bold text-center mb-4">PRESIDENTIAL ELECTION APP</h1>
//       <div className="mb-4">
//         <h2 className="text-xl font-semibold mb-2">COMMUNITY RANKS</h2>
//         <p className="text-sm mb-2">You have 3/5 upvotes remaining</p>
//         <p className="text-xs mb-4">
//           NOTICE: You'll have until Election Day to use your upvotes. On voting day you'll be able to rank your upvotes according to your preference.
//         </p>
//         <input
//           type="text"
//           placeholder="search the ranks"
//           className="w-full p-2 rounded-full border"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <ul className="space-y-2">
//         {ranks.map((rank, index) => (
//           <li key={index} className="flex justify-between items-center">
//             <span>{index + 1} {rank.name}</span>
//             <span className="text-green-600">▲ {rank.votes}</span>
//           </li>
//         ))}
//       </ul>
//       <button className="w-full mt-4 p-2 bg-gray-200 rounded-full">SEE MORE</button>
//       <p className="text-center mt-4 text-sm">don't see your favorite nominee?</p>
//       <button className="w-full mt-2 p-2 bg-gray-200 rounded-full">SUBMIT A NOMINATION</button>
//     </div>
//   );
// };