import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo"
import VoteOptions from "../VoteOptions/VoteOptions";
import { Votes, VoteType } from "../Types/Votes";
import css from "./App.module.css";

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };
}


const App = () => {
  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (voteType: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [voteType]: prevVotes[voteType] + 1
    }));
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };

  return (
    <div>
        <CafeInfo/>
        <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={votes.good + votes.neutral + votes.bad > 0}></VoteOptions>
         </div>

  )
}

export default App