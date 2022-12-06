import { Layout } from "antd";
const { Content } = Layout;
import { observer, useLocalObservable } from "mobx-react-lite";
import PageData from "../store/PageData";

const Contents = observer(() => {
  const pageDataStore = useLocalObservable(() => PageData);

  return (
    <Content>
      {pageDataStore.data.map((item) => (
        <div key={item.id}>
          <div className="contentContainer">
            <h1 className="contentTitle">{item.name}</h1>
            <p className="content">{item.content}</p>
          </div>
          <hr />
        </div>
      ))}
    </Content>
  );
});

export default Contents;
