import { Metadata } from "next";
import View from "../../../components/NBA/views/Home";

export const metadata = {
  title: "Kepler Sports",
};

export default async function Page({ params }) {
  return <View date={params.date} />;
}
