import SortPage from "./SortPage";
import InsSortItem from "../components/ItemInsSort";
import { createAnimationState } from "../backend/state/sorting/InsertionSortState";

export default function InsertionSortPage() {
  return (
    <SortPage
      SortItem={InsSortItem}
      createAnimationState={createAnimationState}
    ></SortPage>
  );
}
