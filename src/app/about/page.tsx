import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import MainPoint from "../_home/MainPoint";
import Experience from "../_home/Experience";
import Numbers from "../_home/Numbers";
import Technicians from "../_home/Technicians";

export default function Page() {
  return (
    <main>
      <CustomBreadcrumb title="About" img="/img/2.jpg" />
      <MainPoint />
      <Experience />
      <Numbers />
      <Technicians />
    </main>
  );
}
