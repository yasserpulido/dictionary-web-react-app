import { useFont, useTheme } from "../../hooks";

const NotFound = () => {
  const { theme } = useTheme();
  const { selectedFont } = useFont();
  const isDarkMode = theme === "dark-mode";

  return (
    <div className="text-center text-gray-500 mt-10">
      <p className="text-6xl">😕</p>
      <p
        className={`mt-10 font-bold text-xl ${selectedFont}`}
        style={{
          color: isDarkMode ? "#ffffff" : "#2d2d2d",
        }}
      >
        No Definitions Found
      </p>
      <p
        className={`mt-10 text-lg ${selectedFont}`}
        style={{
          color: "#757575",
        }}
      >
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default NotFound;
