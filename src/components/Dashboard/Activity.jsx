import { Line } from "react-chartjs-2";

const Activity = () => {
  const labels = ["Minggu ke 1", "Minggu ke 2", "Minggu ke 3", "Minggu ke 4"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Aktifitas Belajarku",
        data: [10, 40, 60, 90],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
  };
  return (
    <>
      <div>
        <Line config={config} />
      </div>
    </>
  );
};

export default Activity;
