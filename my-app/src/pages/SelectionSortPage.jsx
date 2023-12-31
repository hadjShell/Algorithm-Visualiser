import SortPage from "./SortPage";
import SelSortItem from "../components/ItemSelSort";
import { createAnimationState } from "../backend/state/sorting/SelectionSortState";

export default function SelectionSortPage() {
  return (
    <SortPage
      SortItem={SelSortItem}
      createAnimationState={createAnimationState}
    ></SortPage>
  );
}
