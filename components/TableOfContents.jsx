import { observer, useLocalObservable } from "mobx-react-lite";
import PageData from "../store/PageData";

const TableOfContents = observer(() => {
  const pageDataStore = useLocalObservable(() => PageData);

  return (
    <section style={{ marginLeft: "10px" }}>
      <h3 style={{ letterSpacing: ".5px" }}>Table of content</h3>
      <ul>
        {pageDataStore.data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
});

export default TableOfContents;
