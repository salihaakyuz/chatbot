import my from "./Download.module.css";
const Download = ({ value, names }) => {
  return (
    <div className={my.downloadContainer}>
      <p>{names}:</p>
      {value.map((opt) => (
        <button key={opt.id} className={my.DownloadMiniButtons}>
          {opt.title}
        </button>
      ))}
    </div>
  );
};

export default Download;
