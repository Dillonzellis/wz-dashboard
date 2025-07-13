import MainNav from "./components/MainNav";
import LocationSections from "./components/ui/LocationSections";

export default function Home() {
  return (
    <div className="">
      <MainNav />
      <main>
        <h1 className="">Dashboard Ops: Warzone EE</h1>
        <LocationSections />
      </main>
    </div>
  );
}
