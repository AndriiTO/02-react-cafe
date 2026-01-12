import css from "./VoteOptions.module.css";
import type { VoteType , Votes} from "../Types/Votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>

      {canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}








// import type { VoteType } from '../Types/Votes';

// interface VoteOptionsProps {
//   onVote: (type: VoteType) => void;
//   onReset: () => void;
// }

// export default function VoteOptions({ onVote, onReset }: VoteOptionsProps) {
//   return (
//     <div>
//       <button onClick={() => onVote('good')}>Good</button>
//       <button onClick={() => onVote('neutral')}>Neutral</button>
//       <button onClick={() => onVote('bad')}>Bad</button>

//       <button onClick={onReset}>Reset</button>
//     </div>
//   );
// }








// import css from "./VoteOptions.module.css";
// import type { VoteType } from "../Types/Votes";

// interface VoteOptionsProps {
//   onVote: (type: VoteType) => void;
//   onReset: () => void;
//   canReset: boolean;
// }

// export default function VoteOptions({
//   onVote,
//   onReset,
//   canReset,
// }: VoteOptionsProps) {
//   return (
//     <div className={css.container}>
//       <button className={css.button} onClick={() => onVote("good")}>
//         Good
//       </button>
//       <button className={css.button} onClick={() => onVote("neutral")}>
//         Neutral
//       </button>
//       <button className={css.button} onClick={() => onVote("bad")}>
//         Bad
//       </button>

//       {canReset && (
//         <button
//           className={`${css.button} ${css.reset}`}
//           onClick={onReset}
//         >
//           Reset
//         </button>
//       )}
//     </div>
//   );
// }














// import type { Votes } from '../Types/Votes';
// interface VoteStatsProps {
//   votes: Votes;
// }

// export default function VoteStats({ votes }: VoteStatsProps) {
//   const total = votes.good + votes.neutral + votes.bad;

//   return (
//     <div>
//       <p>Good: {votes.good}</p>
//       <p>Neutral: {votes.neutral}</p>
//       <p>Bad: {votes.bad}</p>
//       <p>Total: {total}</p>
//     </div>
//   );
// }