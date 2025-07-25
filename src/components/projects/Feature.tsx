import { CircleCheckBig } from "lucide-react";

const Feature = ({ feature }: { feature: string }) => {
  return (
    <p className="flex items-center gap-2 pt-2">
      <CircleCheckBig className="text-primary-dark" size={16} />
      <span className="text-primary">{feature}</span>
    </p>
  );
};

export default Feature;
