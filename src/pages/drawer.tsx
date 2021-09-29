import React from "react";
import { Drawer } from "@caisy/league";

const DrawerComponentShowcase = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Drawer
        title="Crear elemento del tablero"
        animationTime={300}
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        width={"20vw"}
        maskClosable={true}
        closable={true}
        top="70px"
      >
        <div>Test drawer</div>
      </Drawer>
      <button style={{ width: "fit-content", height: "fit-content" }} onClick={() => setOpen((p) => !p)}>
        Open
      </button>
    </>
  );
};

export default DrawerComponentShowcase;
