import Items from "@/modules/cart/Items";
import Breadcrumbs from "@/modules/navigation/Breadcrumbs";

export default function CartTemplate() {
  return (
    <>
      <Breadcrumbs />
      <div>
        <Items />
      </div>
    </>
  );
}
