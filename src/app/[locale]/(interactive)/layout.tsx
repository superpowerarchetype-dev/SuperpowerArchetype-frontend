import InteractiveBackground from "~/component/interactive-background";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="overflow-hidden"
    >
      <InteractiveBackground />
      {children}
    </div>
  );
}
