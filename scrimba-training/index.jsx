import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
const element = <main>
    <img src="react-logo.png" alt="React Logo" />
</main>;
root.render(element);