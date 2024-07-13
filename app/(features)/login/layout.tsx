import LoginNav from "./components/LoginNav";
import PlantationForm from "./components/PlantationDetailsForm";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <LoginNav /> */}
      <PlantationForm />
      {/* {children} */}
    </div>
  );
}
