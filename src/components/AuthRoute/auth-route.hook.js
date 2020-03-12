import { useEffect } from "react";

function useAuthRoute() {
  useEffect(
    () => console.log("se a rota não for autenticada, redireciona"),
    []
  );

  return ['teste']
}

export default useAuthRoute;
