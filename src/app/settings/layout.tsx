import SettingsNav from "../components/SettingsNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen w-screen bg-myblue-500 flex">
      <SettingsNav />
      {children}
    </section>
  );
}
