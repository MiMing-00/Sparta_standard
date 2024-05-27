import React, { useEffect } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { textsSlice } from "./redux/slices/textsSlice";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  // const [texts, setTexts] = useState(() =>
  //   localStorage.getItem("texts")
  //     ? JSON.parse(localStorage.getItem("texts"))
  //     : [],
  // );

  const texts = useSelector((state) => state.texts);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput
        onAddText={(text) => dispatch(textsSlice.actions.onAddText(text))}
      />
      <TextList texts={texts} />
    </div>
  );
}

export default App;
