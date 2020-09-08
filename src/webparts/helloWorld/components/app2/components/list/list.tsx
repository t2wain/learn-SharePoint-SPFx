import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react";
import { IItem } from "../../../actions/list-types";
import { delItem, toggleItem } from "../../../actions/list-actions";
import styles from "../../styles.module.scss";

interface IProps {
  items: IItem[];
  delItem: typeof delItem;
  toggleItem: typeof toggleItem;
}

const List: React.FC<IProps> = ({ items, delItem, toggleItem }) => {
  return items.length ? (
    <ul className={styles["lst-item"]}>
      {items.map((item) => (
        <li className={item.checked ? styles.done : ""} key={item.id}>
          {item.name}
          <DefaultButton onClick={() => delItem(item.id)}>x</DefaultButton>
          <DefaultButton onClick={() => toggleItem(item.id)}>y</DefaultButton>
        </li>
      ))}
    </ul>
  ) : (
    <div className={styles["lst-item"]}>No item yet</div>
  );
};

export default List;
