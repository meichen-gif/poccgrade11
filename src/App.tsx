import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const searchFlowers = async () => {
  

  if (!search) return;

  setLoading(true);

  try {
    const url = `https://corsproxy.io/?${encodeURIComponent(
  `https://serpapi.com/search.json?engine=google_images&q=${search}&api_key=${import.meta.env.VITE_SERPAPI_KEY}`
)}`;

const response = await fetch(url);

    

    const data = await response.json();

    

    setImages(data.images_results || []);
  } catch (error: any) {
    console.error(error);
alert("Failed to load images");
    console.error(error);
  }

  setLoading(false);
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #ff9a9e, #fad0c4, #fbc2eb)",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "42px",
          fontWeight: "bold",
          letterSpacing: "3px",
          marginBottom: "25px",
          textTransform: "uppercase",
        }}
      >
        🌸 Flower Search Gallery 🌸
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Search flower..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "350px",
            padding: "12px",
            borderRadius: "12px",
            border: "2px solid white",
            fontSize: "16px",
          }}
        />

        <button
          onClick={searchFlowers}
          style={{
            backgroundColor: "#d63384",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Search
        </button>
      </div>

      {loading && (
        <h2
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Loading...
        </h2>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              width: "260px",
              backgroundColor: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={img.thumbnail}
              alt={img.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <p
                style={{
                  textAlign: "center",
                  color: "#444",
                  lineHeight: "1.5",
                  fontSize: "14px",
                }}
              >
                {img.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;