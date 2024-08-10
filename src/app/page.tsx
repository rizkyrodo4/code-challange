import BigBanner from "./_home/BigBanner";
import MainPoint from "./_home/MainPoint";
import Experience from "./_home/Experience";
import Numbers from "./_home/Numbers";
import OurServices from "./_home/OurServices";
import Technicians from "./_home/Technicians";
import OurClients from "./_home/OurClients";

export default function Home() {
  return (
    <main>
      <BigBanner />
      <MainPoint />
      <Experience />
      <Numbers />
      <OurServices />
      <Technicians />
      <OurClients />
    </main>
  );
}
