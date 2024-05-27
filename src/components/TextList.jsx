export default function TextList({ texts }) {
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text.text}</li>
      ))}
    </ul>
  );
}
