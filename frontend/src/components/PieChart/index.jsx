import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = ({ dadosCursos }) => {
  if (!dadosCursos || Object.keys(dadosCursos).length === 0) {
    return <div className="flex justify-center items-center h-64 text-gray-500">Nenhum dado disponível</div>;
  }

  const chartData = {
    labels: Object.keys(dadosCursos),
    datasets: [{
      label: 'Candidatos por Curso',
      data: Object.values(dadosCursos),
      backgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 205, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
      ],
      borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
            return `(${percentage}%)`;
          }
        }
      }
    }
  };

  return (
    <div className="w-full h-64">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;