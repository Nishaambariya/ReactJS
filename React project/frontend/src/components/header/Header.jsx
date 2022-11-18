import "./header.css";

export default function Header() {
  return (
    <div className="header">
    <marquee bgcolor="#6e0808" direction="left" loop="Infinite" behavior="alternate" scrollamount="20">
      <h1>
      What's on your mind today...!🤔
      </h1>
    </marquee>
    </div>
  );
}
