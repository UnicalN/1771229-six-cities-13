type PremiumCardProps = {
  isPremium: boolean;
}

export default function PremiumMark({isPremium} : PremiumCardProps):JSX.Element {
  if (isPremium) {
    return (
      <div className="place-card__mark"><span>Premium</span></div>
    );
  }
  return <div/>;
}
