import SortPage from "./SortPage";
import QuickSortItem from "../components/ItemQuickSort";
import { createAnimationState } from "../backend/state/sorting/QuickSortState";

export default function QuickSortPage() {
  return (
    <SortPage
      SortItem={QuickSortItem}
      createAnimationState={createAnimationState}
      action="QUICK"
    ></SortPage>
  );
}
