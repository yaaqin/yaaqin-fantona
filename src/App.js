import { useEffect, useState } from "react";
import RouterLinks from "./router/Routes";
import NewLoading from "./load/newLoading";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="fastoneApp">
      {loading ? (
          <NewLoading/>
      ) : (
        <RouterLinks></RouterLinks>
      )}
    </div>
  );
}

export default App;
