import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Order | Top Up Games",
  description: "Track Order | Top Up Games",
};

const TrackOrderLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default TrackOrderLayout;
