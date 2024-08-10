import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import OurServices from "../_home/OurServices";
import OurClients from "../_home/OurClients";

export default function Page() {
  return (
    <>
      <main>
        <CustomBreadcrumb title="Services" img="/img/3.jpg" />
        <OurServices />
        <OurClients />
      </main>
    </>
  );
}
