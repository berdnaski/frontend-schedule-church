import { AuthComponent } from "@/components/ui/auth-component";

export function Admin() {
  return (
    <AuthComponent role="ADMIN" redirect="/dashboard">
      <div>
        <h1>Admin</h1>
      </div>
    </AuthComponent>
  );
}
