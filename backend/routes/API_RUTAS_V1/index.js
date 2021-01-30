import RutasV1 from "./RutasV1";

export default function RV1(router, controllers) {
  // *Ruta modelo
  const RM = router();
  const { Usuarios, Login } = controllers;

  RM.use("/Usuarios", RutasV1(router, Usuarios));
  return RM;
}
