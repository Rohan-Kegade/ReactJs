import { useSearchParams } from "react-router-dom";
export default function () {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return <h1>User: {id}</h1>;
}
