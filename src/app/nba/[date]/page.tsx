import { Metadata } from "next";
import View from "../../../components/NBA/views/Home";

export const metadata: Metadata = {
  title: "Kepler Sports",
};

export default async function Page({ params }: { params: { date: string } }) {
  return <View date={params.date} />;
}
