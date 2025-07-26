const Feature = ({ feature }: { feature: string }) => {
  return (
    <p className="border-primary flex items-center gap-2 rounded-full border border-dashed px-2 py-1">
      {/* <CircleCheckBig className="text-primary-dark" size={16} /> */}
      <span className="text-primary grow text-center">{feature}</span>
    </p>
  );
};

export default Feature;
