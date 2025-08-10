import PbLocations from "@/components/downtown-ee/pb-locations";
import VideoRoute from "@/components/downtown-ee/video-route";
import { MainHeading } from "@/components/ui/main-heading";

export default function Home() {
  return (
    <div>
      <section>
        <MainHeading className="pb-2">Dashboard Ops: Warzone EE</MainHeading>
        <p className="pb-6 md:pb-12">
          Click the location cards to enlarge the image.
        </p>
      </section>
      <section>
        <PbLocations />
        <VideoRoute />
      </section>
    </div>
  );
}
