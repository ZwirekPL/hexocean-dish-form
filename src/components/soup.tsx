import soup from "/bowl-of-soup.png";
import chilli from "/chilli.png";
import leaf from "/leaf.png";

type SoupProps = { spiciness: number };

const Soup = ({ spiciness }: SoupProps) => {
  return (
    <div className="soup-container">
      <img
        src={soup}
        alt="Animated bowl of soup"
        width={150}
        className="soup-bowl"
      />
      <img
        src={chilli}
        alt="Animated chilli pepper"
        width={75}
        className="soup-chilli"
        style={{
          display: spiciness > 4 ? "block" : "none",
          scale: `${spiciness / 5}`,
        }}
      />
      <img
        src={leaf}
        alt="Animated leaf pepper"
        width={75}
        className="soup-leaf"
        style={{
          display: spiciness < 5 ? "block" : "none",
          scale: `${1.5 / spiciness}`,
        }}
      />
    </div>
  );
};

export default Soup;
